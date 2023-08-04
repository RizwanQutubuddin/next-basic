import Image from "next/image";
import vercel from "../../../public/vercel.svg";
export default function MyImage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Image Page</h1>
      <Image src={vercel} />
      <Image
        src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={100}
        height={200}
      />
    </main>
  );
}
