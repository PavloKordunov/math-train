import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    status?: "Student" | "Teacher";
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      status?: "Student" | "Teacher";
    };
  }

  interface JWT {
    user?: User;
  }
}
