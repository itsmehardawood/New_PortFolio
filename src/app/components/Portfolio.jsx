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
    link: "https://github.com/itsmehardawood/arabic-knowledge-chatbot",
    web: "https://arabic-edu-chatbot.vercel.app"
  },

  {
    title: "Card Security Scan App",
    description:
      "A robust security application that scans and validates debit/credit cards to detect and prevent fraudulent transactions. Features real-time card verification, fraud detection algorithms, and secure transaction processing.",
    image: "/images/card.png",
    link: "https://github.com/itsmehardawood/card-security-scanner",
    web: "https://card-security-app.vercel.app"
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
            <a href={project.link} target="_blank" className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition">
              View Project
            </a>
            <a target="_blank" href={project.web} className="mt-4 px-4 py-2  text-blue-600 rounded-lg ">Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
