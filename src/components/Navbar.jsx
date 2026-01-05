import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center">
      {/* App Name */}
      <h1 className="text-2xl font-bold text-white tracking-wide">
        Tracklet
      </h1>

      {/* Logout */}
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
      >
        Logout
      </button>
    </nav>
  );
}
