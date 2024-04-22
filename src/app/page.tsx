"use client";

import { useEffect, useState } from "react";

// Components
import Carousel from "@/app/components/Carousel";
import Header from "@/app/components/Header";
import Cursor from "./components/Cursor";

// Data
import { featuredItems } from "@/data";

export default function Home() {
  const [activeItem, setActiveItem]: Array<number | Function> = useState(0);
  const [liveProgress, setLiveProgress]: Array<number | Function> = useState(0);

  const handleActiveItem = (index) => {
    setActiveItem(index);
    window.localStorage.setItem("activeItem", index);
  };

  useEffect(() => {
    const savedActiveItem = window.localStorage.getItem("activeItem") || 0;

    handleActiveItem(parseInt(savedActiveItem));
  }, []);

  return (
    <main>
      <Cursor progress={liveProgress} />
      <Header />
      <Carousel
        activeItem={activeItem}
        handleActiveItem={handleActiveItem}
        setLiveProgress={setLiveProgress}
        slides={featuredItems}
      />
    </main>
  );
}
