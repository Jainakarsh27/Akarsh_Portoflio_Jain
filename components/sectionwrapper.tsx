"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-32 bg-transparent text-white relative overflow-hidden opacity-100"
    >
      {/* Removed local animated background effects to let global space background show through */}

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.05 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white bg-clip-text">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 mb-20 text-lg md:text-xl font-light tracking-wide">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.05 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}