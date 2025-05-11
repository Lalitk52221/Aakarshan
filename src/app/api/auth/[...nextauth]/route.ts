import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}

interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
}
import User from "@/models/user";
import connectToDatabase from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text", placeholder: "Student/Teacher" },
      },
      async authorize(credentials) {
        try {
          if (
            !credentials?.email ||
            !credentials?.password ||
            !credentials?.role
          ) {
            throw new Error("All fields are required.");
          }
          await connectToDatabase();
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("No user found with the email.");
          }
          const isValidPassword = await bcrypt.compare(credentials.password, user.password as string);
          if (!isValidPassword) {
            throw new Error("Invalid password.");
          }

          if (user.role !== credentials.role) {
            throw new Error("Role not matched");
          }

          return user;
        } catch {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: profile?.email });
        if (!existingUser) {
          await User.create({
            name: profile?.name,
            email: profile?.email,
            role: "Student",
            
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = (user as IUser).role;
      }
      return token;
  
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
          image: token.picture,
          role: token.role as string | null | undefined,
        };
      }
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };
