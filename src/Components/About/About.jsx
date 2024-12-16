/* eslint-disable no-unused-vars */
import React from "react";
import AboutImg from "../../assets/th (11).jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have basic knowledge of frontend development, including HTML, CSS, and JavaScript. I am focused on learning how to build simple and responsive user interfaces and improving my skills in creating functional web pages.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                With a foundational understanding of databases, I am familiar with the basics of data storage and management. I have experience working with databases like MongoDB and am focused on learning how to design and optimize databases for efficient data retrieval and performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I possess basic knowledge of backend development, particularly with Node.js and Express. I am learning how to build server-side applications and manage backend logic to ensure smooth interaction with the frontend.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
