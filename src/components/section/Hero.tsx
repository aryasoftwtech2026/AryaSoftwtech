"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

// Premium high-res futuristic tech backgrounds (dark blue circuit + glow)
const backgrounds = [
  "https://thumbs.dreamstime.com/b/close-up-futuristic-blue-circuit-board-glowing-circles-dark-background-showcasing-abstract-ai-technology-concept-389871787.jpg", // Clean glowing circuit (Image 0)
  "https://thumbs.dreamstime.com/b/abstract-futuristic-circuit-board-illustration-hi-tech-digital-technology-concept-high-computer-dark-blue-color-background-143402183.jpg", // Classic circuit (Image 1)
  "https://static.vecteezy.com/system/resources/previews/065/611/182/non_2x/futuristic-lines-circuit-board-blue-light-technology-abstract-background-vector.jpg", // Lines circuit (Image 2)
  "https://thumbs.dreamstime.com/b/abstract-glowing-blue-digital-network-background-dynamic-particle-effects-waves-interwoven-connections-float-space-383771360.jpg", // Glowing particles network (Image 6)
  "https://thumbs.dreamstime.com/b/abstract-blue-digital-network-waves-glowing-particles-dark-background-shimmering-419458044.jpg", // Digital waves particles (Image 7)
  "https://thumbs.dreamstime.com/b/glowing-blue-lines-dots-abstract-digital-network-illustration-dark-background-futuristic-futuristic-blue-abstract-technology-410632239.jpg", // Blue lines dots (Image 12)
];

// Best one selected – glowing circuit with depth (feel free to change index)
const bgImage = backgrounds[0];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with subtle slow zoom animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <Image
          src={bgImage}
          alt="Futuristic glowing blue circuit board technology background"
          fill
          className="object-cover brightness-50 contrast-130"
          priority
          quality={100}
        />
      </motion.div>

      {/* Enhanced overlay gradients for depth & readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,transparent_60%)] z-1" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full mb-10 border border-white/20 shadow-2xl"
        >
          <Sparkles className="w-6 h-6 text-cyan-300" />
          <span className="font-semibold tracking-wider text-lg">Arya Softwtech • Raipur, India</span>
        </motion.div>

        {/* Hero Heading - More Impactful */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight"
        >
          Transform Your Ideas <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">
            Into Powerful Software
          </span>
        </motion.h1>

        {/* Subtitle - Professional & Concise */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto mb-16 text-gray-200 leading-relaxed font-light"
        >
          Arya Softwtech delivers custom web & mobile applications, AI-powered solutions, and scalable cloud systems — 
          built with precision for modern businesses.
        </motion.p>

        {/* Single Strong CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-12 py-6 rounded-2xl text-xl md:text-2xl font-bold shadow-2xl shadow-blue-900/60 transition-all duration-500 flex items-center gap-4">
            <Code2 className="w-8 h-8" />
            Start Your Project Today
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center pt-4">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-2 h-6 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}