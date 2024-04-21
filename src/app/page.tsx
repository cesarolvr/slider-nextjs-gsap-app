"use client";

import Carousel from "@/app/components/Carousel";
import Header from "@/app/components/Header";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Header />
      <Carousel />
    </main>
  );
}
