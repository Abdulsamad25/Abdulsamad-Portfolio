import React from 'react';
import { Navigation } from './portfolio/Navigation';
import { Hero } from './portfolio/Hero';
import { About } from './portfolio/About';
import { Experience } from './portfolio/Experience';
import { TechStack } from './portfolio/TechStack';
import { FeaturedProjects } from './portfolio/FeaturedProjects';
import { AllProjects } from './portfolio/AllProjects';
import { Testimonials } from './portfolio/Testimonials';
import { Contact } from './portfolio/Contact';
import { Footer } from './portfolio/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <FeaturedProjects />
      <AllProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
