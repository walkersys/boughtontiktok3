import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] overflow-hidden">
      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master TikTok.<br />Grow Your Brand.
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Unlock advanced strategies for content creators, sellers, and affiliates to dominate TikTok's platform.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center px-8 py-4 bg-white text-[#fe2c55] rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Animated shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
      </div>
    </section>
  );
};

export default Hero;