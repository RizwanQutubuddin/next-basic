"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setProducts(data.products);
    console.log("products", products);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Product List</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>Title : {item.title}</li>
        ))}
      </ul>
    </main>
  );
}
