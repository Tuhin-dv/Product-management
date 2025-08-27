"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })
    setLoading(false)
    if (res.error) setError("Invalid email or password")
    else router.push("/dashboard")
  }

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl space-y-6" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center justify-center text-gray-400">OR</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Login with Google
        </button>
      </form>
    </div>
  )
}
