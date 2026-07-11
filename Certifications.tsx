import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "2024",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    title: "Frontend Development",
    issuer: "freeCodeCamp",
    date: "2024",
    color: "text-amber-600",
    bg: "bg-amber-100"
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    date: "2023",
    color: "text-blue-600",
    bg: "bg-blue-100"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-gray-50/50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="section-label">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-shadow p-8 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <div className={`w-20 h-20 rounded-full ${cert.bg} ${cert.color} flex items-center justify-center mb-6 shadow-inner`}>
                <Award size={36} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{cert.title}</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground font-semibold mb-6">
                <ShieldCheck size={18} className="text-primary" />
                {cert.issuer}
              </div>
              <div className="mt-auto px-5 py-2 rounded-full bg-gray-100 text-sm font-bold text-foreground">
                Issued {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
