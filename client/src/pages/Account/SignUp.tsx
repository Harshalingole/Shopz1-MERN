/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ReactElement } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { RiLockUnlockFill } from "react-icons/ri";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import WelcomeImg from "../../assets/images/standing.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
interface IconBtnProps {
  icon: ReactElement;
  text: string;
}
interface FormInputProps extends IconBtnProps {
  type?: string;
}
export const IconBtn: FC<IconBtnProps> = ({ icon, text }) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 flex justify-center items-center gap-2 bg-slate-600 hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}
    >
      {icon}
      <h1 className="text-white">{text}</h1>
    </button>
  );
};
export const FormInput: FC<FormInputProps> = ({ icon, text, type }) => {
  return (
    <div className="flex flex-col mb-2">
      <div className="flex relative ">
        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          {icon}
        </span>
        <input
          type={type}
          id="sign-in-email"
          className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
          placeholder={text}
        />
      </div>
    </div>
  );
};

const Signup: FC = () => {
  return (
    <>
      <div className="register-wrapper md:scale-90  flex flex-col md:flex-row flex-nowrap justify-start items-center md:-mt-4  md:w-3/5 mx-2 md:mx-auto ">
        {/* Left Side */}
        <div className="login-info  hidden md:flex flex-col gap-6 h-full py-8 px-6 bg-white border-r border-slate-500 rounded-lg  shadow-2xl">
          <h1 className="text-2xl font-bold text-gray-700">Sign Up</h1>
          <h1 className="text-lg font-normal text-gray-600">
            Looks like You are New Here! Sign Up using Social or Email.
          </h1>
          <img src={WelcomeImg} alt="" className="w-3/4 m-auto scale-110" />
        </div>
        {/* Right Side */}
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white   md:border-l border-slate-500 rounded-lg shadow-2xl  sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl ">
            Create New Account
          </div>

          {/* Login Option - FB & Google */}
          <div className="flex gap-4 item-center mb-2">
            <IconBtn
              icon={<BsFacebook size="1.1rem" color="white" />}
              text="Facebook"
            />
            <IconBtn
              icon={<FcGoogle size="1.1rem" color="white" />}
              text="Google"
            />
          </div>
          <div className="flex items-center mb-2 ">
            <div className="flex ml-auto">
              <h1 className="inline-flex text-xs font-thin text-gray-500 sm:text-sm hover:text-gray-700 ">
                You can Register using google or facebook
              </h1>
            </div>
          </div>
          {/*Form for login  */}
          <form action="#" autoComplete="off" className="mt-4">
            <FormInput
              icon={<HiUserCircle size="1rem" />}
              text="Full Name"
              type={"text"}
            />
            <FormInput
              icon={<FaPhoneSquareAlt size="1rem" />}
              text="Mobile Number"
              type={"number"}
            />
            {/* Form Input - Email & Password */}
            <FormInput
              icon={<GrMail size="1rem" />}
              text="Your Email"
              type={"email"}
            />
            <FormInput
              icon={<RiLockUnlockFill size="1rem" />}
              text="Your Password"
              type={"password"}
            />
            {/* Forgot Password */}

            {/* Login Button */}
            <Button  text="Sign up" color= "00FAFF" />
            <div className="flex items-center justify-center mt-6">
              <Link
                to={"/login"}
                className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 "
              >
                <span className="ml-2 text-base">Already have an account?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
