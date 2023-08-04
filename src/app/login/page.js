"use client";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login Page</h1>
      <button onClick={() => router.push("/")}>go to Home page</button>
    </main>
  );
}
