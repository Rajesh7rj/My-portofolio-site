import React from "react";
import Footer from "./Footer";



const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <p className="md:text-2xl text-xl   md:text-left my-3">
          Mo no. :- 9724167245
        </p>
        <a href="mailto:rajeshjanyani7@gmail.com"  className="md:text-2xl text-xl md:text-left my-3" target="_blank" rel="noreferrer">
          Gmail :- rajeshjanyani7@gmail.com
        </a>
        
        < Footer/>
      </div>
      
    </div>
  );
};

export default Contact;
