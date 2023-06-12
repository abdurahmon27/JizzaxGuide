import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiChevronUp } from "react-icons/fi";

const SocialNetworks = () => {
  const [active, setActive] = React.useState(false);
  const btnActiver = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", btnActiver);
  return (
    <>
      <div className="z-50 w-full h-full">
        <ul className="z-50 fixed bottom-10 left-5 px-5 h-auto py-3 rounded-full flex flex-col items-center justify-center max-md:flex-row max-md:left-1 bg-white shadow-lg">
          <li className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[40px] text-indigo-600 my-2 max-md:mx-2 hover:text-indigo-500">
            <FaFacebook />
          </li>
          <li className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[40px] text-indigo-600 my-2 max-md:mx-2 hover:text-indigo-500">
            <FaInstagram />
          </li>
          <li className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[40px] text-indigo-600 my-2 max-md:mx-2 hover:text-indigo-500">
            <FaYoutube />
          </li>
          <li className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[40px] text-indigo-600 my-2 max-md:mx-2 hover:text-indigo-500">
            <FaTelegram />
          </li>
        </ul>
        <div
          className={
            active
              ? "z-50 fixed bottom-10 right-5 flex items-center rounded-full w-20 h-20 justify-center bg-white shadow-lg max-md:right-3 hover:border-slate-300 hover:border"
              : " opacity-0 z-50 fixed bottom-10 right-5 flex items-center rounded-full w-20 h-20 justify-center bg-white shadow-lg max-md:right-3 hover:border-slate-300 hover:border"
          }
        >
          <Link 
             to="home" 
             smooth={true} 
             spy={true} 
             activeClass="activeForScroller" 
           >
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[50px] text-indigo-600 hover:text-indigo-500">
              <FiChevronUp />
            </div>
           </Link> 
        </div>
      </div>
    </>
  );
};

export default SocialNetworks;
