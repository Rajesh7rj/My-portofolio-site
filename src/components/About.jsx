import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black  to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-4 md:pb-8">
          <p className="text-white text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-white text-xl mt-20">
          <p>
            👋 Hey there! I'm Rajesh, a frontend enthusiast with a year of
            experience crafting captivating web experiences! 💻 Fluent in
            ReactJS, Material UI, TypeScript, JavaScript and more, I'm all about
            turning designs into dynamic realities. 🚀
          </p>
          <br />
          <p>
            🎨 Whether it's jazzing up interfaces with snazzy CSS or diving into
            the depths of JavaScript, I thrive on challenges and love learning
            new tricks of the trade. 🌟
          </p>
          <br />
          <p>
            💡 Known for my problem-solving prowess and unwavering curiosity,
            I'm the go-to guy/gal for cracking tough nuts and embracing new tech
            with open arms. 💪
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default about;
