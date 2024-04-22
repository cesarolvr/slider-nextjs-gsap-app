"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Styles
import { CursorStyled } from "./styles";

const Cursor = ({ progress }): React.ReactNode => {
  // var percentageComplete = 0.7;
  // var strokeDashOffsetValue = 100 - percentageComplete * 100;
  // var progressBar = document.querySelector(".js-progress-bar");
  // progressBar.css("", strokeDashOffsetValue);

  useEffect(() => {
    const initCursor = (e) => {
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

  console.log(progress);

  return (
    <div>
      <CursorStyled>
        <div className="cursor-center" />
        <div className="cursor-tail">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              className="progress-bar__background"
            />
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              stroke-dashoffset={100 - progress}
              className="progress-bar__progress"
            />
          </svg>
        </div>
      </CursorStyled>
    </div>
  );
};

export default Cursor;
