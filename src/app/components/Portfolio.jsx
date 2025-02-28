import React from "react";

const projects = [
  {
    title: "Full-Stack School Web App",
    description:
      "A web application for managing school operations efficiently with real-time updates.",
    image: "/images/school.png",
  },
  {
    title: "ATM Management System",
    description:
      "A secure and user-friendly ATM system for efficient banking transactions.",
    image: "/images/atm.png",
  },
  {
    title: "Casino Game",
    description:
      "An engaging casino game with interactive UI and smooth gameplay mechanics.",
    image: "/images/casino.PNG",
  },
  {
    title: "WhatsApp Clone in Flutter",
    description:
      "An engaging casino game with interactive UI and smooth gameplay mechanics.",
    image: "/images/WA.jpg",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gray-200 text-black flex flex-col items-center">
      <div className="py-16 flex justify-center">
        <h1 className="inline px-9 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{project.description}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition">
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
