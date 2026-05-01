import Layout from "../Components/Layout";
import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT: PROFILE */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-indigo-500 text-white flex items-center justify-center rounded-full text-3xl font-bold mb-4">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>

          <h2 className="text-xl font-semibold">
            {name || "Your Name"}
          </h2>

          <p className="text-gray-500 text-sm">
            {email || "your@email.com"}
          </p>

          <button className="mt-6 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm">
            Change Photo
          </button>
        </div>

        {/* RIGHT: FORM */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-xl font-semibold mb-6">
            Personal Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

          </div>

          <div className="flex justify-end gap-4 mt-8">

            <button className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300">
              Cancel
            </button>

            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-md">
              Save Changes
            </button>

          </div>

        </div>
      </div>
    </Layout>
  );
}