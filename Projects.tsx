import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const PROJECTS = [
  {
    title: "Student Management System",
    desc: "A comprehensive desktop application for managing student records with full CRUD functionality. Features intuitive GUI, strict input validation, and robust database management.",
    tech: ["Python", "Tkinter", "MySQL"],
    link: "#",
    github: "#",
    color: "bg-primary"
  },
  {
    title: "Premium Personal Portfolio",
    desc: "A highly interactive, responsive portfolio website with smooth scroll navigation, modern UI elements, and a clean aesthetic designed to showcase skills and experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
    color: "bg-secondary"
  },
  {
    title: "To-Do List Web Application",
    desc: "A responsive task management application featuring add/edit/delete capabilities, persistent local storage, and a clean, accessible layout for everyday productivity.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
    github: "#",
    color: "bg-blue-500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="section-label">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-shadow rounded-3xl overflow-hidden flex flex-col h-full group"
            >
              {/* Colored Top Border */}
              <div className={`h-3 w-full ${project.color}`} />
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-gray-50 rounded-2xl text-primary">
                    <FolderGit2 size={32} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" title="GitHub Repository">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" title="Live Preview">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://github.com/lavidatar" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex w-max">
            View More on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
