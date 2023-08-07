export default async function getUsers() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await users.json();
  return users;
}
