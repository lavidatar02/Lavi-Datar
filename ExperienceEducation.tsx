import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export function ExperienceEducation() {
  return (
    <section className="py-24 relative bg-gray-50/50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="section-label">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Education & Experience</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div id="education">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-4 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-sm" />
                
                <div className="card-shadow p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:w-full transition-all duration-300 opacity-10" />
                  
                  <div className="flex flex-wrap gap-3 items-center justify-between mb-2">
                    <span className="px-4 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">2023 – 2026</span>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2 mt-4">B.Sc. in Computer Science</h4>
                  <h5 className="text-lg text-muted-foreground mb-6">Art and Science College, Warwat Bakal</h5>
                  
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="bg-gray-100 text-foreground px-4 py-2 rounded-lg">Result: First Class</span>
                    <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-lg">CGPA: 6.45/10</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-amber-600">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-4 w-5 h-5 rounded-full bg-white border-4 border-secondary shadow-sm" />
                
                <div className="card-shadow p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary group-hover:w-full transition-all duration-300 opacity-10" />

                  <div className="flex flex-wrap gap-3 items-center justify-between mb-2">
                    <span className="px-4 py-1 bg-secondary/20 text-amber-700 text-sm font-bold rounded-full">June 2024 – July 2024</span>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2 mt-4">Web Development Intern</h4>
                  <h5 className="text-lg text-muted-foreground mb-6 font-medium">CodSoft</h5>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"/> Developed responsive websites</li>
                    <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"/> Built UI using HTML/CSS/JavaScript</li>
                    <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"/> Improved UI/UX and fixed front-end bugs</li>
                    <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"/> Collaborated with team members to deliver projects</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
