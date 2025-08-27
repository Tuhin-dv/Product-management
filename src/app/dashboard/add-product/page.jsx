// src/app/add-product/page.jsx
// Client component for adding a new product

"use client";
import React, { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", img: "", description: "", price: "" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          img: form.img,
          description: form.description,
          price: Number(form.price),
        }),
      });
      if (res.ok) {
        setSuccess("Product added successfully!");
        setForm({ name: "", img: "", description: "", price: "" });
      } else {
        const data = await res.json();
        setSuccess(data.error || "Failed to add product.");
      }
    } catch (err) {
      setSuccess("Error adding product.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 text-black backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Add New Product</h2>
        <div>
          <label className="block text-black mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2  text-black placeholder-gray-400 bg-white/5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <label className="block text-black mb-1">Product Image URL</label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            className="w-full px-4 py-2  text-white placeholder-gray-400 bg-white/5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div>
          <label className="block text-black mb-1">Product Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2  text-white placeholder-gray-400 bg-white/5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product description"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-black mb-1">Product Price $</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full px-4 py-2  text-white placeholder-gray-400 bg-white/5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product price "
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
        {success && (
          <p className="text-center text-green-400 mt-4">{success}</p>
        )}
      </form>
    </div>
  );
}
