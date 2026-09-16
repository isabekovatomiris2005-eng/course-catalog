// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies — semester project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl gap-6 p-4">
            <Link href="/" className="font-medium hover:text-blue-600">
              Home
            </Link>
            <Link href="/courses" className="font-medium hover:text-blue-600">
              Courses
            </Link>
            <Link href="/about" className="font-medium hover:text-blue-600">
              About
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}