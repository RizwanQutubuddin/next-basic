"use client";

import { useState } from "react";

export default function CallInnerComp() {
  const [name, setName] = useState("Rizwan");
  let cname = "Uzaif";
  const fruit = () => {
    // setName("Umar");
    cname = "huda";
    alert(cname);
  };

  const InnerComp = () => {
    return <h3>it is inner component</h3>;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Called Inner component</h1>
      <InnerComp />
    </main>
  );
}
