import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          <Link className="text-blue-600 hover:underline" href="/week-2">
            Week 2
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/week-3">
            Week 3
          </Link>
        </li>
      </ul>
    </main>
  );
}
