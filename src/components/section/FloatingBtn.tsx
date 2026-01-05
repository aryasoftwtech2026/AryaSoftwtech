"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import WhatsappLogo from "@/public/image/whatsappLogo.webp"; // 👈 Tumhara image

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/9755413647"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 group cursor-pointer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          y: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
        }}
      >
        {/* Tumhara WhatsApp Logo */}
        <Image
          src={WhatsappLogo}
          alt="WhatsApp"
          width={40}
          height={40}
          className="object-contain drop-shadow-lg"
          priority // Jaldi load ho
          unoptimized // Agar .webp mein issue ho to yeh add kar do (temporary)
        />

        {/* Tooltip */}
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/90 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Scroll to Top Arrow */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-blue-600 rounded-full shadow-2xl hover:bg-blue-700 flex items-center justify-center cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
          >
            <ArrowUp className="w-7 h-7 text-white" strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}