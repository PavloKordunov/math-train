import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  debug: process.env.NODE_ENV === "development",
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  
  callbacks: {
    async signIn({ user }) {
      try {
        console.log('Sign-in attempt from:', user.email);

        const res = await fetch(`${API_URL}/api/login/oauth`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.email }),
        });

        if (!res.ok) {
          console.error('OAuth endpoint failed:', res.status, await res.text());
          return false;
        }

        const result = await res.json();
        if (result?.user) {
          user.status = result.user.status;
          return true;
        }

        return false;
      } catch (error) {
        console.error('SignIn callback error:', error);
        return false;
      }
    },
    
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    
    async session({ session, token }) {
      session.user = token.user as { 
        name?: string | null; 
        email?: string | null; 
        image?: string | null; 
        status?: "Student" | "Teacher"; 
      };
      return session;
    }    
  },
});