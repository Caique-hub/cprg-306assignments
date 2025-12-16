export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="border rounded p-3 cursor-pointer hover:bg-slate-100"
    >
      <p className="font-semibold">{name}</p>
      <p className="text-sm">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}
