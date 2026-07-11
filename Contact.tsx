import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="section-label">Contact Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Work Together</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question, a project proposal, or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:lavidatar@gmail.com" className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <p className="text-lg font-bold text-foreground">lavidatar@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div className="flex-1 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Phone &amp; WhatsApp</p>
                    <p className="text-lg font-bold text-foreground">+91 9518303985</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+919518303985" aria-label="Call" className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                      <Phone size={18} />
                    </a>
                    <a href="https://wa.me/919518303985" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-bold text-foreground">Warwat Bakal, Maharashtra, India</p>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/lavidatar", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/lavidatar", label: "GitHub" },
                  { icon: Instagram, href: "https://instagram.com/mr_laviiii", label: "Instagram" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-100">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="h-full bg-gray-50 border border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-6 shadow-sm">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-foreground hover:border-primary hover:text-primary transition-colors shadow-sm">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white card-shadow rounded-3xl p-8 md:p-10 flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-foreground">Full Name</label>
                    <input id="contact-name" required type="text" className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground font-medium" placeholder="Lavi Datar" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-foreground">Email Address</label>
                    <input id="contact-email" required type="email" className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground font-medium" placeholder="lavi@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-subject" className="text-sm font-bold text-foreground">Subject</label>
                  <input id="contact-subject" required type="text" className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground font-medium" placeholder="Project Inquiry" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-foreground">Message</label>
                  <textarea id="contact-message" required rows={5} className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground font-medium resize-none" placeholder="Hello Lavi, I would like to discuss..." />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/30 hover:-translate-y-1">
                  <Send size={20} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
