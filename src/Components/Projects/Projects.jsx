/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "./ProjectCard";
import banner from '../../assets/th (8).jpg'
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <img src="" alt="" />
        <ProjectCard 
          title="Online Restaurant Food Backend"
          main="Built a secure backend for an online food delivery system using Node.js, Express, and MongoDB. Implemented user authentication with JWT and managed orders and restaurant data. "
        />
        <ProjectCard
          title="Voting Application "
          main="Developed a backend for a voting system using Node.js, Express, and MongoDB. Created a RESTful API for vote management and user registration, focusing on security and scalability."
        />
        {/* <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
