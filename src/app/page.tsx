"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Components
import { Carousel } from "@/app/components/Carousel";
import { Header } from "@/app/components/Header";
import { Cursor } from "@/app/components/Cursor";

// Data
import { featuredItems } from "@/data";

const Loader = dynamic(() => import("./components/Loader"));

export default function Home() {
  const [isLoading, setIsLoading]: Array<boolean | Function> = useState(true);
  const [activeItem, setActiveItem]: Array<number | Function> = useState(0);
  const [liveProgress, setLiveProgress]: Array<number | Function> = useState(0);

  const handleActiveItem = (index: number) => {
    setActiveItem(index);
  };

  useEffect(() => {
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
