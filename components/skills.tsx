"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "🚀 Languages",
    badges: [
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
    ]
  },
  {
    title: "🧩 Frameworks & Libraries",
    badges: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
    ]
  },
  {
    title: "🌐 Backend & APIs",
    badges: [
      "https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=openapi-initiative&logoColor=white",
      "https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white",
      "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white",
      "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
    ]
  },
  {
    title: "🎮 Game / 3D & Interactive Development",
    badges: [
      "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
      "https://img.shields.io/badge/Unreal_Engine-313131?style=for-the-badge&logo=unreal-engine&logoColor=white",
      "https://img.shields.io/badge/Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white"
    ]
  },
  {
    title: "🗄️ Databases & Tools",
    badges: [
      "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
      "https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white",
      "https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white"
    ]
  },
  {
    title: "🛠️ AI / ML",
    badges: [
      "https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
      "https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white",
      "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=Matplotlib&logoColor=white",
      "https://img.shields.io/badge/LLM-8A2BE2?style=for-the-badge",
      "https://img.shields.io/badge/Ollama-000000?style=for-the-badge"
    ]
  },
  {
    title: "☁️ AWS Cloud",
    badges: [
      "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
      "https://img.shields.io/badge/Cloud_Computing-4285F4?style=for-the-badge",
      "https://img.shields.io/badge/Google_Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
    ]
  }
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Tech Stack"
      subtitle=""
    >
      <div className="w-full space-y-12 overflow-hidden">

        
        {techCategories.map((category, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
            >
              <h3 className="text-xl font-bold text-white mb-6 px-4 md:px-8 tracking-wide">{category.title}</h3>
              
              {/* Marquee Container */}
              <div className="relative w-full overflow-hidden flex">
                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
                
                <motion.div
                  className="flex gap-4 items-center min-w-max px-4"
                  animate={{ x: isEven ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                  {/* Render 4 sets of badges to ensure the marquee fills the screen seamlessly */}
                  {[...category.badges, ...category.badges, ...category.badges, ...category.badges].map((badge, i) => (
                    <img 
                      key={i} 
                      src={badge} 
                      alt="tech-badge" 
                      className="h-[48px] hover:scale-105 transition-transform duration-300 cursor-default shadow-md" 
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}