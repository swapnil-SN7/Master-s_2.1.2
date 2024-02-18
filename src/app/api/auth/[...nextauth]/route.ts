import prisma from "@/lib/prisma";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const record = prisma.bidder.findUnique({
            where: {
              email: user.email as string,
            },
          });
          if (!record) {
            const newUser = await prisma.bidder.create({
              data: {
                email: user.email as string,
                name: user.email as string,
                contactNo: user.email as string,
              },
            });
            return true;
          }
        } catch (err) {
          return false;
        }
      }
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
});

export { handler as GET, handler as POST };
