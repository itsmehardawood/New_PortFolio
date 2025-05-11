import React from "react";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";

function AboutMe() {
  return (
    <div id="about-me" className="min-h-screen w-full bg-gray-200 text-black flex flex-col items-center px-4 md:px-0">
      {/* About Me Heading */}
      <div className="py-16 flex justify-center">
        <h1 className="inline px-6 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          About Me
        </h1>
      </div>

      {/* About Me Paragraph */}
      <p className="text-center mt-8 w-full md:w-[80%] text-gray-700 leading-relaxed">
        I’m Dawood Ayub, a Full-Stack Web Developer skilled in Next.js, Tailwind CSS, and Python, with a passion for 
        building interactive, scalable, and user-friendly web applications. Currently pursuing a Bachelor’s in Software 
        Engineering at Superior University, Lahore, I’ve worked on real-world projects like a real-time school web app, 
        an ATM Management System, and a Casino Game. With experience in frontend and backend development, I aim to 
        create impactful digital solutions that merge innovation with efficiency. 🚀
      </p>

      {/* Explore Section */}
      <div className="flex flex-col items-center text-gray-900 mt-12">
        <h2 className="border-x-4 border-black px-6 text-xl font-bold font-serif">Explore</h2>

        {/* Skills Sections */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 w-full md:w-[70%] gap-10">
          {/* Design */}
          <div className="flex flex-col items-center text-center md:text-left w-[90%] md:w-[50%]">
            <MdOutlineDesignServices className="text-6xl text-gray-400" />
            <h3 className="mt-3 font-bold text-2xl">Design</h3>
            <p className="mt-3 text-gray-700">
              I craft visually stunning and user-centric designs, focusing on aesthetics, UX, branding, and 
              innovation to create engaging digital experiences.
            </p>
          </div>

          {/* Development */}
          <div className="flex flex-col items-center text-center md:text-left w-[90%] md:w-[50%]">
            <MdDeveloperMode className="text-6xl text-gray-400" />
            <h3 className="mt-3 font-bold text-2xl">Development</h3>
            <p className="mt-3 text-gray-700">
              I build scalable, high-performance web applications, leveraging Next.js, Tailwind CSS, and NestJS 
              to create seamless, interactive, and efficient digital solutions.
            </p>
          </div>
        </div>

        {/* Maintenance */}
        <div className="flex flex-col items-center text-center md:text-left w-[90%] md:w-[40%] mt-12">
          <GiAutoRepair className="text-6xl text-gray-400" />
          <h3 className="mt-3 font-bold text-2xl">Maintenance</h3>
          <p className="mt-3 text-gray-700">
            I ensure optimal performance, security, and updates for web applications, fixing bugs, optimizing speed, 
            and enhancing functionality for long-term reliability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
