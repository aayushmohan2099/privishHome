// src/components/Preloader/Preloader.jsx
import React, { useState } from "react";
import { motion } from "motion/react";
import { transitions } from "../../lib/motionTokens";
import LiveBg from "../LiveBG/LiveBg";
import Logo from "../../assets/logo/privish-white.png";

export default function Preloader({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    if (isExiting) return;

    setIsExiting(true);

    setTimeout(() => {
      onEnter();
    }, 2000);
  };

  return (
    <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden">
      {/* Base Background - fades to #0C1922 */}
      <motion.div
        initial={{ backgroundColor: "#000000" }}
        animate={{
          backgroundColor: isExiting ? "#FDF8F4" : "#000000",
        }}
        transition={{
          duration: 2,
          ease: transitions.fluidEase,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Live Fluid Background */}
      <motion.div
        animate={{
          opacity: isExiting ? 0 : 1,
        }}
        transition={{
          duration: 2,
          ease: transitions.fluidEase,
        }}
        className="absolute inset-0 z-[1]"
      >
        <LiveBg
          colors={["#FDF8F4", "#FD7B03", "#FD3502"]}
          speed={0.8}
          fixed={false}
        />
      </motion.div>

      {/* Cinematic Black Bars */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: "-100%",
          opacity: isExiting ? 1 : 1,
        }}
        transition={{
          duration: 2,
          ease: transitions.fluidEase,
        }}
        className="absolute top-0 left-0 right-0 h-[50vh] bg-black z-10 "
      />

      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: "100%",
          opacity: isExiting ? 1 : 1,
        }}
        transition={{
          duration: 2,
          ease: transitions.fluidEase,
        }}
        className="absolute bottom-0 left-0 right-0 h-[50vh] bg-black z-10 "
      />

      {/* Logo and Button */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          filter: "blur(12px) brightness(1.5)",
        }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 0.98 : 1,
          filter: isExiting
            ? "blur(8px) brightness(1)"
            : "blur(0px) brightness(1)",
        }}
        transition={{
          duration: isExiting ? 1.2 : 1.5,
          ease: transitions.fluidEase,
          delay: isExiting ? 0 : 0.4,
        }}
        className="relative z-20 flex flex-col items-center justify-center"
      >
        <img
          src={Logo}
          alt="Privish Innovations"
          className="w-32 md:w-40 lg:w-64 h-auto object-contain drop-shadow-[0_0_20px_rgba(100,50,0,1)]"
        />

        <motion.button
          type="button"
          onClick={handleEnter}
          disabled={isExiting}
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? 8 : 0,
          }}
          transition={{
            delay: isExiting ? 0 : 1.4,
            duration: isExiting ? 0.5 : 0.6,
            ease: transitions.fluidEase,
          }}
          whileHover={isExiting ? {} : { scale: 1.04 }}
          whileTap={isExiting ? {} : { scale: 0.97 }}
          className="mt-8 px-7 py-3 rounded-full bg-brand-orange text-white font-semibold font-['Plus_Jakarta_Sans'] shadow-lg cursor-pointer transition-shadow hover:shadow-xl disabled:cursor-default"
        >
          Enter Website
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
