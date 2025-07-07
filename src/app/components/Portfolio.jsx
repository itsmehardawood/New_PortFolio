'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Echo Chatbot",
    description:
      "A web application for Assisting businesses 24/7 using AI chatbots support on their Website and Whatsapp. Keeping Track of their inquires ",
    image: "/images/echochatbot.png",
    link: "https://github.com/itsmehardawood/Echo_chatbot",
    web: "https://echo-chatbot-eight.vercel.app/en/login"
  },

  {
    title: "Arabic Knowledge Base Educational Chatbot",
    description:
      "An intelligent AI-powered educational chatbot specialized in Arabic language learning and cultural knowledge. Features interactive lessons, grammar assistance, and cultural insights with real-time conversation capabilities.",
    image: "/images/arabic.png",
    link: "https://github.com/itsmehardawood/Arabic_Chatbot_Frontend",
    web: "https://arabic-chatbot-frontend.vercel.app/"
  },

  {
    title: "Card Security Scan App",
    description:
      "A robust security application that scans and validates debit/credit cards to detect and prevent fraudulent transactions. Features real-time card verification, fraud detection algorithms, and secure transaction processing.",
    image: "/images/card.png",
    link: "https://github.com/itsmehardawood/card_detector_react_app",
    web: "https://card-detection-businesses.vercel.app/lollicash"
  },

  {
    title: "A School Web App",
    description:
      "A web application for managing school operations efficiently with real-time updates and Responsive Smooth design.",
    image: "/images/school.png",
    link: "https://github.com/itsmehardawood/Web_School_Project_NextJs.git",
    web: "https://babulislam.vercel.app"
  },

  {
    title: "Movie Mind",
    description:
      "A web application for movie recommendations, ratings, descriptions, cast, and suggestions of more movies like that with Responsive Smooth design.",
    image: "/images/moviemind.png",
    link: "https://github.com/itsmehardawood/MovieMind",
    web: "https://moviemindrecommendation.vercel.app"
  },

  {
    title: "AI Chatbot App ",
    description:
      "AI-powered assistant, always ready to chat! Ask questions, get insights, and enjoy a smart conversation.",
    image: "/images/chatbot.png",
    link: "https://github.com/itsmehardawood/ai_chatbot_react_app",
    web: "https://chatbotappreactai.vercel.app"
  },

  {
    title: "Portfolio in Next.js & Tailwind CSS",
    description:
      "A responsive portfolio website showcasing projects and skills using Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    link: "https://github.com/itsmehardawood/New_PortFolio.git",
    web: "https://mehardawoodportfolio.vercel.app"
  },

  {
    title: "ATM Management System",
    description:
      "A secure and user-friendly ATM system for efficient banking transactions.",
    image: "/images/atm.png",
    link: "/"
  },

  {
    title: "Casino Game",
    description:
      "An engaging casino game with interactive UI and smooth gameplay mechanics.",
    image: "/images/casino.PNG",
    link: "/"
  },

  {
    title: "WhatsApp Clone in Flutter",
    description:
      "A chat application clone with real-time messaging and modern UI design.",
    image: "/images/WA.jpg",
    link: "/"
  }
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

     {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]">
  {projects.map((project, index) => (
    <div
      key={index}
      data-aos="flip-left"
      className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col h-full"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-xl font-bold text-center">{project.title}</h3>
      <p className="text-gray-600 mt-2 text-center flex-grow">{project.description}</p>
      
      <div className="mt-4 flex flex-col gap-2">
        <a
          href={project.link}
          target="_blank"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition text-center"
        >
          View Project
        </a>
        <a
          target="_blank"
          href={project.web}
          className="px-4 py-2 text-blue-600 rounded-lg text-center hover:bg-blue-50 transition"
        >
          Link
        </a>
      </div>
    </div>
  ))}
</div> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]">
  {projects.map((project, index) => (
    <div
      key={index}
      data-aos="flip-left"
      className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200/50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden hover:scale-[1.02] hover:-translate-y-2"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image container with cool effects */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed flex-grow mb-6 group-hover:text-gray-700 transition-colors">
          {project.description}
        </p>
        
        {/* Modern button container */}
        <div className="flex flex-col gap-3">
          <a
            href={project.link}
            target="_blank"
            className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-600 hover:shadow-lg hover:shadow-gray-900/25 text-center group/btn overflow-hidden"
          >
            <span className="relative z-10">View Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            target="_blank"
            href={project.web}
            className="relative px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-xl font-medium transition-all duration-300 hover:from-blue-100 hover:to-purple-100 hover:shadow-lg hover:shadow-blue-500/25 text-center border border-blue-200/50 hover:border-blue-300/50 group/link"
          >
            <span className="relative z-10 group-hover/link:text-blue-700">Live Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>
  ))}
</div>
    </div>
  );
}

export default Portfolio;
