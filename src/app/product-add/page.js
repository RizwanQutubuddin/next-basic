"use client";

import { useState } from "react";

export default function ProductAdd() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const productAdd = async () => {
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, company, category, color }),
    });

    result = await result.json();
    if (result.success) {
      alert("New product added");
    } else {
      alert(result.result);
    }
    alert(JSON.stringify(result));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Name"
        className="m-0"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Enter Company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <input
        type="text"
        placeholder="Enter Color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <input
        type="text"
        placeholder="Enter category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <button
        onClick={productAdd}
        className="bg-blue-500 hover:bg-blue-600 rounded-lg p-2"
      >
        Add Product
      </button>
    </main>
  );
}
