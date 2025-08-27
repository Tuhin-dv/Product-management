import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const users = [{ id: 1, name: "Admin", email: "admin@example.com", password: "123456" }]

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials.email && u.password === credentials.password)
        if (user) return user
        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" }
}

// ✅ App Router export
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
