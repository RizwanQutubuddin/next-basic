import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <h2>basic routing</h2>
      <Link href="/login" className="hover:text-blue-600 text-blue-500">
        Login
      </Link>
      <Link href="/about" className="hover:text-blue-600 text-blue-500">
        About
      </Link>
      <button>go to home</button>
    </main>
  );
}
