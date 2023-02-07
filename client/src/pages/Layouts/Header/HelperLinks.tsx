import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const helpNav: string[] = ["help", "return"];
const HelperLinks: React.FC = () => {
  const isUser = useAppSelector((state) => state.user.isUser);
  const userDetail = useAppSelector((state) => state.user.user)
  console.log(userDetail?.name)
  return (
    <div className="helper-links flex flex-nowrap gap-6 text-xs font-thin text-slate-600">
      {helpNav.map((name, ind) => {
        return <Link to={`/${name}`}><span className=" text-sm text-gray-800 font-medium group-hover:text-primary-blue">{name}</span></Link>;
      })}
      {isUser ? <span className=" text-base text-gray-800 font-medium group-hover:text-primary-blue">{`Welcome, ${userDetail?.name}`}</span> : <Link to={'/signup'}><span className=" text-sm text-gray-800 font-medium group-hover:text-primary-blue">sign up</span></Link>}
    </div>
  );
};

export default HelperLinks;
