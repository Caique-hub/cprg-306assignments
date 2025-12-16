export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded p-3">
      <p className="font-semibold">{name}</p>
      <p className="text-sm">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}
