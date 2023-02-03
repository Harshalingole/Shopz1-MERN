import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {};
const navCat: string[] = ["men", "women", "kids"];
const Categories: FC<Props> = () => {
  return (
    <div className="categories flex flex-nowrap self-end gap-6 text-xl font-semibold font-sarif">
      {navCat.map((name: string, ind: number):ReactNode => {
        return (
          <Link to={`/${name}`} className="font-bold">
            <span className=" text-base text-gray-800 font-medium group-hover:text-primary-blue uppercase">{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
