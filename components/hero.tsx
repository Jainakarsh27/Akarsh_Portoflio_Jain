"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden pt-20 bg-no-repeat bg-[length:auto_100%] bg-center"
      style={{ backgroundImage: "url('/robot-bg.png')" }}
    >
      {/* Ambient dark overlay for text readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/60" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center space-y-8 h-full mt-20">

        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <motion.h1
            className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Akarsh Jain</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-neutral-300 font-medium tracking-wide mt-2">
              Full-Stack Developer <span className="text-purple-500 mx-2">|</span> <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">AI Enthusiast</span> <span className="text-purple-500 mx-2">|</span> Cloud Developer
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-8 w-full justify-center"
          >
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-4 text-lg bg-purple-600 hover:bg-purple-500 rounded-full font-medium tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Hire Me
            </button>

            <div className="relative group">
              <button
                className="flex items-center gap-2 px-8 py-4 text-lg bg-transparent border border-white/20 group-hover:border-white/50 group-hover:bg-white/5 rounded-full font-medium tracking-wide transition-all duration-300 text-white backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download CV
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 bg-[#111] border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50">
                <a
                  href="https://github.com/Jainakarsh27/-PARQIS-RESUME/raw/main/Akarsh_20_05_26_resume_pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 hover:bg-purple-600/20 text-sm font-medium text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Frontend Role
                </a>
                <div className="h-[1px] w-full bg-white/10" />
                <a
                  href="https://github.com/Jainakarsh27/Akarsh_22Bet10008_new_resume/raw/main/Akarsh_Resume_15-04-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 hover:bg-purple-600/20 text-sm font-medium text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  Software / Full Stack
                </a>
              </div>
            </div>

            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-6 py-4 text-base font-medium hover:text-purple-400 transition-colors"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-500 cursor-pointer hover:text-white transition-colors"
        onClick={scrollToProjects}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}