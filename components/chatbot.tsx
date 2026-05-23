"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "bot";
  content: string;
}

const KNOWLEDGE_BASE = {
  name: "Akarsh Jain",
  role: "Software Engineer & AI Developer",
  experience: "4+ years in full-stack development",
  skills: "Next.js, React, Node.js, TypeScript, Google Cloud AI, AWS, Docker, Python, ML",
  about: "Passionate about building scalable systems and AI-powered solutions. Based in India.",
  education: "B.Tech in Computer Science & Engineering",
  projects: "Completed 10+ projects for 10+ clients.",
  internships: "Software Development Intern at Femira, Generative AI Virtual Intern at SmartBridge (Google Cloud)."
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm AI Akarsh. I can tell you about my skills, experience, or help you download my resume. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    { label: "About", sectionId: "about", query: "Who are you?" },
    { label: "Projects", sectionId: "projects", query: "Tell me about your projects" },
    { label: "Experience", sectionId: "experience", query: "What is your experience?" },
    { label: "Contact", sectionId: "contact", query: "How to contact you?" },
  ];

  const handleQuickOption = (option: { label: string, sectionId: string, query: string }) => {
    const section = document.getElementById(option.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    
    const userMessage: Message = { role: "user", content: option.query };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const response = getBotResponse(userMessage.content);
      setMessages(prev => [...prev, { role: "bot", content: response as string }]);
    }, 600);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAction = (intent: string) => {
    if (intent === "download") {
      // Mock download action
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Replace with actual resume path
      link.download = "Akarsh_Jain_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "I've started the download for my resume! Let me know if you need anything else.";
    }
    if (intent === "contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        return "I've scrolled to the contact section for you. You can fill out the form there!";
      }
      return "You can find my contact details at the bottom of the page.";
    }
    return null;
  };

  const getBotResponse = (userQuery: string) => {
    const query = userQuery.toLowerCase();
    
    // Check for actions first
    if (query.includes("download") || query.includes("resume") || query.includes("cv")) {
      return handleAction("download");
    }
    if (query.includes("contact") || query.includes("message") || query.includes("hire") || query.includes("email")) {
      return handleAction("contact");
    }

    // Knowledge base matching
    if (query.includes("skills") || query.includes("tech") || query.includes("stack")) {
      return `I specialize in ${KNOWLEDGE_BASE.skills}.`;
    }
    if (query.includes("experience") || query.includes("work") || query.includes("internship")) {
      return `I have ${KNOWLEDGE_BASE.experience}. I've interned at ${KNOWLEDGE_BASE.internships}.`;
    }
    if (query.includes("project")) {
      return `I have ${KNOWLEDGE_BASE.projects} including web apps, mobile solutions, and AI systems.`;
    }
    if (query.includes("education") || query.includes("study") || query.includes("college")) {
      return `I hold a ${KNOWLEDGE_BASE.education}.`;
    }
    if (query.includes("who") || query.includes("about") || query.includes("you")) {
      return `I'm ${KNOWLEDGE_BASE.name}, a ${KNOWLEDGE_BASE.role}. ${KNOWLEDGE_BASE.about}`;
    }

    return "That's a great question! I'm Akarsh's AI assistant. I can tell you about his technical skills, projects, or help you contact him. Try asking 'What are your skills?' or 'Download resume'.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(userMessage.content);
      setMessages(prev => [...prev, { role: "bot", content: response as string }]);
    }, 600);
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] p-4 bg-red-600 text-white rounded-full shadow-2xl border border-red-500/50 hover:bg-red-500 transition-colors"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[100] w-[350px] max-w-[90vw] h-[500px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-red-600 to-red-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">AJ</div>
                <div>
                  <h3 className="font-bold text-sm">AI Akarsh Jain</h3>
                  <p className="text-[10px] opacity-80">Online • Resume Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900/50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-red-600 text-white rounded-tr-none" 
                      : "bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Quick Options Chips */}
              <div className="flex flex-wrap gap-2 pt-2 pb-2">
                {quickOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickOption(opt)}
                    className="text-[11px] font-medium bg-neutral-800/80 hover:bg-red-600/20 text-neutral-300 hover:text-red-400 border border-neutral-700 hover:border-red-500/50 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800 bg-neutral-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-red-500 transition"
                />
                <button 
                  type="submit"
                  className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-500 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
              <p className="text-[9px] text-center text-neutral-500 mt-2 italic">
                Try: "Download Resume" or "How to contact?"
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
