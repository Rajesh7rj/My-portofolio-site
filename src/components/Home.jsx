import React from "react";
import "../index.css";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pb-5 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  justify-center h-screen px-4 md:flex-row">
        <div className="flex flex-col justify-center   h-full">
          <h2 className="text-4xl text-center md:text-left sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 text-center py-4 md:max-w-md md:text-left">
            Experienced Frontend Developer (1 year) with expertise in React.JS,
            JavaScript, TypeScript, and MUI, committed to continuous learning
            and growth while delivering impactful web solutions that delight
            users and clients alike.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group  text-white w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="pb-4">
          <img
            src={HeroImage}
            alt="my profile"
            className="myImg rounded-full mx-auto w-2/3 md:w-full border-2 border-white shadow-lg shadow-slate-300"
            style={{}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
