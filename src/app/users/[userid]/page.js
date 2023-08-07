import getUsers from "@/../services/getUsers";

export default async function Page({ params }) {
  let users = await getUsers();
  const userId = params.userid;
  const user = users[userId - 1];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>User Datails</h3>
      <h4>Name : {user.name}</h4>
      <h4>Email : {user.email}</h4>
      <h4>Website : {user.website}</h4>
      <h4>Phone : {user.phone}</h4>
    </main>
  );
}

export async function generateStaticParams() {
  const getUserList = getUsers();
  const users = await getUserList;
  return users.map((user) => ({
    userId: user.id.toString(),
    userName: user.name.toString(),
  }));
}
