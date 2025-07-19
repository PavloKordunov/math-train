import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { jwtVerify } from 'jose'

interface User {
    id: string
    email: string
    name: string
    status: 'Student' | 'Teacher' | 'Admin'
    subject?: string
}

interface Session {
    user?: User
    expires: string
}

const PUBLIC_ROUTES = ['/login', '/register']
const STUDENT_ROUTES = [
    '/home',
    '/student/[id]',
    '/performance',
    '/test/[id]',
    '/performance/[id]',
]
const TEACHER_ROUTES = [
    '/teacher',
    '/teacher-performance',
    '/topic-tests/[subject]',
    '/create-test',
    '/view-test/[id]',
    '/performance/[id]',
    '/student/[id]',
]
const ADMIN_ROUTES = [
    '/admin',
    '/create-topic/[subject]',
    '/create-test',
    '/view-test/[id]',
]

const SECRET = process.env.NEXT_JWT_SECRET
if (!SECRET) throw new Error('NEXT_JWT_SECRET is not defined')

function tryParseJson(jsonString: string | undefined) {
    if (!jsonString) return null
    try {
        return JSON.parse(jsonString)
    } catch {
        return null
    }
}

function isRouteMatch(pathname: string, routes: string[]): boolean {
    return routes.some((route) =>
        new RegExp(
            '^' +
                route.replace(/\//g, '\\/').replace(/\[.*?\]/g, '[^/]+') +
                '($|\\?.*)'
        ).test(pathname)
    )
}

function handleRoleRouting(
    role: string,
    pathname: string,
    request: NextRequest
) {
    const allowedRoutes =
        role === 'Student'
            ? STUDENT_ROUTES
            : role === 'Teacher'
            ? TEACHER_ROUTES
            : role === 'Admin'
            ? ADMIN_ROUTES
            : []

    const allProtectedRoutes = [
        ...STUDENT_ROUTES,
        ...TEACHER_ROUTES,
        ...ADMIN_ROUTES,
    ]

    if (
        isRouteMatch(pathname, allProtectedRoutes) &&
        !isRouteMatch(pathname, allowedRoutes)
    ) {
        return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    return NextResponse.next()
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.startsWith('/api/auth') || pathname.startsWith('/_next')) {
        return NextResponse.next()
    }

    if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
        const nativeTokenValue = request.cookies.get('token')?.value
        let tokenString = nativeTokenValue
        const parsedToken = nativeTokenValue
            ? tryParseJson(nativeTokenValue)
            : null

        if (parsedToken?.access_token) {
            tokenString = parsedToken.access_token
        }

        const nextAuthSession = (await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET!,
        })) as Session | null

        let role: string | null = null

        if (nextAuthSession?.user?.status) {
            role = nextAuthSession.user.status
        } else if (tokenString) {
            try {
                const { payload } = await jwtVerify(
                    tokenString,
                    new TextEncoder().encode(SECRET)
                )
                role = (payload.role as string) || (payload.status as string)
            } catch (error) {
                console.error('Token verification failed:', error)
            }
        }

        if (role) {
            const targetUrl =
                role === 'Teacher'
                    ? '/teacher'
                    : role === 'Student'
                    ? '/home'
                    : role === 'Admin'
                    ? '/admin'
                    : '/'
            return NextResponse.redirect(new URL(targetUrl, request.url))
        }

        return NextResponse.next()
    }

    // Обробка захищених маршрутів
    const nextAuthSession = (await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET!,
    })) as Session | null

    if (nextAuthSession?.user?.status) {
        return handleRoleRouting(nextAuthSession.user.status, pathname, request)
    }

    const nativeTokenValue = request.cookies.get('token')?.value
    if (!nativeTokenValue) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    let tokenString = nativeTokenValue
    const parsedToken = tryParseJson(nativeTokenValue)
    if (parsedToken?.access_token) {
        tokenString = parsedToken.access_token
    }

    try {
        const { payload } = await jwtVerify(
            tokenString,
            new TextEncoder().encode(SECRET)
        )
        return handleRoleRouting(
            (payload.role as string) || (payload.status as string),
            pathname,
            request
        )
    } catch (error) {
        console.error('Token verification failed:', error)
        const response = NextResponse.redirect(new URL('/login', request.url))
        response.cookies.delete('token')
        return response
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
