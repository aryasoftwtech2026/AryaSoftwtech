"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  Wrench, 
  Lightbulb 
} from "lucide-react";

const services = [
  { 
    title: "Web Development", 
    desc: "Custom, high-performance websites & web applications using React, Next.js, Node.js and modern frameworks.",
    icon: Globe
  },
  { 
    title: "Mobile Apps", 
    desc: "Native & cross-platform mobile applications for iOS and Android with seamless user experiences.",
    icon: Smartphone
  },
  { 
    title: "UI/UX Design", 
    desc: "Beautiful, intuitive designs that prioritize user engagement and drive conversions.",
    icon: Palette
  },
  { 
    title: "Cloud Solutions", 
    desc: "Scalable cloud architecture on AWS, Azure, GCP with DevOps best practices.",
    icon: Cloud
  },
  { 
    title: "Maintenance & Support", 
    desc: "Ongoing maintenance, updates, monitoring and 24/7 support for your digital products.",
    icon: Wrench
  },
  { 
    title: "Tech Consulting", 
    desc: "Expert guidance on technology strategy, digital transformation and system architecture.",
    icon: Lightbulb
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern (inspired from pro tech sites) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end software solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative p-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* Subtle bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "30%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}