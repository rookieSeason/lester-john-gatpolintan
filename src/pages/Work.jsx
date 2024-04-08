import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Accordion from "../components/Accordion";

function Work() {
  const works = [
    {
      id: 1,
      position: "Junior Software Developer",
      company: "In1go Technologies Inc.",
      date: "Sep 2023 - Present",
      employment: "Full-Time",
      responsibilities: (
        <ul className="list-disc px-4">
          <li>
            Associates in building web application with Microservices
            Architecture Design.
          </li>
          <li>Optimising databases queries for a better performance.</li>
          <li>
            Worked with dynamic user interface design that can be easily
            navigate by users.
          </li>
          <li>
            Exposed in testing different API endpoints for data processing.
          </li>
          <li>
            Implement features in a different technology coming from existing
            projects.
          </li>
          <li>Challenged in some complex tasks for growth.</li>
          <li>Resolved issues while migrating data for new application.</li>
        </ul>
      ),
      technologies: (
        <ul className="list-disc px-4">
          <li>React Js</li>
          <li>Node Js</li>
          <li>Sequelize</li>
          <li>MS SQL Server</li>
          <li>JavaScript</li>
          <li>Reactstrap</li>
        </ul>
      ),
    },
    {
      id: 2,
      position: "Graphic Designer",
      company: "Phosclay Chemical Mfg.",
      date: "Mar 2023 - Jun 2023",
      employment: "Internship",
      responsibilities: (
        <ul className="list-disc px-4">
          <li>
            Assist with design projects in creating graphics for social media,
            and website assets.
          </li>
          <li>
            Research and collect images, fonts, and design elements for
            projects.
          </li>
          <li>Maintain digital asset libraries.</li>
          <li>
            Collaborate on creative concepts and provide feedback on designs.
          </li>
          <li>
            Assist with administrative tasks and help maintain project
            schedules.
          </li>
        </ul>
      ),
      technologies: (
        <ul className="list-disc px-4">
          <li>Adobe Photoshop</li>
          <li>Canva</li>
          <li>Filmora</li>
          <li>Capcut</li>
        </ul>
      ),
    },
  ];
  return (
    <div className="min-w-screen min-h-screen bg-white dark:bg-[#243447]">
      <div className="grid md:grid-cols-2 py-12 gap-1">
        <div className="my-auto">
          <h1 className="animate-float pl-8 font-bold text-left sm:pl-24 text-3xl sm:text-5xl text-gray-700 dark:text-gray-200 pt-8">
            <span className="text-cyan-600 dark:text-cyan-400">Career</span>{" "}
            Journey
          </h1>
          <p className="pl-8 sm:pl-24 text-md sm:text-xl text-gray-600 dark:text-gray-300 my-4">
            My milestone throughout my journey.
          </p>
        </div>
        <div className="flex justify-center items-center min-h-screen px-4">
          <Accordion items={works} />
        </div>
      </div>
    </div>
  );
}

export default Work;