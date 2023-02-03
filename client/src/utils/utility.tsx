import React from "react";
import { Link } from "react-router-dom";
import { IconProps } from "../types/types";

export const Icon: React.FC<IconProps> = ({ route, src, img }) => {
  return (
    <Link to={`/${route}`} className="h-auto w-[auto]">
      {img ? <div className="w-[2.7rem] h-auto object-contain">{src}</div> : src}
    </Link>
  );
};

export const getRandomProducts = (prdArray: any[], n: number): any[] => {
  return prdArray.sort(() => 0.5 - Math.random()).slice(0, n);
}