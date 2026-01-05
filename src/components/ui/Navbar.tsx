"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";

import CompanyLogo from "@/public/image/companyLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items with icons
  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Logo + Animated Company Name */}
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Image
                  src={CompanyLogo}
                  alt="Arya Softwtech Logo"
                  width={52}
                  height={52}
                  className="rounded-xl object-contain drop-shadow-lg"
                  priority
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                className="flex flex-col leading-tight"
              >
                <motion.span variants={wordVariants} className="text-3xl font-extrabold text-gray-900">
                  Arya
                </motion.span>
                <motion.span
                  variants={wordVariants}
                  className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 -mt-2"
                >
                  Softwtech
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>

                    {/* Gradient Underline on Hover */}
                    <motion.span
                      className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      whileHover={{ width: "100%" }}
                      initial={{ width: "0%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50"
              aria-label="Toggle menu"
            >
              <motion.div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-8 h-0.5 bg-gray-800 origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-8 h-0.5 bg-gray-800"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-8 h-0.5 bg-gray-800 origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 text-gray-700" strokeWidth={2} />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center space-y-10">
                {menuItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        <Icon className="w-7 h-7" />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}