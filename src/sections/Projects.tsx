import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Info } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Projects: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const getProjectCategory = (title: string) => {
    switch (title) {
      case 'PASS Admin Panel':
        return { label: 'Enterprise SaaS', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' };
      case 'Quattro':
        return { label: 'Analytics Dashboard', color: 'bg-cyan-50 text-cyan-700 border-cyan-100' };
      case 'Horizon React Component Library':
        return { label: 'UI Package System', color: 'bg-violet-50 text-violet-700 border-violet-100' };
      case 'Kreon Financial Service':
        return { label: 'Fintech Portal', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
      case 'Neoswap Token Bridge':
        return { label: 'Web3 Crypto Bridge', color: 'bg-rose-50 text-rose-700 border-rose-100' };
      default:
        return { label: 'Production App', color: 'bg-slate-50 text-slate-700 border-slate-200' };
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Showcase
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
          <p className="text-slate-500 text-sm mt-4 font-semibold max-w-md">
            A few of the websites I've designed and built over the years.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {resumeData.projects.map((project, index) => {
            const status = getProjectCategory(project.title);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex"
              >
                <div className="bg-white border border-slate-200/60 rounded-3xl p-5 hover:border-primary/20 hover:shadow-[0_15px_30px_rgba(99,102,241,0.04)] transition-all duration-300 flex flex-col justify-between w-full group">

                  <div className="space-y-5 text-left">
                    {/* Mockup Preview */}
                    {/* {renderProjectMockup(project.title)} */}

                    {/* Headers */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          {project.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mt-1 leading-snug group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold border uppercase tracking-wide shrink-0 ${status.color}`}>
                        {status.label}
                      </span>
                    </div>

                    {/* Solution Overview */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {project.solution}
                    </p>

                    {/* Contributions */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono">
                        <Info size={11} className="text-primary" />
                        Key Contributions
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs leading-relaxed font-medium">
                        {project.keyContributions.map((contrib, i) => (
                          <li key={i}>{contrib}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-lg text-[9px] font-bold font-mono border bg-slate-50 border-slate-200/60 text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Source Code Link */}
                  {/* <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-start">
                    <a
                      href="https://github.com/rajnirmal1622"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-900 hover:text-primary tracking-wide uppercase transition-colors"
                    >
                      <Code size={12} />
                      View Code / Details
                    </a>
                  </div> */}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
