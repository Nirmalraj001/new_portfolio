import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Server, Cpu, Wrench, Shield, LayoutGrid, Award } from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  color: string; // Tailwind classes: bg, text, border
  icon?: React.ReactNode;
}

export const Skills: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Custom inline SVG icons for popular tech to match professional style
  const ReactIcon = () => (
    <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current">
      <path d="M50 38.6c-6.3 0-11.4 5.1-11.4 11.4s5.1 11.4 11.4 11.4 11.4-5.1 11.4-11.4-5.1-11.4-11.4-11.4zm0-34.1C24.3 4.5 3.5 25.3 3.5 50s20.8 45.5 46.5 45.5S96.5 74.7 96.5 50 75.7 4.5 50 4.5zm0 82.3c-20.3 0-36.8-16.5-36.8-36.8S29.7 13.2 50 13.2 86.8 29.7 86.8 50 70.3 86.8 50 86.8z" />
    </svg>
  );

  const TSIcon = () => (
    <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current font-bold">
      <text x="10" y="75" fontSize="65" fontFamily="monospace">TS</text>
    </svg>
  );

  const JSIcon = () => (
    <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current font-bold">
      <text x="10" y="75" fontSize="65" fontFamily="monospace">JS</text>
    </svg>
  );

  const NextIcon = () => (
    <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="10">
      <circle cx="50" cy="50" r="40" />
      <path d="M35 70V30l30 40V30" strokeWidth="8" />
    </svg>
  );

  const TailwindIcon = () => (
    <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current">
      <path d="M50 25c-10 0-16 5-18 15 6-3 11-2 15 3 3 4 2 8-3 13-6 6-12 12-12 21 0 10 7 18 18 18 10 0 16-5 18-15-6 3-11 2-15-3-3-4-2-8 3-13 6-6 12-12 12-21 0-10-7-18-18-18z" />
    </svg>
  );

  const skills: SkillItem[] = [
    // Frontend
    { name: 'React.js', category: 'Frontend', color: 'bg-sky-50 text-sky-600 border-sky-200/60', icon: <ReactIcon /> },
    { name: 'Next.js', category: 'Frontend', color: 'bg-slate-50 text-slate-800 border-slate-300', icon: <NextIcon /> },
    { name: 'TypeScript', category: 'Frontend', color: 'bg-blue-50 text-blue-600 border-blue-200/60', icon: <TSIcon /> },
    { name: 'JavaScript ES6+', category: 'Frontend', color: 'bg-amber-50 text-amber-700 border-amber-200/60', icon: <JSIcon /> },
    { name: 'Tailwind CSS', category: 'UI', color: 'bg-cyan-50 text-cyan-600 border-cyan-200/60', icon: <TailwindIcon /> },
    { name: 'HTML5', category: 'Frontend', color: 'bg-orange-50 text-orange-600 border-orange-200/60' },
    { name: 'CSS3', category: 'Frontend', color: 'bg-blue-50 text-blue-500 border-blue-200/60' },
    { name: 'SCSS', category: 'Frontend', color: 'bg-pink-50 text-pink-600 border-pink-200/60' },
    
    // Backend & Data
    { name: 'Node.js', category: 'Backend', color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60' },
    { name: 'Express.js', category: 'Backend', color: 'bg-gray-50 text-gray-700 border-gray-200/60' },
    { name: 'MongoDB', category: 'Backend', color: 'bg-green-50 text-green-700 border-green-200/60' },
    { name: 'GraphQL', category: 'Data', color: 'bg-pink-50 text-pink-500 border-pink-200/60' },
    
    // State & Data
    { name: 'TanStack React Query', category: 'Data', color: 'bg-rose-50 text-rose-600 border-rose-200/60' },
    { name: 'Redux Toolkit', category: 'Data', color: 'bg-purple-50 text-purple-600 border-purple-200/60' },
    { name: 'Zustand', category: 'Data', color: 'bg-indigo-50 text-indigo-500 border-indigo-200/60' },
    { name: 'Context API', category: 'Data', color: 'bg-slate-50 text-slate-500 border-slate-200/60' },
    { name: 'RESTful APIs', category: 'Data', color: 'bg-teal-50 text-teal-600 border-teal-200/60' },
    { name: 'Axios', category: 'Data', color: 'bg-indigo-50 text-indigo-400 border-indigo-200/60' },

    // Next.js features
    { name: 'App Router', category: 'Next.js', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Server Components', category: 'Next.js', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Client Components', category: 'Next.js', color: 'bg-slate-100 text-slate-800 border-slate-200' },

    // UI Systems
    { name: 'Material UI', category: 'UI', color: 'bg-blue-50 text-blue-600 border-blue-200/60' },
    { name: 'shadcn/ui', category: 'UI', color: 'bg-zinc-50 text-zinc-800 border-zinc-300' },
    { name: 'Mantine UI', category: 'UI', color: 'bg-cyan-50 text-cyan-500 border-cyan-200/60' },
    { name: 'Storybook', category: 'UI', color: 'bg-rose-50 text-rose-500 border-rose-200/60' },

    // Architecture & Testing
    { name: 'Component Architecture', category: 'Architecture', color: 'bg-indigo-50 text-indigo-600 border-indigo-200/60' },
    { name: 'Lazy Loading', category: 'Architecture', color: 'bg-violet-50 text-violet-600 border-violet-200/60' },
    { name: 'Code Splitting', category: 'Architecture', color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200/60' },
    { name: 'Jest', category: 'Testing', color: 'bg-rose-50 text-rose-700 border-rose-200/60' },
    { name: 'React Testing Library', category: 'Testing', color: 'bg-red-50 text-red-600 border-red-200/60' },
    { name: 'Cypress', category: 'Testing', color: 'bg-emerald-50 text-emerald-700 border-emerald-200/60' },

    // Tools
    { name: 'Git', category: 'Tools', color: 'bg-orange-50 text-orange-600 border-orange-200/60' },
    { name: 'GitHub', category: 'Tools', color: 'bg-slate-50 text-slate-800 border-slate-300' },
    { name: 'GitLab', category: 'Tools', color: 'bg-orange-50 text-orange-500 border-orange-200/60' },
    { name: 'Docker', category: 'Tools', color: 'bg-blue-50 text-blue-500 border-blue-200/60' },
    { name: 'Webpack', category: 'Tools', color: 'bg-sky-50 text-sky-700 border-sky-200/60' },
    { name: 'npm', category: 'Tools', color: 'bg-red-50 text-red-500 border-red-200/60' },
    { name: 'Yarn', category: 'Tools', color: 'bg-blue-50 text-blue-500 border-blue-200/60' },
    { name: 'Agile', category: 'Tools', color: 'bg-violet-50 text-violet-500 border-violet-200/60' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Code size={14} />;
      case 'Backend': return <Server size={14} />;
      case 'Data': return <Cpu size={14} />;
      case 'Next.js': return <LayoutGrid size={14} />;
      case 'UI': return <Award size={14} />;
      case 'Testing': return <Shield size={14} />;
      default: return <Wrench size={14} />;
    }
  };

  // Group skills by category to organize them nicely or display as flat
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Skillset
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Skills & Tools
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
        </div>

        {/* Dynamic flex wrap of pills, matching Jayesh's screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ y: -2, scale: 1.02 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border shadow-sm transition-all duration-300 cursor-default ${skill.color}`}
            >
              {skill.icon ? (
                skill.icon
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
              )}
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Small legend for categories */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-[10px] text-slate-400 font-semibold tracking-wider uppercase border-t border-slate-100 pt-8 max-w-xl mx-auto">
          {categories.map(cat => (
            <div key={cat} className="flex items-center gap-1.5">
              <span className="text-slate-300">{getCategoryIcon(cat)}</span>
              <span>{cat}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
