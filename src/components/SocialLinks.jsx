import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {SiFrontendmentor} from "react-icons/si"

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
           LinkedIn <FaLinkedin size={30} />
         </>
      ),
      href: "https://www.linkedin.com/in/rajesh-janyani-rj7/", 
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           Github <FaGithub size={30} />
         </>
      ),
      href: "https://github.com/Rajesh7rj", 
    },
    {
      id: 3,
      child: (
        <>
           Mail <HiOutlineMail size={30} />
         </>
      ),
      href: "mailto:rajeshjanyani7@gmail.com", 
      
    },
    {
      id: 4,
      child: (
        <>
           Frontend Mentor <SiFrontendmentor size={30} />
         </>
      ),
      href: "https://www.frontendmentor.io/profile/Rajesh7rj", 
      
    },
    {
      id: 5,
      child: (
        <>
           Resume <BsFillPersonLinesFill size={30} />
         </>
      ),
      href: "/RajeshResume1.pdf", 
      style: "rounded-br-md",
      download:true
    }
  ]
  return (
    <div name="socialLinks" className="hidden lg:flex flex-col  top-[35%] left-0 fixed">
      <ul>
        {
          links.map(({id, child, href, style, download}) => (
            <li key={id} className={"flex justify-between  items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 "  + style}> 
            
          <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank"
              rel="noreferrer">
            {child}
          </a>
        </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SocialLinks;
