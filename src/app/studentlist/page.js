import Link from "next/link";

export default function StudentList() {
  const studentlist = [
    { id: 1, name: "Rizwan" },
    { id: 2, name: "Uzaif" },
    { id: 3, name: "Umar" },
    { id: 4, name: "Huda" },
  ];
  console.log(studentlist);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Student List</h1>
      <ul>
        {studentlist.map((item) => (
          <li>
            <Link href={"/studentlist/" + item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
