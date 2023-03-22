import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {SiFrontendmentor} from "react-icons/si"

export default function Footer() {
  return (
    <div>
      <div className=" mt-12 d-flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center items-center">
          <li className="mx-4 hover:scale-125 duration-150">
            <a
              href="https://github.com/Rajesh7rj"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150">
            <a
              href="https://www.linkedin.com/in/rajesh-janyani-rj7/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150 ">
            <a
              href="/RajeshResume1.pdf"
              className=""
              target="_blank"
              rel="noreferrer"
              download={true}
            >
              <BsFillPersonLinesFill size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150 ">
            <a
              href="mailto:rajeshjanyani7@gmail.com"
              className=""
              target="_blank"
              rel="noreferrer"
              
            >
              <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150 ">
            <a
              href="https://www.frontendmentor.io/profile/Rajesh7rj"
              className=""
              target="_blank"
              rel="noreferrer"
              
            >
              <SiFrontendmentor size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
