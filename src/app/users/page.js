import Link from "next/link";
import DeleteUser from "@/app/components/page";
//import getUsers from "@/../services/getUsers";
//== api start ==
async function getUsers() {
  let users = await fetch("http://localhost:3000/api/users");
  users = await users.json();
  return users;
}
//== api end ==

export default async function Users() {
  const users = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users Page</h1>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link> |{" "}
          <Link href={`/users/${user.id}/update`}>Edit</Link> |{" "}
          <DeleteUser id={user.id} />
        </h2>
      ))}
    </main>
  );
}
