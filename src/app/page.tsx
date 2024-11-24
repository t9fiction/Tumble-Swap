import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero accounts="Hey" tokenData="Data" />
    </div>
  );
}
