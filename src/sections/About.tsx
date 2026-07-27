import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Layers, Award, Heart, ArrowRight } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Count up animations
  const expCount = useCountUp(4, 1500, isInView);
  const projCount = useCountUp(10, 1500, isInView);
  const compCount = useCountUp(4, 1500, isInView);
  const satCount = useCountUp(100, 1500, isInView);

  const stats = [
    {
      label: 'Years Experience',
      value: `${expCount}+`,
      icon: Briefcase,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      label: 'Projects Completed',
      value: `${projCount}+`,
      icon: Layers,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      label: 'Companies Worked',
      value: `${compCount}+`,
      icon: Award,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      label: 'Client Satisfaction',
      value: `${satCount}%`,
      icon: Heart,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
  ];

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

  return (
    <section id="about" className="py-20 bg-slate-50/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Glassmorphic Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(99,102,241,0.02)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Biography */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary">
                  <Briefcase size={16} />
                </div>
                <h2 className="font-display font-bold text-xl text-slate-800">About Me</h2>
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900 mb-6 leading-snug">
                MERN Stack Developer & Frontend Architect
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Frontend Developer with 4+ years of professional experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and Node.js.
                </p>
                <p>
                  I specialize in structuring clean component architectures, implementing robust state management systems (Zustand, Redux, React Query), and building responsive enterprise dashboards.
                </p>
                <p>
                  Passionate about writing clean, modular, and maintainable code, optimization, and collaborating in Agile teams to deliver user-centric products.
                </p>
              </div>

              <button
                onClick={() => handleScrollToSection('contact')}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-[0_4px_12px_rgba(15,23,42,0.15)] flex items-center gap-2 group cursor-pointer"
              >
                More About Me
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Right Column: Statistics Grid */}
            <div className="lg:col-span-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(99,102,241,0.02)] hover:border-slate-200/80 transition-all flex flex-col justify-between items-start group"
                    >
                      <div className="flex justify-between items-center w-full mb-6">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.color}`}>
                          <Icon size={18} />
                        </div>
                        <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800">
                          {stat.value}
                        </span>
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-extrabold text-slate-800 block select-none">
                          {stat.label}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold mt-1 block select-none">
                          Verified Achievements
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
