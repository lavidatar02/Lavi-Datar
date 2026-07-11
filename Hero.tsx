import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Send, Download } from 'lucide-react';
import profileImg from '@assets/profile.jpg';

// Decorative SVG Doodles
const StarDoodle = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" fill="currentColor"/>
  </svg>
);

const WavyLineDoodle = ({ className }: { className?: string }) => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 10C8.66667 3.33333 16 3.33333 20 10C24 16.6667 31.3333 16.6667 38 10C44.6667 3.33333 52 3.33333 58 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const DotsDoodle = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="5" cy="5" r="3" fill="currentColor"/>
    <circle cx="20" cy="5" r="3" fill="currentColor"/>
    <circle cx="35" cy="5" r="3" fill="currentColor"/>
    <circle cx="5" cy="20" r="3" fill="currentColor"/>
    <circle cx="20" cy="20" r="3" fill="currentColor"/>
    <circle cx="35" cy="20" r="3" fill="currentColor"/>
    <circle cx="5" cy="35" r="3" fill="currentColor"/>
    <circle cx="20" cy="35" r="3" fill="currentColor"/>
    <circle cx="35" cy="35" r="3" fill="currentColor"/>
  </svg>
);

export function Hero() {
  const [text, setText] = useState('');
  const fullText = "B.Sc. Computer Science Graduate passionate about building modern, responsive, and user-friendly web applications.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden hero-gradient">
      {/* Doodle Decorations */}
      <StarDoodle className="absolute top-32 left-10 text-secondary opacity-80 doodle-pulse" />
      <StarDoodle className="absolute bottom-32 right-1/2 text-white/30 w-6 h-6 doodle-float" />
      <WavyLineDoodle className="absolute top-1/3 right-12 text-secondary opacity-60 doodle-float" />
      <DotsDoodle className="absolute bottom-20 left-24 text-white/40 doodle-float" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-secondary font-semibold w-max backdrop-blur-sm">
            <span className="text-[20px] tracking-widest uppercase">Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="text-white">Lavi Datar</span>
          </h1>
          
          <div className="min-h-[3rem] md:min-h-[3.5rem] mb-8">
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-xl leading-snug">
              {text}
              <span className="animate-pulse text-secondary">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Hire Me <Send size={18} />
            </a>
            <a
              href="mailto:lavidatar@gmail.com?subject=Resume Request"
              className="btn-outline"
            >
              Resume <Download size={18} />
            </a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[450px] h-[450px]">
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-secondary/20 rounded-full translate-x-4 translate-y-4 blur-sm" />
            
            {/* Animated rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border-2 border-dashed border-secondary/50"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-white/30"
            />
            
            {/* Avatar Center */}
            <div className="absolute inset-0 rounded-full bg-white border-[8px] border-secondary flex items-center justify-center shadow-2xl overflow-hidden z-10">
              <img src={profileImg} alt="Lavi Shriram Datar" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Floating badge */}
            <motion.div 
              className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Web Developer</p>
                <p className="text-xs text-muted-foreground">Frontend Focus</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,152.47,143.62,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
