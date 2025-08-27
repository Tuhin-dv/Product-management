// src/app/dashboard/page.jsx
import React from "react"

export default function DashboardHome() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Use the sidebar to manage products, view reports, and more.
        </p>
      </header>

      {/* Dashboard Cards or Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p className="text-gray-500">Manage all your products here.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-gray-500">Check recent orders and statuses.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p className="text-gray-500">View dashboard statistics and insights.</p>
        </div>
      </section>
    </div>
  )
}
