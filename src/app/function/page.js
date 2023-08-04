"use client";
export default function Function() {
  const fruit = () => {
    alert("fruit click");
  };
  const fruitWithParam = (item) => {
    alert("fruit name is " + item);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Function Page</h1>
      <p>Event and Function</p>
      <button
        onClick={() => {
          alert("asdf");
        }}
      >
        click me
      </button>
      <button onClick={fruit} className="bg-blue-400 rounded-md p-1">
        Simple
      </button>
      <button
        onClick={() => fruitWithParam("grapes")}
        className="bg-blue-400 rounded-md p-1"
      >
        Parameter
      </button>
    </main>
  );
}
