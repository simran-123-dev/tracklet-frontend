import { FiLogOut, FiBarChart2, FiList } from "react-icons/fi";

export default function Sidebar({ filter, setFilter, exportCSV, logout }) {
  return (
    <div className="w-56 min-h-screen bg-purple-100 flex flex-col justify-between px-6 py-6">
      
      {/* TOP */}
      <div>
        <h1 className="text-2xl font-bold text-purple-700 mb-10">
          Tracklet
        </h1>

        <nav className="space-y-2">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
              filter === "all"
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-200"
            }`}
          >
            <FiBarChart2 />
            Dashboard
          </button>

          <button
            onClick={() => setFilter("today")}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
              filter === "today"
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-200"
            }`}
          >
            <FiList />
            Today
          </button>

          <button
            onClick={() => setFilter("month")}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
              filter === "month"
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-200"
            }`}
          >
            <FiList />
            This Month
          </button>

          <button
            onClick={exportCSV}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-200"
          >
            <FiList />
            Export CSV
          </button>
        </nav>
      </div>

      {/* BOTTOM */}
      <button
        onClick={logout}
        className="flex items-center gap-3 text-red-600 hover:text-red-700"
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  );
}
