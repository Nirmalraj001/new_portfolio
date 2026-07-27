import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circle Icon Badge */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-display font-bold text-base shadow-sm shadow-primary/20 transition-transform duration-300 hover:scale-105">
        NR
      </div>

      {/* Text Branding */}
      <div className="flex flex-col text-left">
        <span className="font-display font-bold text-base tracking-tight text-slate-900 leading-none">
          Nirmal Raj P
        </span>
        {showSubtitle && (
          <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-1 leading-none">
            MERN Stack Developer
          </span>
        )}
      </div>
    </div>
  );
};
