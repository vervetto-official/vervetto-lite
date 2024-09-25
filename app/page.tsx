import Image from "next/image";
import { Header1 } from "@/blocks/header-1";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header1/>
    </main>
  );
}
