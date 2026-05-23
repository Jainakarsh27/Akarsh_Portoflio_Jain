"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Project Synapse",
    description: "AI-assisted last-mile delivery platform featuring customer and rider dashboards, smart address verification, and a chatbot interface.",
    tech: ["HTML", "TailwindCSS", "JavaScript", "AI APIs"],
    github: "https://github.com/Jainakarsh27/Project-Synapse-AI-Powered-Last-Mile-Delivery-Platform",
    live: "https://project-synapse-static-frontend.vercel.app/tp.html",
    image: "/vengerx.png",
    highlights: ["Smart Routing", "Chatbot Interface", "Dashboard"],
  },
  {
    title: "She Care",
    description: "A dedicated health and empowerment platform built for women in India, launched specially during Women's Day to provide vital care resources.",
    tech: ["HTML", "CSS", "JavaScript", "Wellness API"],
    github: "https://github.com/Jainakarsh27/She-Care-Women-s-day-project-",
    live: "https://she-care-women-s-day-project.vercel.app/",
    image: "/shecare.png",
    highlights: ["Empowerment", "Social Cause", "Resource Portal"],
  },
  {
    title: "Clara AI",
    description: "A centralized website platform introducing Clara AI. Showcases the tool's capabilities through an interactive and ultra-modern UI.",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/Jainakarsh27/Websitr_Clara_AI_project",
    live: "https://websitr-clara-ai-project.vercel.app",
    image: "/clara.png",
    highlights: ["Landing Page", "Performance", "Responsive Next-Gen UI"],
  },
  {
    title: "Alter Self AI",
    description: "Advanced AI photo synthesis application built with React Native and Reanimated. Generates multi-style photo transformations instantly.",
    tech: ["React Native", "Expo", "Reanimated", "GenAI API"],
    github: "https://github.com/Jainakarsh27/AlterSelf-AI",
    live: "https://alter-self-ai.vercel.app",
    image: "/alter.png",
    highlights: ["Cross-platform App", "Fluid Animations", "Real-time AI"],
  },
  {
    title: "Akarsh Infinity Learn",
    description: "Empowering the next generation of innovators with Robotics, AI, and Future Skills. Features adaptive learning paths, certified programs, and expert mentors.",
    tech: ["Next.js", "TailwindCSS", "Education Platform"],
    github: "https://github.com/Jainakarsh27/wizklub-chatbot-Akarsh-",
    live: "https://wizklub-chatbot-akarsh.vercel.app/",
    image: "/infinty-learn.png",
    highlights: ["AI Learning", "Certified Programs", "Expert Mentors"],
  },
  {
    title: "Auro Flow",
    description: "Visual logic builder that allows users to design and manage decision-based workflows with a highly interactive node-based interface.",
    tech: ["React Flow", "Node.js", "TailwindCSS"],
    github: "https://github.com/Jainakarsh27/Akarsh-Aura-Flow---Visual-Decision-Flow-Builder",
    live: "https://akarsh-aura-flow-visual-decision-fl.vercel.app/",
    image: "/auro.png",
    highlights: ["Node-based UI", "Workflow Engine", "Smooth Logic"],
  },
  {
    title: "MEDIBOT",
    description: "Medical health assistant and teleconsultation system designed to streamline remote healthcare access and deliver initial AI diagnosis.",
    tech: ["Python", "React", "WebRTC", "NLP Algorithms"],
    github: "https://github.com/Jainakarsh27/MEDIBOT-AI-Enabled-Teleconsultation-Health-Assistant",
    live: "https://drive.google.com/file/d/1gUrZrwhqwpFfgFCAvX9_lRYeH17fJ50-/view?usp=sharing",
    image: "/medibot.png",
    highlights: ["Teleconsultation", "AI Diagnosis", "Secure Access"],
  },
  {
    title: "Sahyak AI",
    description: "Smart, user-friendly frontend platform that helps citizens and students discover personalized government schemes based on their specific needs.",
    tech: ["Next.js", "React", "AI Integrations"],
    github: "https://github.com/Jainakarsh27/Sahayak-AI-AI-Powered-Government-Scheme-Discovery-Platform-Frontend-",
    live: "https://drive.google.com/file/d/1yTANP51vw2oxXs3i1r8tM0JeUAdPH5u4/view?usp=sharing",
    image: "/sahayak.png",
    highlights: ["AI Recommendations", "Eligibility Check", "Accessibility"],
  },
  // {
  //   title: "Plant Disease Prediction",
  //   description: "College EPICS project focused on agriculture. Uses computer vision and bounding boxes to scan plant leaves and accurately detect diseases.",
  //   tech: ["Python", "OpenCV", "TensorFlow", "React"],
  //   github: "https://github.com/Jainakarsh27/Plant-Disease-Detection",
  //   live: "https://drive.google.com/file/d/1Y4MQtlwxtyItxTO0JLqpneJtOhWnz3V0/view?usp=sharing",
  //   image: "/projects/plant_disease.svg",
  //   highlights: ["Computer Vision", "Eco-tech", "Disease Detection"],
  // },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Production-grade applications & innovative solutions"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] overflow-hidden relative flex flex-col rounded-3xl"
          >
            {/* Project Image */}
            <div className="relative w-full h-64 overflow-hidden bg-neutral-950">
              <div className="absolute inset-0 bg-neutral-950/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority={idx < 2}
              />
            </div>

            <div className="relative z-10 p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-neutral-400 mb-8 leading-relaxed flex-1 text-sm md:text-base">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-wider px-3 py-1 bg-red-600/10 text-red-400 rounded-full border border-red-600/20 font-bold"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-neutral-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-800">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="flex items-center justify-center gap-2 bg-neutral-800/50 hover:bg-neutral-800 text-white py-3 rounded-xl transition-all border border-neutral-700 hover:border-neutral-600 text-xs font-bold"
                >
                  <span>GITHUB</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition-all shadow-lg shadow-red-600/20 text-xs font-bold"
                >
                  <span>LIVE DEMO</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}