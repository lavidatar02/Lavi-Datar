import React from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, Code2, Heart } from 'lucide-react';

const techStack = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/lavidatar', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/lavidatar', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/mr_laviiii', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/919518303985', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:lavidatar@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Column 1: Intro */}
          <div>
            <a href="#home" className="text-3xl font-bold tracking-tight mb-4 block">
              Lavi<span className="text-white">'s</span> Portfolio
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Building modern, responsive, and user-friendly digital experiences with clean code and modern technologies.
            </p>
          </div>

          {/* Column 2: Built With */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              Built With <Code2 size={20} className="text-primary" />
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-sm font-medium text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Source Code */}
          <div>
            <h4 className="text-lg font-bold mb-4">Source Code</h4>
            <a
              href="https://github.com/lavidatar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-start gap-3 text-gray-300 hover:text-primary transition-colors mb-6"
            >
              <span className="font-medium">View on GitHub</span>
              <Github size={20} />
            </a>
            <div className="flex gap-3 mt-14">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white hover:text-white hover:bg-primary hover:border-primary transition-all hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Lavi Datar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Lavi Datar
          </p>
          <div className="flex gap-5">
            {quickLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
