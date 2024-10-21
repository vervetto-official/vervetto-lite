import Image from "next/image";
import { Header1 } from "@/blocks/header-1";
import { NavigationTop } from "@/blocks/navigation-top";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavigationTop className="bg-[#D8F4F2]"/>
      <Header1/>
    </main>
  );
}
