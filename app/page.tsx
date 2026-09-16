import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Course Catalog</h1>
      <p className="mb-6 text-gray-700">
        Welcome! Browse the courses offered this semester.
      </p>
      <Link
        href="/courses"
        className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        View all courses →
      </Link>
    </main>
  );
}