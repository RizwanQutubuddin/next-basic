export default function EnvironmentVariables() {
  console.log("SERVER_PASSWORD", process.env.SERVER_PASSWORD);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Environment Variable Page</h1>
      <h2>
        {process.env.NODE_ENV == "development"
          ? "You are on development Mode"
          : "You are on Production Mode"}
      </h2>
    </main>
  );
}
