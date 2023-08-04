export default function StudentDetail({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Student details</h1>
      <p>{params.id}</p>
    </main>
  );
}
