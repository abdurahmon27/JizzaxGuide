import React from "react";
import {
  FaDev,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  const linkForDeveloper = "https://t.me/abdurahmon_27";
  return (
    <>
      <div className="w-full h-[300px] flex justify-center items-center">
        <div className=" w-full h-full flex justify-center items-center border-t border-t-white py-5  bg-[#393e46] flex-row max-lg:flex-col max-lg:pb-[7rem] z-40">
          <div className="mx-10 flex items-center justify-center">
            <a
              href={linkForDeveloper}
              className=" hover:text-indigo-300 text-white"
            >
              <FaFacebook className=" w-[25px] h-[25px] mx-5 my-5" />
            </a>
            <a
              href={linkForDeveloper}
              className=" hover:text-indigo-300 text-white"
            >
              <FaInstagram className=" w-[25px] h-[25px] mx-5 my-5 " />
            </a>
            <a
              href={linkForDeveloper}
              className=" hover:text-indigo-300 text-white"
            >
              <FaTelegram className=" w-[25px] h-[25px] mx-5 my-5 " />
            </a>
            <a
              href={linkForDeveloper}
              className=" hover:text-indigo-300 text-white"
            >
              <FaYoutube className=" w-[25px] h-[25px] mx-5 my-5 " />
            </a>
          </div>
          <span className="text-white mx-10"> ©️ Jizzax Guide 2023 </span>
          <div className="text-white mx-10 flex items-center justify-center">
            <a href={linkForDeveloper} className="flex items-center justify-center">
              {" "}
              <FaDev className="mx-5 text-[25px]" /> Created by Abdurahmon
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
