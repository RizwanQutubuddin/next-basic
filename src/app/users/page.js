import Link from "next/link";
import getUsers from "@/../services/getUsers";
export default async function Users() {
  const users = await getUsers();
  console.log("users", users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users Page</h1>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </main>
  );
}
