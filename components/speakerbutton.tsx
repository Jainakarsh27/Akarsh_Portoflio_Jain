"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profileText = `
Hi, I'm Akarsh Jain. I'm a software engineer passionate about building scalable web applications, mobile solutions, and AI-powered systems.
I love building things that actually work and solve real problems, spending my time writing code, designing systems, and making applications faster and smarter.
Apart from coding and development, I love playing cricket, working on new projects, making new friends, and exploring the world.
I'm based in India and open to remote and global opportunities.
`;

export default function SpeakerButton() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSupported(true);
    }
  }, []);

  const toggleSpeech = () => {
    if (!supported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(profileText);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      // Select a nice voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Google')) || voices[0];
      if (preferredVoice) utterance.voice = preferredVoice;
      
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  if (!supported) return null;

  return (
    <motion.button
      onClick={toggleSpeech}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-24 right-8 z-[90] p-4 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
        isSpeaking 
          ? "bg-red-500 border-red-400 text-white animate-pulse" 
          : "bg-neutral-900/80 border-neutral-700 text-red-500 hover:border-red-500/50"
      }`}
      title={isSpeaking ? "Stop Reading" : "Read Profile"}
    >
      <div className="relative">
        {isSpeaking ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
        
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
