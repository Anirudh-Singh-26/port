"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-24"
    >
      {/* Heading */}
      <motion.h2
        variants={slideInFromTop(0.2)}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-5xl font-extrabold text-white text-center"
      >
        Let’s{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Connect
        </span>
      </motion.h2>

      {/* Contact Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-center justify-center"
      >
        {/* Email (toggle button) */}
        <motion.button
          variants={slideInFromLeft(0.3)}
          type="button"
          onClick={() => {
            setShowForm((prev) => !prev);
            setSent(false);
          }}
          className={`group relative flex items-center gap-4 px-8 py-5 w-full md:w-[280px] rounded-2xl border 
            ${
              showForm
                ? "border-purple-500/70 backdrop-blur-sm"
                : "border-[#7042f88b] backdrop-blur-sm hover:border-purple-500/70"
            }
            shadow-lg transition-all duration-300`}
        >
          <MdEmail className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="text-lg text-white font-medium">
            {showForm ? "Close Form" : "Email Me"}
          </span>
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity"></span>
        </motion.button>

        {/* GitHub */}
        <motion.a
          variants={slideInFromLeft(0.6)}
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 px-8 py-5 w-full md:w-[280px] rounded-2xl border border-[#7042f88b] backdrop-blur-sm shadow-lg hover:border-purple-500/70 transition-all duration-300"
        >
          <RxGithubLogo className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="text-lg text-white font-medium">GitHub</span>
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity"></span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          variants={slideInFromRight(0.9)}
          href="https://www.linkedin.com/in/your-linkedin-id/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 px-8 py-5 w-full md:w-[280px] rounded-2xl border border-[#7042f88b] backdrop-blur-sm shadow-lg hover:border-cyan-500/70 transition-all duration-300"
        >
          <RxLinkedinLogo className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="text-lg text-white font-medium">LinkedIn</span>
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity"></span>
        </motion.a>
      </motion.div>

      {/* Email Form (toggle with AnimatePresence) */}
      <AnimatePresence>
        {showForm && (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-10 w-full max-w-lg flex flex-col gap-5  p-8 rounded-2xl border border-[#7042f88b] shadow-2xl backdrop-blur-sm"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <div className="flex  items-center justify-center gap-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl border border-[#7042f88b] backdrop-blur-sm shadow-lg hover:border-purple-500/70 transition-all duration-300 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Send Message
              </button>

              {sent && (
                <span className="text-green-400 text-sm font-medium">
                  Thanks — message noted!
                </span>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};
