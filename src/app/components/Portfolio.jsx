'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Full-Stack School Web App",
    description:
      "A web application for managing school operations efficiently with real-time updates.",
    image: "/images/school.png",
    link: "https://github.com/itsmehardawood/Web_School_Project_NextJs.git"
  },
  {
    title: "ATM Management System",
    description:
      "A secure and user-friendly ATM system for efficient banking transactions.",
    image: "/images/atm.png",
    link:"/"
  },
  {
    title: "Casino Game",
    description:
      "An engaging casino game with interactive UI and smooth gameplay mechanics.",
    image: "/images/casino.PNG",
    link:"/"
  },
  {
    title: "WhatsApp Clone in Flutter",
    description:
      "A chat application clone with real-time messaging and modern UI design.",
    image: "/images/WA.jpg",
    link:"/"
  },
  {
    title: "Portfolio in Next.js & Tailwind CSS",
    description:
      "A responsive portfolio website showcasing projects and skills using Next.js and Tailwind CSS.",
    image: "https://cache.careers360.mobi/media/article_images/2022/4/20/How-to-make-portfolio-for-design-admission.jpg",
    link: "https://github.com/itsmehardawood/New_PortFolio.git"
  },
];

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="portfolio" className="min-h-screen w-full bg-gray-200 text-black flex flex-col items-center">
      <div className="py-16 flex justify-center">
        <h1 className="inline px-9 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="flip-left"
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{project.description}</p>
            <a href={project.link} className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
