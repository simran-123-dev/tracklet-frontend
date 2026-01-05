import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ data }) {
  const colors = ["#7C3AED", "#22C55E", "#3B82F6", "#F59E0B", "#EF4444"];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* PIE */}
      <div className="bg-white p-4 rounded-xl shadow h-64">
        <h3 className="mb-2 font-semibold">Category Split</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR */}
      <div className="bg-white p-4 rounded-xl shadow h-64">
        <h3 className="mb-2 font-semibold">Expense Bar</h3>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#7C3AED" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
