import { useRef, useState } from 'react';
import { Calendar, Briefcase, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { cn } from '../utils/cn';

export const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCompanyLogo = (company: string) => {
    const initials = company
      .split(' ')
      .map((word) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-display font-extrabold text-xs text-white shrink-0 select-none shadow-sm">
        {initials}
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            History
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
        </div>

        {/* Timeline track */}
        <div className="relative border-l-2 border-slate-100 pl-6 md:pl-10 ml-4 md:ml-6 space-y-8 text-left">
          
          {resumeData.experience.map((job, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={job.company + index}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div
                  className={cn(
                    "absolute -left-[35px] md:-left-[49px] top-2.5 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center shadow-md z-10 transition-all duration-300",
                    isExpanded
                      ? "border-primary bg-indigo-50 scale-110 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                      : "border-slate-300 bg-slate-100"
                  )}
                >
                  <Briefcase size={8} className={isExpanded ? "text-primary" : "text-slate-400"} />
                </div>

                {/* Job Card */}
                <div
                  onClick={() => toggleExpand(index)}
                  className={cn(
                    "bg-white border rounded-2xl p-6 shadow-[0_4px_20px_rgba(99,102,241,0.01)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.03)] hover:border-slate-300 transition-all duration-300 cursor-pointer select-none",
                    isExpanded ? "border-primary/20 bg-slate-50/20" : "border-slate-200"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {getCompanyLogo(job.company)}
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                          {job.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs mt-1 font-bold text-primary">
                          <span>{job.company}</span>
                          {job.client && (
                            <span className="text-slate-400 font-semibold">
                              (Client: {job.client})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Date and chevron */}
                    <div className="flex items-center gap-3 self-start sm:self-center">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] text-slate-500 font-bold font-mono">
                        <Calendar size={10} className="text-primary" />
                        {job.duration}
                      </div>
                      <div className="p-1 rounded-lg bg-slate-50 border border-slate-200/50 text-slate-400">
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </div>
                    </div>
                  </div>

                  {/* Accordion bullets */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mt-5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight size={14} className="text-primary shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100">
                    {job.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-lg text-[9px] font-bold font-mono border bg-slate-50 border-slate-200/60 text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
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
