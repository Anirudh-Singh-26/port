// components/main/contact.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  staggerContainer,
  staggerItem,
  buttonHover,
  scaleIn,
  viewportSettings,
} from "@/lib/motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-24"
    >
      {/* Heading */}
      <motion.h2
        variants={slideInFromTop(0.2)}
        className="text-4xl md:text-5xl font-extrabold text-white text-center"
      >
        Let's{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Connect
        </span>
      </motion.h2>

      {/* Contact Cards */}
      <motion.div
        variants={staggerContainer}
        className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-center justify-center"
      >
        {/* Email (toggle button) */}
        <motion.button
          variants={staggerItem}
          type="button"
          onClick={() => {
            setShowForm((prev) => !prev);
            setSent(false);
          }}
          {...buttonHover}
          className={`group relative flex items-center gap-4 px-8 py-5 w-full md:w-[280px] rounded-2xl border 
            ${
              showForm
                ? "border-purple-500/70 backdrop-blur-sm"
                : "border-[#7042f88b] backdrop-blur-sm hover:border-purple-500/70"
            }
            shadow-lg transition-all duration-300 overflow-hidden`}
        >
          <motion.div
            animate={{ rotate: showForm ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <MdEmail className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-lg text-white font-medium">
            {showForm ? "Close Form" : "Email Me"}
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* GitHub */}
        <motion.a
          variants={staggerItem}
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          {...buttonHover}
          className="group relative flex items-center gap-4 px-8 py-5 w-full md:w-[280px] rounded-2xl border border-[#7042f88b] backdrop-blur-sm shadow-lg hover:border-purple-500/70 transition-all duration-300 overflow-hidden"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <RxGithubLogo className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-lg text-white font-medium">GitHub</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          variants={staggerItem}
          href="https://www.linkedin.com/in/your-linkedin-id/"
          target="_blank"
          rel="noopener noreferrer"
          {...buttonHover}
          className="group relative flex items-center gap-4 px-8 py-5 w-full md:w-[280px] rounded-2xl border border-[#7042f88b] backdrop-blur-sm shadow-lg hover:border-cyan-500/70 transition-all duration-300 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <RxLinkedinLogo className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-lg text-white font-medium">LinkedIn</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.div>

      {/* Email Form (toggle with AnimatePresence) */}
      <AnimatePresence mode="wait">
        {showForm && (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-10 w-full max-w-lg flex flex-col gap-5 p-8 rounded-2xl border border-[#7042f88b] shadow-2xl backdrop-blur-sm relative overflow-hidden"
          >
            {/* Background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />

            <motion.input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileFocus={{
                scale: 1.02,
                borderColor: "#a855f7",
              }}
              className="px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-all duration-300 relative z-10"
            />

            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileFocus={{
                scale: 1.02,
                borderColor: "#a855f7",
              }}
              className="px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-all duration-300 relative z-10"
            />

            <div className="flex items-center justify-center gap-4 relative z-10">
              <motion.button
                type="submit"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                {...buttonHover}
                className="px-6 py-3 rounded-2xl border border-[#7042f88b] backdrop-blur-sm shadow-lg hover:border-purple-500/70 transition-all duration-300 text-white font-semibold relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Send Message</span>
              </motion.button>

              <AnimatePresence>
                {sent && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="text-green-400 text-sm font-medium"
                  >
                    Thanks — message noted!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
