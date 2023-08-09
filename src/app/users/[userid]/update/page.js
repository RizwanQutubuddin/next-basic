"use client";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  let user = {};
  console.log("asdf", params.userid);
  useEffect(() => {
    getUserbyid();
  }, []);

  //==get by id api start ==
  const getUserbyid = async () => {
    user = await fetch(`http://localhost:3000/api/users/${params.userid}`);
    user = await user.json();
    setName(user.result.name);
    setAge(user.result.age);
    setEmail(user.result.email);
  };
  //==get by id api end ==

  const updateUser = async () => {
    let response = await fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert("User updated successfully");
    } else {
      alert("please try with valid input");
    }
  };
  return (
    <div className="h-screen">
      <h1>Update User</h1>
      <br />
      <input
        type="text"
        placeholder="Enter Name"
        className="m-0"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <button
        onClick={updateUser}
        className="bg-blue-500 hover:bg-blue-600 rounded-lg p-2"
      >
        Update User
      </button>
    </div>
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
