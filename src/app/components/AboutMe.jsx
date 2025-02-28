import React from "react";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";

function AboutMe() {
  return (
    <div className="min-h-screen w-full bg-gray-200 text-black flex items-center flex-col">
      <div className="py-16 flex justify-center">
        <h1 className="inline px-9 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          About Me
        </h1>
      </div>
      <p className="text-center mt-12  w-[80%] text-gray-700">
        I’m Dawood Ayub, a Full-Stack Web Developer skilled in Next.js, Tailwind
        CSS, and NestJS, with a passion for building interactive, scalable, and
        user-friendly web applications. Currently pursuing a Bachelor’s in
        Software Engineering at Superior University, Lahore, I’ve worked on
        real-world projects like a real-time school web app, an ATM Management
        System, and a Casino Game. With experience in frontend and backend
        development, I aim to create impactful digital solutions that merge
        innovation with efficiency. 🚀
      </p>
      <div className="flex items-center mt-10 flex-col text-gray-900">
        <h2 className="border-x-4 border-black px-6 text-xl font-bold font-serif">
          Explore
        </h2>

        <div className=" flex items-center w-[70%] justify-center mt-24 ml-10">
          <div className="relative inline-block w-[50%]">
            <MdOutlineDesignServices className="text-6xl text-gray-400" />
            <h3 className="absolute top-3 left-7 font-bold text-3xl px-1">
              Design
            </h3>
            <p className=" mt-6 text-justify w-[80%]">
              I craft visually stunning and user-centric designs, focusing on
              aesthetics, UX, branding, and innovation to create engaging
              digital experiences.
            </p>
          </div>

          <div className="relative inline-block w-[50%]">
            <MdDeveloperMode className="text-6xl text-gray-400" />
            <h3 className="absolute top-3 left-7 font-bold text-3xl px-1">
              Development
            </h3>
            <p className="mt-6 text-justify w-[80%]">
              I build scalable, high-performance web applications, leveraging
              Next.js, Tailwind CSS, and NestJS to create seamless, interactive,
              and efficient digital solutions.
            </p>
          </div>
        </div>
        <div className="flex w-[40%] pl-24 py-20">
          <div className="relative inline-block">
            <GiAutoRepair className="text-6xl text-gray-400" />
            <h3 className="absolute top-3 left-7 font-bold text-3xl px-1">
              Maintainace
            </h3>
            <p className="mt-6 text-justify w-[80%]">
              I ensure optimal performance, security, and updates for web
              applications, fixing bugs, optimizing speed, and enhancing
              functionality for long-term reliability.
            </p>
          </div>
        </div>
        {/* <GiAutoRepair /> */}
      </div>
    </div>
  );
}

export default AboutMe;
