import { FaTrash } from "react-icons/fa";

export default function ExpenseCard({ expense, onDelete }) {
  return (
    <div className="flex justify-between items-center py-3 border-b">
      <span className="text-gray-800">{expense.category}</span>

      <div className="flex items-center gap-4">
        <span className="font-semibold">₹ {expense.amount}</span>
        <button
          onClick={() => onDelete(expense._id)}
          className="text-red-500 hover:text-red-600"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
