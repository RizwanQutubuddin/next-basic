"use client";

import { useState } from "react";

export default function State() {
  const [name, setName] = useState("Rizwan");
  let cname = "Uzaif";
  const fruit = () => {
    // setName("Umar");
    cname = "huda";
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>State Page</h1>
      <p>State</p>
      <p>{cname}</p>
      <button onClick={fruit} className="bg-blue-400 rounded-md p-1">
        Update
      </button>
    </main>
  );
}
