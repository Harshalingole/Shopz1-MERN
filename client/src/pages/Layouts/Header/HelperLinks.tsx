import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const helpNav: string[] = ["help", "register", "login"];
const HelperLinks: React.FC = () => {
  return (
    <div className="helper-links flex flex-nowrap gap-6 text-xs font-thin text-slate-600">
      {helpNav.map((name, ind): ReactNode => {
        return <Link to={`/${name}`}><span className=" text-sm text-gray-800 font-medium group-hover:text-primary-blue">{name}</span></Link>;
      })}
    </div>
  );
};

export default HelperLinks;
