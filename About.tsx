import React from 'react';
import { motion } from 'framer-motion';
import { User2, Target, Code, Cpu } from 'lucide-react';
import profileImg from '@assets/profile.jpg';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      {/* Background Decorative Dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 md:w-[400px] md:h-[450px]">
              {/* Decorative shapes behind image */}
              <div className="absolute top-4 -right-4 w-full h-full border-4 border-secondary rounded-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white z-10 transform transition-transform hover:-rotate-1 duration-500">
                <img src={profileImg} alt="Lavi Shriram Datar" className="w-full h-full object-cover object-top" />
              </div>

              {/* Stats Badge */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Technologies<br/>Learned</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="section-label">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                A Passionate Developer Based In <span className="text-primary">India</span>
              </h2>
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a <strong className="text-foreground">B.Sc. Computer Science graduate</strong> passionate about building
                modern, responsive, and user-friendly web applications.
              </p>
              <p>
                I enjoy solving real-world problems through clean code and continuously expanding my skills in software
                development — from academic foundations at Art and Science College, Warwat Bakal, Maharashtra, to hands-on
                project experience and an internship at CodSoft.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {[
                { icon: Code, title: "Web Dev", desc: "React, Node, HTML/CSS", color: "bg-purple-100 text-purple-600" },
                { icon: Cpu, title: "Software", desc: "Python, Java, C++", color: "bg-amber-100 text-amber-600" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color} shrink-0`}>
                    <item.icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a href="#projects" className="btn-primary inline-flex w-max">
                View My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
