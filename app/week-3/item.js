export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 text-slate-100 p-4 rounded-lg shadow">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-slate-300">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}
