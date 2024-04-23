"use client";

import classNames from "classnames";
import { useEffect } from "react";
import { CountUp } from "countup.js";

// Styles
import {
  LoaderStyled,
  LoaderTitle,
  LoaderContent,
  LoaderPercentage,
} from "./styles";

type LoaderParams = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: LoaderParams) => {
  useEffect(() => {
    const countUp = new CountUp("progress", 100);
    countUp.start();
  }, []);
  return (
    <LoaderStyled
      className={classNames({
        "-isLoading": isLoading,
      })}
    >
      <LoaderContent>
        <LoaderTitle><span>📸</span></LoaderTitle>
        <LoaderPercentage id="progress" />
      </LoaderContent>
    </LoaderStyled>
  );
};

export default Loader;
