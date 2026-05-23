"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    title: "EY Techathon 5.0 Finalist",
    description: "Ranked in the top 5% globally with Project Sahayak AI in the prestigious Ernst & Young Techathon.",
    date: "2024",
  },
  {
    icon: "🏅",
    title: "Grab Hackathon 2025",
    description: "Ranked in the top 10% globally for developing and presenting Project Synapse AI.",
    date: "2025",
  },
  {
    icon: "🎓",
    title: "Vice President, EDU 4U Club",
    description: "Spearheaded club initiatives and led a dynamic team, fostering educational growth and community engagement.",
    date: "Leadership Role",
  },
  {
    icon: "👥",
    title: "Tech Lead Recognition",
    description: "Recognized as a Technical Lead for successfully mentoring and managing a team of over 50 members.",
    date: "2024",
  },
  {
    icon: "💻",
    title: "Hackathon Enthusiast",
    description: "Actively competed in major hackathons hosted by industry giants including Adobe, Amazon, Flipkart, Tata, HCL, and Myntra.",
    date: "Multiple Events",
  },
  {
    icon: "🤝",
    title: "TCS Mass Recruitment Volunteer",
    description: "Volunteered and helped coordinate one of the largest mass recruitment drives held at VIT Bhopal.",
    date: "Event Coordination",
  },
  {
    icon: "💡",
    title: "100 Days of Code",
    description: "Successfully completed a 100-day rigorous challenge of consistent coding and daily skill enhancement.",
    date: "Consistency Challenge",
  },
];

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Recognition, awards & milestones"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 p-6 rounded-xl border border-neutral-800 hover:border-red-500/50 transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition transform">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
                  {achievement.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}