"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Styles
import { CursorStyled } from "./styles";

type CursorParams = {
  progress: number;
};

export const Cursor = ({ progress }: CursorParams): React.ReactNode => {
  useEffect(() => {
    const initCursor = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor-center");
      const tail = document.querySelector(".cursor-tail");

      gsap.set([cursor, tail], { opacity: 1 });
      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      };

      gsap.to(".cursor-center", {
        left: cursorPosition.left,
        top: cursorPosition.top,
        height: "4px",
        width: "4px",
        duration: 0.2,
      });
      gsap.to(".cursor-tail", {
        left: cursorPosition.left,
        top: cursorPosition.top,
        height: "40px",
        width: "40px",
        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", initCursor);
  }, []);

  return (
    <div>
      <CursorStyled>
        <div className="cursor-center" />
        <div className="cursor-tail">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
            <circle cx="16" cy="16" r="15.9155" className="cursor-background" />
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              strokeDashoffset={100 - progress}
              className="cursor-progress"
            />
          </svg>
        </div>
      </CursorStyled>
    </div>
  );
};
