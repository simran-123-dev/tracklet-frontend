export default function AddExpense({
  amount,
  setAmount,
  category,
  setCategory,
  onAdd,
}) {
  return (
    <form
      onSubmit={onAdd}
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

      <button className="bg-green-500 text-white px-6 rounded">
        Add
      </button>
    </form>
  );
}
