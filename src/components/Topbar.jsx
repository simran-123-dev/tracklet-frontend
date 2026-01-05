export default function Topbar({ onExport }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h1>

      <button
        onClick={onExport}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        Export CSV
      </button>
    </div>
  );
}
