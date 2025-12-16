import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">
        Shopping List
      </h1>

      <div className="max-w-md">
        <ItemList />
      </div>
    </main>
  );
}
