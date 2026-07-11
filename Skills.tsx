import React from 'react';
import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    color: "bg-purple-100 text-purple-600",
    barColor: "bg-primary",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
    ]
  },
  {
    title: "Web Development",
    color: "bg-amber-100 text-amber-600",
    barColor: "bg-secondary",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "Responsive Design", level: 85 },
      { name: "React", level: 75 },
    ]
  },
  {
    title: "Database & Tools",
    color: "bg-blue-100 text-blue-600",
    barColor: "bg-blue-500",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Git / GitHub", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Figma", level: 70 },
    ]
  },
  {
    title: "Computer Science",
    color: "bg-green-100 text-green-600",
    barColor: "bg-green-500",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "OOP", level: 78 },
      { name: "Data Structures", level: 72 },
      { name: "DBMS", level: 70 },
    ]
  }
];

const SOFT_SKILLS = [
  "Communication", "Teamwork", "Adaptability", "Continuous Learning", "Time Management", "Attention to Detail"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="section-label">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Abilities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-shadow p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${category.color}`}>
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-sm font-bold text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: j * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full ${category.barColor}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SOFT_SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-white shadow-sm border border-gray-100 font-semibold text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
