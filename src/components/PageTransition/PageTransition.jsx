import React from "react";
import { motion } from "motion/react";
import { transitions } from "../../lib/motionTokens";

export default function PageTransition({ children, className = "" }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* =========================================================
          NEW PAGE
          The page is mounted underneath the wipe.
          It remains hidden until the wipe has moved across.
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.01,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.45,
          delay: 0.55,
          ease: transitions.fluidEase,
        }}
        className={`relative z-0 w-full min-h-[calc(100vh-80px)] ${className}`}
      >
        {children}
      </motion.div>

      {/* =========================================================
          MAIN WIPE
          Starts completely off-screen on the LEFT,
          moves smoothly to the RIGHT.
      ========================================================= */}
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "100%",
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed inset-0 z-[9998] bg-ink pointer-events-none"
        style={{
          willChange: "transform",
        }}
      />

      {/* =========================================================
          ORANGE ACCENT WIPE
          Follows the main wipe very slightly behind it.
      ========================================================= */}
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "100%",
        }}
        transition={{
          duration: 0.82,
          delay: 0.08,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed inset-0 z-[9999] bg-brand-orange pointer-events-none"
        style={{
          willChange: "transform",
        }}
      />
    </div>
  );
}
