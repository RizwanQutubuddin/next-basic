"use client";
export default function Lecture({ params }) {
  console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lecture Page</h1>
      <p>{params.lecture[0]}</p>
      <p>{params.lecture[1]}</p>
    </main>
  );
}
