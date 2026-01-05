import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
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

import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  /* 🔐 Protect */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchExpenses();
    // eslint-disable-next-line
  }, []);

  /* 📥 Fetch */
  const fetchExpenses = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API}/api/expenses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setExpenses(res.data);
  };

  /* ➕ Add */
  const addExpense = async (e) => {
    e.preventDefault();
    if (!amount) return;

    const token = localStorage.getItem("token");
    await axios.post(
      `${API}/api/expenses`,
      { amount: Number(amount), category },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setAmount("");
    setCategory("Food");
    fetchExpenses();
  };

  /* ❌ Delete */
  const deleteExpense = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${API}/api/expenses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchExpenses();
  };

  /* 💰 Total */
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  /* 📊 Charts */
  const chartData = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || { name: e.category, value: 0 };
      acc[e.category].value += e.amount;
      return acc;
    }, {})
  );

  /* 🗓 Filter */
  const filteredExpenses = expenses.filter((e) => {
    const d = new Date(e.createdAt);
    const now = new Date();

    if (filter === "today") return d.toDateString() === now.toDateString();
    if (filter === "month") return d.getMonth() === now.getMonth();
    return true;
  });

  /* 📁 Export */
  const exportCSV = () => {
    const csv = [
      ["Category", "Amount", "Date"],
      ...expenses.map((e) => [
        e.category,
        e.amount,
        new Date(e.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((r) => r.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      
      <Sidebar
        filter={filter}
        setFilter={setFilter}
        exportCSV={exportCSV}
        logout={() => {
          localStorage.clear();
          navigate("/login");
        }}
      />

      {/* RIGHT */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-4">

          {/* TOTAL */}
          <div className="bg-white p-6 rounded-xl shadow text-xl font-semibold">
            Total Spent:{" "}
            <span className="text-purple-600">₹ {total}</span>
          </div>

          {/* QUICK STATS */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Entries</p>
              <p className="text-xl font-bold text-purple-600">
                {expenses.length}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Highest</p>
              <p className="text-xl font-bold text-purple-600">
                ₹ {Math.max(0, ...expenses.map(e => e.amount))}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Categories</p>
              <p className="text-xl font-bold text-purple-600">
                {new Set(expenses.map(e => e.category)).size}
              </p>
            </div>
          </div>

          {/* ADD */}
          <form
            onSubmit={addExpense}
            className="bg-white p-6 rounded-xl shadow flex gap-4"
          >
            <input
              type="number"
              placeholder="Amount"
              className="border p-3 rounded w-1/3"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <select
              className="border p-3 rounded w-1/3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Other</option>
            </select>

            <button className="bg-purple-600 text-white px-6 rounded">
              Add
            </button>
          </form>

          {/* CHARTS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow h-64">
              <h3 className="font-semibold mb-2">Category Split</h3>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={chartData} dataKey="value" outerRadius={90}>
                    {chartData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={["#8b5cf6", "#22c55e", "#3b82f6", "#f59e0b", "#ef4444"][i % 5]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow h-64">
              <h3 className="font-semibold mb-2">Expense Bar</h3>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RECENT */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold mb-3">Recent Expenses</h3>
            {filteredExpenses.slice(0, 5).map((e) => (
              <div
                key={e._id}
                className="flex justify-between border-b py-2"
              >
                <span>{e.category}</span>
                <span className="font-semibold">₹ {e.amount}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
