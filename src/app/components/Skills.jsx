'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techStack = [
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', name: 'HTML' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', name: 'CSS' },
    { logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', name: 'Tailwind CSS' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', name: 'Next.js' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', name: 'React.js' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', name: 'Flutter' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', name: 'Python' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', name: 'FastAPI' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', name: 'MySQL' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
  ];
  

  const learningStack = [
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', name: 'Express.js' },
  ];

  const otherSkills = [
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', name: 'C++' },
    { logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg', name: 'English' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', name: 'Git' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', name: 'GitHub' },
    { logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg', name: 'Jira' },
    { logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg', name: 'Figma' }

  ];
  

  return (
    <div id="skills" className="min-h-screen w-full bg-gray-200 text-black flex flex-col items-center">
      <div className="py-16 flex justify-center">
        <h1 className="inline px-14 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          Skills
        </h1>
      </div>

      <h1 className="text-center font-bold text-2xl font-sans underline">Currently Using</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-11 place-items-center w-[80%]">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="flip-left">
            <img src={tech.logo} alt={`Logo of ${tech.name}`} className="w-16 h-16 object-contain" />
            <span className="mt-2 font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>

      <h1 className="mt-10 text-center font-bold text-2xl font-sans underline">Learning Now</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-11 place-items-center w-[80%]">
        {learningStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="flip-left">
            <img src={tech.logo} alt={`Logo of ${tech.name}`} className="w-16 h-16 object-contain" />
            <span className="mt-2 font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>

      <h1 className="mt-10 text-center font-bold text-2xl font-sans underline">Other Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-11 place-items-center w-[80%]">
        {otherSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="flip-left">
            <img src={skill.logo} alt={`Logo of ${skill.name}`} className="w-16 h-16 object-contain" />
            <span className="mt-2 font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;