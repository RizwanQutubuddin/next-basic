export default function Metadata() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Metadata Page</h1>
    </main>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "this is title from metadata page",
    description: "this is description from metadata page",
  };
}
