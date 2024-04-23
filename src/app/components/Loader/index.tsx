"use client";

import classNames from "classnames";
// Styles
import { LoaderStyled } from "./styles";

type LoaderParams = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: LoaderParams) => {
  return (
    <LoaderStyled
      className={classNames({
        "-isLoading": isLoading,
      })}
    >
      loading...
    </LoaderStyled>
  );
};

export default Loader;
