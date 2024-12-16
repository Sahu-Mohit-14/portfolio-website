/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          mohitsahu1805@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
         <a href="https://www.linkedin.com/in/mohit-sahu-9ba97a233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linked in</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/
          Sahu-Mohit-14
        </li>
      </ul>
    </div>
  );
};

export default Footer;
