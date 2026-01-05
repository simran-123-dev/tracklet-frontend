import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/tracklet-bg.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/auth/signup`, { email, password });
      navigate("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Card */}
      <form
        onSubmit={handleSignup}
        className="w-[420px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-10 py-10"
      >
        {/* Title */}
        <h1 className="text-4xl font-semibold text-purple-700 text-center">
          Tracklet
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2 mb-8">
          Create your account to start tracking expenses
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-7">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold tracking-wide transition"
        >
          Create Account
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
