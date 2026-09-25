import { ArrowRight, MapPin, Phone, Mail, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import profileImg from '../assets/images/profile.png';

export const Hero: React.FC = () => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Framer Motion staggered animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50/50"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-80" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/50 text-xs font-semibold text-emerald-700 mb-6 shadow-sm shadow-emerald-500/5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
            Open to Work
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-4 leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="text-gradient-indigo font-extrabold">{resumeData.name}</span>
          </motion.h1>

          {/* Role subtitle with Left border indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center border-l-4 border-primary pl-4 py-1 mb-6"
          >
            <h2 className="text-lg sm:text-xl font-display font-semibold text-slate-800 tracking-wide">
              {resumeData.title}
            </h2>
          </motion.div>

          {/* Brief Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-medium"
          >
            React Developer with 5 years of experience building scalable, high-performance web applications using MongoDB, Express.js, React.js, Node.js, Next.js, TypeScript, and JavaScript (ES6+). Passionate about writing clean, maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-8 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSection('contact')}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-[0_4px_14px_rgba(99,102,241,0.25)] flex items-center gap-2 group cursor-pointer"
            >
              Let's Connect
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollToSection('projects')}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              View My Work
            </button>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-slate-200/80 w-full"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              <MapPin size={14} className="text-slate-400" />
              <span>{resumeData.location}</span>
            </div>
            <a
              href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Phone size={14} className="text-slate-400" />
              <span>{resumeData.phone}</span>
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Mail size={14} className="text-slate-400" />
              <span>{resumeData.email}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image Layout */}
        <div className="lg:col-span-5 flex items-center justify-center w-full relative py-8 lg:py-0">
          {/* Profile Circle Backing and Glows */}
          <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/15 blur-lg pointer-events-none" />
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full bg-white border border-slate-200/50 shadow-[0_10px_40px_rgba(99,102,241,0.05)] pointer-events-none" />

          {/* Profile Photo Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden p-1.5 border border-slate-200 bg-white shadow-xl group"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                src={profileImg}
                alt="Nirmal Raj P Profile Photo"
                className="w-full h-full object-cover object-[center_20%] scale-102 group-hover:scale-105 transition-all duration-700"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-60 pointer-events-none" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 sm:right-5 glass-card p-3 rounded-2xl border border-slate-200 bg-white/95 shadow-lg flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary">
                <Star size={16} fill="currentColor" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-slate-800 leading-none">5 Years</span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wide mt-1">Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
