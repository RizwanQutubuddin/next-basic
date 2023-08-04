import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});
export default function FontOptimization() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Font Optimization</h1>
      {/* <h1 style={{ fontFamily: "Roboto", fontWeight: "300" }}>
        this is heading 1
      </h1> */}
      <h1 className={roboto.className}>this is heading 1</h1>
    </main>
  );
}
