"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

import Image from "next/image";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Building scalable systems & creating innovative solutions"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold text-xl">Hi, I'm Akarsh.</span> I love building things that actually work and solve real problems. I spend most of my time writing code, designing systems, and figuring out how to make applications faster and smarter. I don't just stick to one thing — I jump between front-end interfaces, back-end logic, and AI integrations, basically whatever it takes to get the job done right.
            </p>

            <p>
              At the end of the day, my goal is simple: build software that people actually want to use. I'm always messing around with new tech, learning as I go, and trying to build something slightly better than I did yesterday. I'm just looking for the next interesting problem to solve.
            </p>

            <div className="pt-2">
              <h4 className="text-white font-semibold mb-3">Quick Snapshot</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-red-500">🎓</span> B.Tech in CSE</li>
                <li className="flex items-center gap-2"><span className="text-red-500">💻</span> Full Stack & AI</li>
                <li className="flex items-center gap-2"><span className="text-red-500">🌍</span> Open Source Contributor</li>
                <li className="flex items-center gap-2"><span className="text-red-500">📍</span> Based in India</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Big Image Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800"
        >
          {/* Ambient Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          <Image
            src="/profile-pic.jpg"
            alt="Akarsh Jain"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Decorative Elements */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <p className="text-white font-bold tracking-widest text-sm">AKARSH JAIN</p>
              <p className="text-red-400 text-xs">Software Engineer</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center bg-black/40 backdrop-blur-md animate-[spin_10s_linear_infinite]">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
