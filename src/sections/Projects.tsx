import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  Building2,
  BarChart3,
  Palette,
  ShieldCheck,
  Coins,
  Sparkles,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { cn } from '../utils/cn';

interface ProjectTheme {
  category: string;
  gradientBar: string;
  glowHover: string;
  borderHover: string;
  accentBadge: string;
  techBadge: string;
  buttonGradient: string;
  buttonShadow: string;
  bgTint: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

const getProjectTheme = (title: string): ProjectTheme => {
  switch (title) {
    case 'PASS Admin Panel':
      return {
        category: 'Enterprise SaaS',
        gradientBar: 'from-indigo-500 via-indigo-600 to-blue-600',
        glowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.18)]',
        borderHover: 'hover:border-indigo-300/80',
        accentBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
        techBadge: 'bg-indigo-50/70 text-indigo-700 border-indigo-200/50 hover:bg-indigo-100/70',
        buttonGradient: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        buttonShadow: 'shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35',
        bgTint: 'from-indigo-500/[0.03] to-transparent',
        icon: Building2,
      };
    case 'Quattro':
      return {
        category: 'Analytics & BI',
        gradientBar: 'from-cyan-500 via-teal-500 to-sky-600',
        glowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.18)]',
        borderHover: 'hover:border-cyan-300/80',
        accentBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
        techBadge: 'bg-cyan-50/70 text-cyan-700 border-cyan-200/50 hover:bg-cyan-100/70',
        buttonGradient: 'bg-cyan-600 hover:bg-cyan-700 text-white',
        buttonShadow: 'shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/35',
        bgTint: 'from-cyan-500/[0.03] to-transparent',
        icon: BarChart3,
      };
    case 'Horizon React Component Library':
      return {
        category: 'Design System',
        gradientBar: 'from-violet-500 via-purple-600 to-fuchsia-600',
        glowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.18)]',
        borderHover: 'hover:border-violet-300/80',
        accentBadge: 'bg-violet-50 text-violet-700 border-violet-200/80',
        techBadge: 'bg-violet-50/70 text-violet-700 border-violet-200/50 hover:bg-violet-100/70',
        buttonGradient: 'bg-violet-600 hover:bg-violet-700 text-white',
        buttonShadow: 'shadow-md shadow-violet-600/20 hover:shadow-violet-600/35',
        bgTint: 'from-violet-500/[0.03] to-transparent',
        icon: Palette,
      };
    case 'Kreon Financial Service':
      return {
        category: 'Fintech Portal',
        gradientBar: 'from-emerald-500 via-teal-600 to-green-600',
        glowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.18)]',
        borderHover: 'hover:border-emerald-300/80',
        accentBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
        techBadge: 'bg-emerald-50/70 text-emerald-700 border-emerald-200/50 hover:bg-emerald-100/70',
        buttonGradient: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        buttonShadow: 'shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35',
        bgTint: 'from-emerald-500/[0.03] to-transparent',
        icon: ShieldCheck,
      };
    case 'Neoswap Token Bridge':
      return {
        category: 'Web3 & Crypto',
        gradientBar: 'from-amber-500 via-orange-500 to-rose-500',
        glowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.18)]',
        borderHover: 'hover:border-amber-300/80',
        accentBadge: 'bg-amber-50 text-amber-700 border-amber-200/80',
        techBadge: 'bg-amber-50/70 text-amber-700 border-amber-200/50 hover:bg-amber-100/70',
        buttonGradient: 'bg-amber-600 hover:bg-amber-700 text-white',
        buttonShadow: 'shadow-md shadow-amber-600/20 hover:shadow-amber-600/35',
        bgTint: 'from-amber-500/[0.03] to-transparent',
        icon: Coins,
      };
    default:
      return {
        category: 'Featured Project',
        gradientBar: 'from-primary to-accent',
        glowHover: 'hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.18)]',
        borderHover: 'hover:border-primary/50',
        accentBadge: 'bg-primary/10 text-primary border-primary/20',
        techBadge: 'bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100',
        buttonGradient: 'bg-primary hover:bg-primary-dark text-white',
        buttonShadow: 'shadow-md shadow-primary/20 hover:shadow-primary/35',
        bgTint: 'from-primary/[0.03] to-transparent',
        icon: Sparkles,
      };
  }
};

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-slate-50/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Showcase
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
          <p className="text-slate-500 text-sm mt-4 font-semibold max-w-md">
            Production-grade enterprise web applications and scalable platforms I've built.
          </p>
        </div>

        {/* Theme-Based Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {resumeData.projects.map((project, index) => {
            const theme = getProjectTheme(project.title);
            const CategoryIcon = theme.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex"
              >
                <div
                  className={cn(
                    "w-full bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group",
                    theme.borderHover,
                    theme.glowHover
                  )}
                >
                  {/* Top Themed Gradient Accent Bar */}
                  <div className={cn("h-1.5 w-full bg-gradient-to-r", theme.gradientBar)} />

                  {/* Card Main Body */}
                  <div
                    className={cn(
                      "p-7 flex flex-col justify-between flex-1 bg-gradient-to-b",
                      theme.bgTint
                    )}
                  >
                    <div>
                      {/* Top Header: Themed Category Badge */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border tracking-wide uppercase font-mono",
                            theme.accentBadge
                          )}
                        >
                          <CategoryIcon size={13} />
                          {theme.category}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-6 font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack & Live URL Container */}
                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={cn(
                              "px-2.5 py-1 rounded-lg text-[11px] font-semibold font-mono border transition-colors",
                              theme.techBadge
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Live URL Button - Conditionally Rendered */}
                      {project.liveUrl && (
                        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-start">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 group/btn cursor-pointer",
                              theme.buttonGradient,
                              theme.buttonShadow
                            )}
                          >
                            <span>Live URL</span>
                            <ExternalLink
                              size={14}
                              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
