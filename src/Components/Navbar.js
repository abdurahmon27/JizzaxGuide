import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiLocationOn, CiMap, CiViewBoard, CiCamera } from "react-icons/ci";
// import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { BsPinMap } from "react-icons/bs";
import {} from "react-icons/ci";

const Navbar = () => {
  const [activeLi, setActiveLi] = useState(false);
  const [change, setChange] = useState(true);

  const ResButton = () => {
    setActiveLi(!activeLi);
    setChange(!change);
  };
  return (
    <div>
      <nav className=" fixed z-50 border shadow-sm shadow-slate-500 w-full h-auto bg-slate-600 border-slate-600 text-white">
        <div className=" flex justify-between p-8 max-lg:justify-center">
          <div
            className="lg:px-5 text-[25px] cursor-pointer"
            title="t.me/abdurahmon_27"
          >
            JizzaxGuide
          </div>
          <ul
            className={
              activeLi
                ? "z-50 flex justify-center align-center max-lg:flex-col max-lg:items-center max-lg:w-full max-lg:h-full max-lg:bg-slate-600"
                : "z-50 flex justify-center align-center max-lg:hidden"
            }
          >
            <Link
              onClick={ResButton}
              to="home"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-220}
            >
              <li className=" px-5 text-[20px] cursor-pointer max-lg:py-12 abel space-x-4 flex justify-center items-center uppercase">
                About
                <span className="mx-1">
                  <CiViewBoard />
                </span>
              </li>
            </Link>
            <Link
              onClick={ResButton}
              to="destinations"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-50}
            >
              <li className=" px-5 text-[20px] cursor-pointer max-lg:py-12 abel space-x-4 flex justify-center items-center uppercase">
                Destination
                <span className="mx-1">
                  <CiLocationOn />
                </span>
              </li>
            </Link>
            <Link
              onClick={ResButton}
              to="hotels"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-30}
            >
              <li className="px-5 text-[20px] cursor-pointer max-lg:py-12  abel space-x-4 flex justify-center items-center uppercase">
                Hotels
                <span className="mx-1">
                  <CiMap />
                </span>
              </li>
            </Link>
            <Link
              onClick={ResButton}
              to="highlights"
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <li className="px-5 text-[20px] cursor-pointer max-lg:py-12  abel space-x-4 flex justify-center items-center uppercase">
                Pictures
                <span className="mx-1">
                  <CiCamera />
                </span>
              </li>
            </Link>
            <Link
              onClick={ResButton}
              to="map"
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <li className="px-5 text-[20px] cursor-pointer max-lg:py-12  abel space-x-4 flex justify-center items-center uppercase">
                SeeInMap
                <span className="mx-1">
                  <BsPinMap />
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <button
          className=" hidden max-lg:flex max-lg:mx-1 max-lg:absolute max-lg:top-[2.5rem] max-lg:right-5 w-9 h-8 max-lg:text-[25px] max-lg:z-50"
          onClick={ResButton}
        >
          {change ? <FaBars /> : <FaTimes />}
        </button>
        <div className="w-full flex justify-end h-10 top-[5rem]  absolute">
          <div className="flex justify-center border bg-slate-600 border-slate-600 text-white w-96 mx-5 max-lg:hidden rounded-full">
            {/* Need to connect to the API  */}
            <span className="px-3 text-[15px] italic flex justify-center items-center">
              Weather in Jizzakh:
            </span>
            <span className="px-3 text-[15px] italic flex justify-center items-center">
              <span className="text-gray-200 font-thin">Sunny, 27°</span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
