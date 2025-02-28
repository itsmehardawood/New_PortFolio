'use client'
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function SplitScreen() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row text-black">
      {/* Left div section */}
      <div
        className="bg-zinc-200 w-full md:w-[55%] flex flex-col justify-center px-10 md:pl-24 py-12"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
      >
        <h2 className="pb-10 font-semibold text-xl pt-14">Hi, I am</h2>
        <h1 className="text-4xl md:text-[60px] w-full md:w-[60%] font-bold">Dawood Ayub</h1>
        <cite className="text-gray-700 pt-5">A Frontend Engineer, Web Developer</cite>

        {/* Icons */}
        <div className="flex pt-6">
          <FaLinkedin className="text-3xl md:text-4xl bg-slate-200 ml-3 md:ml-5 rounded-md p-1 hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer" />
          <FaGithub className="text-3xl md:text-4xl bg-slate-200 ml-3 md:ml-5 rounded-md p-1 hover:text-gray-700 transition-transform transform hover:scale-110 cursor-pointer" />
          <MdOutlineAlternateEmail className="text-3xl md:text-4xl ml-3 md:ml-5 p-1 bg-slate-200 rounded-md hover:text-red-500 transition-transform transform hover:scale-110 cursor-pointer" />
        </div>
      </div>

      {/* Right section */}
      <div className="bg-black w-full md:w-[45%] flex justify-center md:justify-start items-end relative py-12 md:pl-24">
        {/* Animated Floating Image */}
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/right_-removebg.png"
            height={250}
            width={350}
            alt="My Picture"
            className="drop-shadow-lg max-w-full"
          />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  );
}
