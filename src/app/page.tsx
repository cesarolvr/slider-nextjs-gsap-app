"use client";

import { useEffect, useState } from "react";

// Components
import Carousel from "@/app/components/Carousel";
import Header from "@/app/components/Header";
import Cursor from "@/app/components/Cursor";
import Loader from "@/app/components/Loader";

// Data
import { featuredItems } from "@/data";

export default function Home() {
  const [isLoading, setIsLoading]: Array<boolean | Function> = useState(true);
  const [activeItem, setActiveItem]: Array<number | Function> = useState(0);
  const [liveProgress, setLiveProgress]: Array<number | Function> = useState(0);

  const handleActiveItem = (index: number) => {
    setActiveItem(index);
    window.localStorage.setItem("activeItem", index.toString());
  };

  useEffect(() => {
    const savedActiveItem: string =
      window.localStorage.getItem("activeItem") || "0";

    handleActiveItem(parseInt(savedActiveItem));

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      <Loader isLoading={isLoading} />
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
