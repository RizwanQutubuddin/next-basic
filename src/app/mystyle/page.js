"use client";

import { useState } from "react";

export default function MyStyle() {
  const [bgcolor, setBgColor] = useState({ backgroundColor: "green" });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={"main"}>My Style Page</h1>
      <h2 style={bgcolor}>My Style Page</h2>

      <button
        onClick={() => {
          setBgColor({ backgroundColor: "blue" });
        }}
      >
        change color
      </button>

      <h2 style={{ backgroundColor: "blue" }}>
        this is inline css effected tag
      </h2>
    </main>
  );
}
