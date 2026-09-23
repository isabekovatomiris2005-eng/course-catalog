export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">About</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        This course catalog is a semester project for the Advanced Web
        Technologies course. It demonstrates file-based routing, Server and
        Client Components, and TypeScript in the Next.js App Router.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Data currently comes from a mocked in-memory source.
      </p>
    </main>
  );
}