export default function FilterTabs({ filter, setFilter }) {
  return (
    <div className="flex gap-3">
      {["all", "today", "month"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-5 py-2 rounded-lg border ${
            filter === f
              ? "bg-purple-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
