'use client'
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
        <cite className="text-gray-700 pt-5">A Full Stack Engineer, Web Developer</cite>

        {/* Icons with Links */}
        <div className="flex pt-6">
          <a
            href="https://www.linkedin.com/in/itsmehardawood/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl md:text-4xl bg-slate-200 ml-3 md:ml-5 rounded-md p-1 hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
          <a
            href="https://github.com/itsmehardawood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl md:text-4xl bg-slate-200 ml-3 md:ml-5 rounded-md p-1 hover:text-gray-700 transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
          <a
            href="mailto:mehar.dawood.official@gmail.com"
          >
            <MdOutlineAlternateEmail className="text-3xl md:text-4xl ml-3 md:ml-5 p-1 bg-slate-200 rounded-md hover:text-red-500 transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Right section - Cool Interactive Terminal */}
      <div className="bg-black w-full md:w-[45%] flex flex-col justify-center items-center relative py-12 px-6 overflow-hidden">
        {/* Animated Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-lg w-full max-w-sm shadow-2xl border border-gray-700"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-4 font-mono">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-green-400"
            >
              <span className="text-purple-400">~/portfolio</span>
              <span className="text-white"> $ who_am_i</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-cyan-400"
            >
              full-stack-developer
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-green-400"
            >
              <span className="text-purple-400">~/portfolio</span>
              <span className="text-white"> $ ls skills</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-white pl-4"
            >
              <div>react.js</div>
              <div>next.js</div>
                            <div>Shadcn</div>

              <div>Tailwind CSS </div>
              <div>Python </div>
              <div>FastAPI  </div>
              <div>mongodb</div>
              <div>git-github</div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="text-green-400"
            >
              <span className="text-purple-400">~/portfolio</span>
              <span className="text-white"> $ echo "Let's build something amazing!"</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="text-yellow-400"
            >
              Let's build something amazing!
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="text-green-400 flex items-center"
            >
              <span className="text-purple-400">~/portfolio</span>
              <span className="text-white"> $</span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-white ml-1"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Code Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-10 left-10 text-gray-500 font-mono text-xs"
        >
          {'{ }'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-20 right-10 text-gray-500 font-mono text-xs"
        >
          {'</div>'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute top-1/2 right-5 text-gray-500 font-mono text-xs"
        >
          {'const'}
        </motion.div>

        {/* Matrix-like Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: [0, 0.4, 0], 
                y: [0, 100, 200] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "linear"
              }}
              className="absolute text-green-500 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: 0
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Glow Effects */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-cyan-500 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}