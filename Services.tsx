import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Layout, Smartphone, FileCode2, Database, PenTool } from 'lucide-react';

const SERVICES = [
  {
    icon: MonitorPlay,
    title: "Frontend Development",
    desc: "Building highly interactive and performant web applications using modern technologies like React, HTML5, CSS3, and JavaScript.",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Creating fluid interfaces that adapt perfectly to mobile, tablet, and desktop screens for a seamless user experience.",
    color: "text-amber-600",
    bg: "bg-amber-100"
  },
  {
    icon: FileCode2,
    title: "Python & Desktop Apps",
    desc: "Developing functional desktop applications with Tkinter and building logic-driven Python scripts for automation and data handling.",
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    icon: Database,
    title: "Database Integration",
    desc: "Designing MySQL databases, writing efficient queries, and performing full CRUD operations for applications.",
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "Crafting beautiful, conversion-focused landing pages and personal portfolios that highlight brand identity.",
    color: "text-rose-600",
    bg: "bg-rose-100"
  },
  {
    icon: PenTool,
    title: "UI/UX & Wireframing",
    desc: "Designing clean, modern interfaces using Figma to map out user journeys before writing a single line of code.",
    color: "text-indigo-600",
    bg: "bg-indigo-100"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-gray-50/50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="section-label">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Delivering complete solutions from structural backend logic to polished, responsive frontend experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-shadow rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
