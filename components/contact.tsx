"use client";

import SectionWrapper from "./sectionwrapper";
import { motion } from "framer-motion";
import { useState } from "react";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "Jainakarsh2805@gmail.com",
    link: "mailto:Jainakarsh2805@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/akarsh-jain",
    link: "https://www.linkedin.com/in/akarsh-jain-940220252/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Jainakarsh27",
    link: "https://github.com/Jainakarsh27",
  },
  {
    icon: "📞",
    label: "Contact Number",
    value: "9399800172",
    link: "tel:+919399800172",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/jainakarsh2805@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              _subject: `New Portfolio Message from ${formData.name}`,
          })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="Get in touch or find me on social platforms"
    >
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Quick Links</h3>
          {contactLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-900/40 to-neutral-950/40 rounded-lg border border-neutral-800 hover:border-red-500/50 transition-all"
            >
              <span className="text-3xl group-hover:scale-110 transition">
                {item.icon}
              </span>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  {item.label}
                </div>
                <div className="text-lg text-white group-hover:text-red-400 transition font-semibold">
                  {item.value}
                </div>
              </div>
              <span className="text-red-500 opacity-0 group-hover:opacity-100 transition">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-600/20 border border-green-600/50 rounded-lg p-8 text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <h4 className="text-xl font-bold text-green-400 mb-2">
                Message Sent!
              </h4>
              <p className="text-green-300">
                Thank you! I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-neutral-900/40 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition"
              />
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-neutral-900/40 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition"
              />
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 bg-neutral-900/40 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition"
              />
              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 bg-neutral-900/40 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition resize-none"
              />
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-red-600/50"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}