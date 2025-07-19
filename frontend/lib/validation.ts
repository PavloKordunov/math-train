import { email, z } from 'zod'

export const LoginSchema = z.object({
    email: z
        .string()
        .min(1, "Електронна пошта обов'язкова")
        .email('Введіть коректну електронну пошту'),
    password: z
        .string()
        .min(6, 'Пароль має містити щонайменше 6 символів')
        .max(50, 'Пароль занадто довгий'),
})

export type LoginFormData = z.infer<typeof LoginSchema>

export const RegisterSchema = z
    .object({
        name: z
            .string()
            .min(2, "Ім'я має містити щонайменше 2 символи")
            .max(50, "Ім'я занадто довге"),
        email: z
            .string()
            .min(1, "Електронна пошта обов'язкова")
            .email('Введіть коректну електронну пошту'),
        phone: z
            .string()
            .min(10, 'Телефон має містити щонайменше 10 цифр')
            .max(15, 'Телефон занадто довгий')
            .regex(/^[0-9]+$/, 'Телефон має містити лише цифри'),
        password: z
            .string()
            .min(6, 'Пароль має містити щонайменше 6 символів')
            .max(50, 'Пароль занадто довгий'),
        repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: 'Паролі не співпадають',
        path: ['repeatPassword'],
    })

export type RegisterFormData = z.infer<typeof RegisterSchema>

export const RegisterStudentSchema = z.object({
    name: z
        .string()
        .min(2, "Ім'я має містити щонайменше 2 символи")
        .max(50, "Ім'я занадто довге"),
    email: z
        .string()
        .min(1, "Електронна пошта обов'язкова")
        .email('Введіть коректну електронну пошту'),
    password: z
        .string()
        .min(6, 'Пароль має містити щонайменше 6 символів')
        .max(50, 'Пароль занадто довгий'),
})

export type RegisterStudentFormData = z.infer<typeof RegisterStudentSchema>
