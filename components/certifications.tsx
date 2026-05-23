"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 15, 2026",
    credentialId: "6341e27a17a645dfb629d6cde04adef8",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoBg: "bg-[#232f3e]",
  },
  {
    title: "Generative AI – Oracle",
    issuer: "Oracle",
    date: "2024",
    credentialId: "OCI-GENAI-2024",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Gen%20AI%20Oracle.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoBg: "bg-white",
  },
  {
    title: "IBM Generative AI",
    issuer: "IBM SkillsBuild",
    date: "November 14, 2025",
    credentialId: "MDL-388",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/IBM%20GEN%20AI.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoBg: "bg-white",
  },
  {
    title: "Generative AI Virtual Internship",
    issuer: "Skill Wallet",
    date: "2024",
    credentialId: "SW-GENAI-INT-2024",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Certificate%20_%20Virtual%20Internship%20_%20Skill%20Wallet.pdf",
    logo: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
    logoBg: "bg-gradient-to-br from-purple-900 to-indigo-900",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL / Academic",
    date: "2024",
    credentialId: "CC-NPTEL-2024",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Cloud%20Computing.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    logoBg: "bg-gradient-to-br from-sky-900 to-blue-900",
  },
  {
    title: "AWS Forage Job Simulation",
    issuer: "Amazon Web Services (Forage)",
    date: "2024",
    credentialId: "AWS-FORAGE-2024",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/AWS%20forgage.pdf",
    logo: "https://cdn.theforage.com/vinternship_modules/k5l5kGGECf7RXQAkp/forage-logo-new.png",
    logoBg: "bg-white",
  },
  {
    title: "AI Fundamentals – Accenture ASCEND",
    issuer: "Accenture × FutureSkills Prime",
    date: "September 16, 2025",
    credentialId: "FSPI/2025/10/4341581",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Accenture%20.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    logoBg: "bg-white",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "July 26, 2024",
    credentialId: "KAGGLE-ML-22BET10008",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/AKARSH%20JAIN%2022BET10008%20-%20Intro%20to%20Machine%20Learning.pdf",
    logo: "https://www.kaggle.com/static/images/logos/kaggle-logo-gray-300.png",
    logoBg: "bg-white",
  },
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera / University of Michigan",
    date: "2024",
    credentialId: "22BET10008-AML-PY",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Coursera%20%20certificate%2022BET10008.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    logoBg: "bg-white",
  },
  {
    title: "Foundations of Data & Data Everywhere",
    issuer: "Coursera / Google",
    date: "2024",
    credentialId: "E1O4SYEHXH5V",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Coursera%20E1O4SYEHXH5V.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    logoBg: "bg-white",
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Coursera / Google",
    date: "2024",
    credentialId: "M9GN17Y7LV7I",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Coursera%20M9GN17Y7LV7I.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    logoBg: "bg-white",
  },
  {
    title: "Tata Generative AI",
    issuer: "Tata Group",
    date: "2024",
    credentialId: "TATA-GENAI-2024",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Tata%20Generative%20AI.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    logoBg: "bg-white",
  },
  {
    title: "Secondary Learning",
    issuer: "Academic / VIT Bhopal",
    date: "2023",
    credentialId: "VIT-SL-22BET10008",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Akarsh%20Jain%20Secondary%20learning.pdf",
    logo: "https://img.icons8.com/fluency/96/graduation-cap.png",
    logoBg: "bg-gradient-to-br from-green-900 to-teal-900",
  },
  {
    title: "Critically Exploring Psychology",
    issuer: "Academic / VIT Bhopal",
    date: "2023",
    credentialId: "VIT-CEP-22BET10008",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/Akarsh%20jain%20Critically%20exploring%20psychology.pdf",
    logo: "https://img.icons8.com/fluency/96/brain.png",
    logoBg: "bg-gradient-to-br from-pink-900 to-rose-900",
  },
  {
    title: "Python Essentials",
    issuer: "Vityarthi × VIT Bhopal",
    date: "February 5, 2023",
    credentialId: "1001666149424​82528",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/PYTHON%20ESSENTIALS.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    logoBg: "bg-[#1e3a5f]",
  },
  {
    title: "Vice President – EDU 4U Club",
    issuer: "EDU 4U Club, VIT Bhopal",
    date: "2024 – 2025",
    credentialId: "EDU4U-VP-2024-25",
    url: "https://github.com/Jainakarsh27/Certificates-and-Resume/blob/main/VICE%20PRESIDENT.pdf",
    logo: "https://img.icons8.com/fluency/96/leadership.png",
    logoBg: "bg-gradient-to-br from-rose-900 to-red-900",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Industry-recognized credentials & continuous learning"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            viewport={{ once: true }}
            className="group bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-red-500/40 transition-all duration-300 hover:shadow-[0_0_28px_rgba(220,38,38,0.15)] overflow-hidden cursor-pointer block"
          >
            {/* Logo Banner */}
            <div className={`w-full h-40 flex items-center justify-center ${cert.logoBg} overflow-hidden`}>
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="max-h-20 max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://img.icons8.com/fluency/96/certificate.png";
                }}
              />
            </div>

            {/* Card Body */}
            <div className="p-5">
              <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-neutral-400 mb-4 font-medium">{cert.issuer}</p>

              <div className="text-[11px] text-neutral-500 space-y-0.5 mb-4 border-t border-white/5 pt-3">
                <p><span className="text-neutral-400">Issued:</span> {cert.date}</p>
                <p className="font-mono truncate"><span className="text-neutral-400 not-italic font-sans">ID:</span> {cert.credentialId}</p>
              </div>

              {/* Button */}
              <div className="flex items-center justify-between bg-neutral-800/60 hover:bg-red-600/20 border border-neutral-700 hover:border-red-500/40 rounded-xl px-4 py-2.5 transition-all duration-300">
                <span className="text-xs font-semibold text-neutral-300 group-hover:text-red-400 transition-colors">View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-red-400 transition-colors">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}