import React from 'react';
import { resumeData } from '../data/resumeData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-50 py-10 border-t border-slate-200/50 z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
        {/* Left Side: Copyright */}
        <div>
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </div>

        {/* Right Side: Credits */}
        <div className="flex items-center gap-1">
          Designed & Developed with <span className="text-rose-500 animate-pulse">❤️</span> by {resumeData.name}
        </div>
      </div>
    </footer>
  );
};
