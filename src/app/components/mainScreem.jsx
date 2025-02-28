import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";



export default function SplitScreen() {
  return (
    <div className="min-h-screen w-full flex text-black">
      {/* Left div section */}
      <div
        className="bg-zinc-200 w-[55%] flex flex-col justify-center pl-24"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
      >
        <h2 className="pb-3 font-semibold text-xl">Hi, I am</h2>
        <h1 className="text-[60px] w-[60%] font-bold">Dawood Ayub</h1>
        <cite className="text-gray-700">A Frontend Engineer, Web Developer</cite>

      {/* icons */}
     <div className="flex pt-6">
     <FaLinkedin className="text-4xl bg-slate-200 ml-5 rounded-md p-1" />
     <FaGithub className="text-4xl bg-slate-200 ml-5 rounded-md p-1 "/> 
     <MdOutlineAlternateEmail className="text-4xl ml-5 p-1 bg-slate-200 rounded-md" />

     </div>
      

      </div>

      {/* Right section */}
      <div
        className="bg-black w-[45%] flex pl-24 items-end"
     
      >
        {/* <Image  src ="/images/right_-removebg.png" height= "200" width="260" alt="my_pic"/> */}
      </div>
    </div>
  );
}
 