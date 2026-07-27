import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Database, Compass, Radio, Gauge } from 'lucide-react';

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  color: string; // Tailwind bg for icon container
}

export const Services: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const services: ServiceItem[] = [
    {
      title: 'Frontend Development',
      desc: 'Building responsive, pixel-perfect, accessible single-page and server-rendered web applications using React.js, Next.js, and TypeScript.',
      icon: Layers,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'MERN Stack Development',
      desc: 'Architecting secure and scalable full-stack web applications with Node.js, Express.js, MongoDB, and React following RESTful API patterns.',
      icon: Database,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Component Development',
      desc: 'Creating reusable, highly modular React component libraries utilizing TypeScript, Mantine UI, SCSS, and Tailwind, documented via Storybook.',
      icon: Compass,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      title: 'API Integration',
      desc: 'Connecting RESTful endpoints and managing complex server-state caching, invalidation, and data fetching using TanStack React Query.',
      icon: Radio,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Performance & Optimization',
      desc: 'Enhancing application runtime speeds using code splitting, memoization, tree-shaking, caching, and asset lazy loading strategies.',
      icon: Gauge,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Services
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            What I Do
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 text-left shadow-[0_4px_25px_rgba(99,102,241,0.01)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.06)] hover:border-primary/20 transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm ${service.color}`}>
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase select-none mt-2">
                  Professional Delivery
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
