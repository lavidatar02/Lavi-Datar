import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ExperienceEducation } from '../components/ExperienceEducation';
import { Skills } from '../components/Skills';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

function Home() {
  return (
    <div className="w-full bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExperienceEducation />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
