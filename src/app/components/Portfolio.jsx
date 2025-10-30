'use client'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "CardNest — Real-Time Transaction Fraud Prevention",
    description:
      "AI-driven fraud detection system that prevents fraudulent online card transactions in real time.",
    fullDescription:
      "Contributed to / built an AI-driven fraud detection system that scans, analyzes, and prevents fraudulent online card transactions in real time. Integrated behavioral modeling, anomaly detection, device fingerprinting, and custom risk scoring into the system. Ensured high privacy standards by not storing sensitive data, and delivered a developer-friendly API interface for seamless integration with payment gateways and e-commerce platforms. The system helps clients reduce chargebacks (up to ~98%) and maintain PCI DSS compliance while scaling with transaction volume.",
    image: "/images/cardnest.png",
    link: "https://github.com/itsmehardawood/CardNest-LLC",
    web: "https://cardnest.io/"
  },

  {
    title: "LLM-based Quotation Generation Chatbot – GREENGEN GROUP",
    description:
      "AI-powered quotation creation chatbot for dynamic invoice generation.",
    fullDescription:
      "Developed an AI-powered invoice generation chatbot where users can log in, request items with quantities through natural language queries, and receive a dynamic product table for selection. The system provides invoice previews with editable customer details (name, address, postal code, etc.), then generates a 7-page dynamic invoice on the company's official letterhead. Users can interactively edit any invoice line using AI-based prompts or issue bulk edits via queries. Features include chat history tracking, real-time invoice modifications, and one-click export, streamlining the entire invoicing process.",
    image: "/images/greengen.png",
    link: "https://github.com/itsmehardawood/Generate-Invoice-Chatbot",
    web: "https://generate-invoice-chatbot.vercel.app/chat"
  },

  {
    title: "LolliGive – Donation Management Platform",
    description:
      "Secure online giving platform for churches and communities.",
    fullDescription:
      "Developed LolliGive, a secure donation management platform for churches and organizations. Designed multi-level dashboards for organizations, leaders, and super admins, enabling dynamic content setup, QR/link-based donation pages, real-time donation tracking, insights, and withdrawal management. Implemented reporting, analytics, and secure payment flows to empower communities with transparency and control.",
    image: "/images/lolligive.png",
    link: "https://github.com/itsmehardawood/LolliGive",
    web: "https://www.lolligive.com/"
  },

  {
    title: "Echo Chatbot",
    description:
      "A web application for Assisting businesses 24/7 using AI chatbots support on their Website and Whatsapp.",
    fullDescription:
      "A web application for Assisting businesses 24/7 using AI chatbots support on their Website and Whatsapp. Keeping Track of their inquires with comprehensive analytics and multi-channel integration.",
    image: "/images/echochatbot.png",
    link: "https://github.com/itsmehardawood/Echo_chatbot",
    web: "https://echo-chatbot-eight.vercel.app/en/login"
  },

  {
    title: "Arabic Knowledge Base Educational Chatbot",
    description:
      "An intelligent AI-powered educational chatbot specialized in Arabic language learning.",
    fullDescription:
      "An intelligent AI-powered educational chatbot specialized in Arabic language learning and cultural knowledge. Features interactive lessons, grammar assistance, and cultural insights with real-time conversation capabilities.",
    image: "/images/arabic.png",
    link: "https://github.com/itsmehardawood/Arabic_Chatbot_Frontend",
    web: "https://arabic-chatbot-frontend.vercel.app/"
  },

  {
    title: "Card Security Scan App",
    description:
      "A robust security application that scans and validates debit/credit cards to detect fraud.",
    fullDescription:
      "A robust security application that scans and validates debit/credit cards to detect and prevent fraudulent transactions. Features real-time card verification, fraud detection algorithms, and secure transaction processing.",
    image: "/images/card.png",
    link: "https://github.com/itsmehardawood/card_detector_react_app",
    web: "https://cardsecurity.cardnest.io/"
  },

  {
    title: "A School Web App",
    description:
      "A web application for managing school operations efficiently with real-time updates.",
    fullDescription:
      "A web application for managing school operations efficiently with real-time updates and Responsive Smooth design. Complete school management system with student, teacher, and administrative features.",
    image: "/images/school.png",
    link: "https://github.com/itsmehardawood/Web_School_Project_NextJs.git",
    web: "https://babulislam.vercel.app"
  },

  {
    title: "Movie Mind",
    description:
      "A web application for movie recommendations, ratings, and suggestions.",
    fullDescription:
      "A web application for movie recommendations, ratings, descriptions, cast, and suggestions of more movies like that with Responsive Smooth design. Features advanced search, filtering, and personalized recommendations.",
    image: "/images/moviemind.png",
    link: "https://github.com/itsmehardawood/MovieMind",
    web: "https://moviemindrecommendation.vercel.app"
  },

  {
    title: "AI Chatbot App",
    description:
      "AI-powered assistant, always ready to chat! Ask questions, get insights, and enjoy conversations.",
    fullDescription:
      "AI-powered assistant, always ready to chat! Ask questions, get insights, and enjoy a smart conversation. Features context-aware responses, conversation history, and multi-turn dialogue capabilities.",
    image: "/images/chatbot.png",
    link: "https://github.com/itsmehardawood/ai_chatbot_react_app",
    web: "https://chatbotappreactai.vercel.app"
  },

  {
    title: "Portfolio in Next.js & Tailwind CSS",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    fullDescription:
      "A responsive portfolio website showcasing projects and skills using Next.js and Tailwind CSS. Features smooth animations, dark mode support, and modern UI/UX design patterns.",
    image: "/images/portfolio.png",
    link: "https://github.com/itsmehardawood/New_PortFolio.git",
    web: "https://mehardawoodportfolio.vercel.app"
  },

  {
    title: "ATM Management System",
    description:
      "A secure and user-friendly ATM system for efficient banking transactions.",
    fullDescription:
      "A secure and user-friendly ATM system for efficient banking transactions. Implements account management, balance checking, deposits, withdrawals, and transaction history with secure authentication.",
    image: "/images/atm.png",
    link: "/"
  },

  {
    title: "Casino Game",
    description:
      "An engaging casino game with interactive UI and smooth gameplay mechanics.",
    fullDescription:
      "An engaging casino game with interactive UI and smooth gameplay mechanics. Features multiple game modes, betting systems, and real-time score tracking with engaging animations.",
    image: "/images/casino.PNG",
    link: "/"
  },

  {
    title: "WhatsApp Clone in Flutter",
    description:
      "A chat application clone with real-time messaging and modern UI design.",
    fullDescription:
      "A chat application clone with real-time messaging and modern UI design. Built with Flutter, featuring end-to-end encryption simulation, status updates, and group chat functionality.",
    image: "/images/WA.jpg",
    link: "/"
  }
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div id="portfolio" className="min-h-screen w-full bg-gray-200 text-black flex flex-col items-center">
      <div className="py-16 flex justify-center">
        <h1 className="inline px-9 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          Portfolio
        </h1>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {selectedProject.fullDescription}
              </p>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-600 hover:shadow-lg text-center"
                >
                  View on GitHub
                </a>
                
                {selectedProject.web && selectedProject.web !== "/" && (
                  <a
                    href={selectedProject.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-xl font-medium transition-all duration-300 hover:from-blue-100 hover:to-purple-100 hover:shadow-lg text-center border border-blue-200"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]">
  {displayedProjects.map((project, index) => (
    <div
      key={index}
      data-aos="flip-left"
      className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200/50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
      onClick={() => setSelectedProject(project)}
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
        
        {/* "View Details" overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-gray-900 shadow-lg">
            View Details
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed flex-grow mb-6 group-hover:text-gray-700 transition-colors line-clamp-3">
          {project.description}
        </p>
        
        {/* Modern button container */}
        <div className="flex flex-col gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-600 hover:shadow-lg hover:shadow-gray-900/25 text-center group/btn overflow-hidden"
          >
            <span className="relative z-10">View Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          {project.web && project.web !== "/" && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.web}
              onClick={(e) => e.stopPropagation()}
              className="relative px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-xl font-medium transition-all duration-300 hover:from-blue-100 hover:to-purple-100 hover:shadow-lg hover:shadow-blue-500/25 text-center border border-blue-200/50 hover:border-blue-300/50 group/link"
            >
              <span className="relative z-10 group-hover/link:text-blue-700">Live Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>
  ))}
</div>

      {/* Show More/Less Button */}
      {projects.length > 6 && (
        <div className="mt-12 mb-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:from-gray-800 hover:to-gray-600 hover:shadow-xl hover:shadow-gray-900/25 hover:scale-105"
          >
            {showAll ? (
              <>
                Show Less
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Show More Projects ({projects.length - 6} more)
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
