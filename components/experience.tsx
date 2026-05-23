"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Software Development Intern",
    company: "Femira (by Meraji)",
    duration: "Jan 2026 - Mar 2026",
    type: "Internship",
    description: "Contributed to full-stack feature development and AI-driven performance enhancements",
    achievements: [
      "Developed and optimized 10+ frontend and backend features, including AI-powered modules, reducing UI latency by 25%",
      "Integrated LLM APIs and designed prototype Retrieval-Augmented Generation (RAG) pipelines to enhance search and data processing capabilities",
      "Worked in Agile SDLC cycles including requirement analysis, sprint planning, testing, and deployment workflows",
      "Improved user interaction and usability, increasing overall engagement efficiency by 20%",
      "Implemented automation scripts, minimizing manual effort by 30% and boosting system efficiency",
      "Utilized Git for version control to maintain a collaborative and streamlined development workflow",
    ],
    tech: ["React.js", "Next.js", "SQL", "PostgreSQL", "HTML/CSS", "Tailwind CSS", "Java", "REST APIs", "JWT", "WordPress", "LLMs", "RAG"],
  },
  {
    role: "Virtual Intern – Generative AI",
    company: "SmartBridge & SmartInternz (Google Cloud)",
    duration: "Nov 2025 - Jan 2026",
    type: "Internship",
    description: "Exploring and building API-based AI integrations on Google Cloud",
    achievements: [
      "Studied Generative AI fundamentals including LLMs, prompt engineering, tokenization, and AI workflows",
      "Built hands-on solutions utilizing Google Cloud AI tools, focusing on API-based integration of Large Language Models (LLMs) and advanced prompting techniques",
      "Developed real-world GenAI use cases, including scalable conversational agents, semantic search, and RAG architectures",
      "Gained exposure to cloud deployment concepts, scalability, and AI service integration patterns",
    ],
    tech: ["Google Cloud AI", "Generative AI", "LLMs", "RAG", "LangChain", "Prompt Engineering"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional journey & career highlights"
    >
      <div className="space-y-10">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-8 rounded-2xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition mb-2">
                  {exp.role}
                </h3>
                <p className="text-red-500 font-semibold">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
              </div>
              <div className="bg-red-600/20 px-3 py-1 rounded-full border border-red-600/30">
                <span className="text-red-300 text-xs font-semibold uppercase">
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{exp.description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-red-500 flex-shrink-0 mt-1">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-700/50">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-neutral-800/50 text-gray-300 rounded-lg border border-neutral-700/50 hover:border-red-600/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}