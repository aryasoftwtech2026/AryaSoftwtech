"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Clock, Rocket } from "lucide-react";

// Team image – public/images/team.jpg daal dena (ya external use kar sakte ho config ke saath)
import TeamImage from "@/public/image/team.jpg"; // Local recommended

const stats = [
  { icon: Rocket, label: "Projects Delivered", value: 150 },
  { icon: Users, label: "Happy Clients", value: 80 },
  { icon: Award, label: "Awards Won", value: 12 },
  { icon: Clock, label: "Years Experience", value: 8 },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Who <span className="text-blue-600">We Are</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Arya Softwtech is a passionate team of developers, designers, and digital strategists committed to crafting innovative software solutions that drive real business impact.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 8 years of experience, we've partnered with startups and enterprises to build scalable web & mobile applications, cloud platforms, and digital products across industries like fintech, healthcare, e-commerce, and education.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}+</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={TeamImage}
                alt="Arya Softwtech Team - Passionate developers and designers"
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-xl"
            >
              <div className="text-2xl font-bold">8+ Years</div>
              <div className="text-sm">Of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}