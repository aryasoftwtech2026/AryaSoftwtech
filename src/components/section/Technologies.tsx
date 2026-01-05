"use client";

import { motion } from "framer-motion";

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Python",
  "Django",
  "PHP",
  "Laravel",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Tailwind CSS",
  "Prisma",
];

export default function TechnologiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We master industry-leading technologies to deliver scalable, secure, and cutting-edge solutions tailored to your vision.
          </p>
        </motion.div>

        {/* Jabardast Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white rounded-2xl py-8 px-6 text-center shadow-md hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-100 hover:border-blue-200"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="relative z-10 text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                {tech}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-24 text-lg text-gray-600 italic"
        >
          We choose the optimal stack for every project — ensuring performance, security, and long-term maintainability.
        </motion.p>
      </div>
    </section>
  );
}