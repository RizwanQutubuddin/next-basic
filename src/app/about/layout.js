"use client";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      <h1>Common Layout for About</h1>
      <div>{children}</div>
    </div>
  );
}
