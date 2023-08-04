"use client";
import custom from "@/app/custom.module.css";
import other from "@/app/other.module.css";

import { useState } from "react";
export default function ModuleCSS() {
  const { magenta } = custom;
  const [color, setColor] = useState("blue");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className={custom.main}>My Module CSS Page</h3>
      <h3 className={other.main}>Heading 1</h3>
      <h3 className={color == "blue" ? custom.main : other.main}>Heading 2</h3>
      <h3 style={{ backgroundColor: color == "blue" ? "blue" : "yellow" }}>
        Heading 3
      </h3>
      <h3 id={custom.aqua}>Heading 4</h3>
      <h3 className={magenta}>Heading 4</h3>

      <button onClick={() => setColor("yellow")}>Update Color</button>
    </main>
  );
}
