"use client";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert(response.result);
    } else {
      alert(response.result);
    }
  };
  return (
    <div className="h-screen">
      <h1>Add User</h1>
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
        onClick={addUser}
        className="bg-blue-500 hover:bg-blue-600 rounded-lg p-2"
      >
        Add User
      </button>
    </div>
  );
}
