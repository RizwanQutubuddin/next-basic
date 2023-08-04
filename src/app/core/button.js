"use client";
export default function Button(props) {
  return (
    <button
      onClick={() => alert("title : " + props.title)}
      className="bg-blue-500 p-2 rounded-md m-1"
    >
      click
    </button>
  );
}
