// import getUsers from "@/../services/getUsers"; //*case1

//== api start ==
async function getUsers() {
  let users = await fetch("http://localhost:3000/api/users");
  users = await users.json();
  return users;
}
//== api end ==

export default async function Page({ params }) {
  let users = await getUsers();
  const userId = params.userid;
  const user = users[userId - 1];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>User Datails</h3>
      <h4>Name : {user.name}</h4>
      <h4>Email : {user.email}</h4>
    </main>
  );
}

/* 
//*case1
export async function generateStaticParams() {
  const getUserList = getUsers();
  const users = await getUserList;
  return users.map((user) => ({
    userId: user.id.toString(),
    userName: user.name.toString(),
  }));
}*/
