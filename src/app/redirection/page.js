import { redirect } from "next/navigation";
export default function Redirection() {
  redirect("/about");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Redirection Page</h1>
    </main>
  );
}
