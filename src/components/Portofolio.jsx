import React from "react";
import calculatorApp from "../assets/portfolio/calculatorApp.jpg";
import muzicTown from "../assets/portfolio/muzictown.png";
import bookmark from "../assets/portfolio/bookmark.jpg";
import huddle from "../assets/portfolio/huddle.jpg";
import portfolio from "../assets/portfolio/portofolio.jpg";
import tindog from "../assets/portfolio/tindog.png";

const Portfolio = () => {

  const demo = (projectName) => window.location.href=`https://rajesh7rj.github.io/${projectName}`
  
  const code = (projectName) => window.location.href=`https://github.com/Rajesh7rj/${projectName}`
  


  const portfolios = [
    {
      id: 1,
      src: muzicTown,
      projectName : "Muzictown-e-commerce-site",
    },
    {
      id: 2,
      src: bookmark,
      projectName : "bookmark-landing-page",
    },
    {
      id: 3,
      src: portfolio,
      projectName : "My-portofolio-site",
      
    },
    {
      id: 4,
      src: calculatorApp,
      projectName : "Calculator-App",
    },
    {
      id: 5,
      src: huddle,
      projectName : "Huddle-Landing-page",
    },
    {
      id: 6,
      src: tindog,
      projectName : "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-8 from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-6  sm:px-12 ">
          {portfolios.map(({ id, src, projectName}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => demo(projectName)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => code(projectName)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
