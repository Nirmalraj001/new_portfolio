import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, FileX, RefreshCw, WifiOff } from 'lucide-react';

// 404 Page Component
export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary mb-6 shadow-sm">
          <FileX size={32} />
        </div>
        <h1 className="font-display font-extrabold text-3xl text-slate-900 mb-2">404</h1>
        <h2 className="font-display font-bold text-lg text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved. Check the URL or return to the main portfolio.
        </p>
        <a
          href="/"
          className="px-6 py-3 rounded-xl text-xs font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-[0_4px_14px_rgba(99,102,241,0.25)] flex items-center gap-2"
        >
          Return Home
        </a>
      </motion.div>
    </div>
  );
};

// 500 Server Error Page Component
export const ServerErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mb-6 shadow-sm">
          <AlertCircle size={32} />
        </div>
        <h1 className="font-display font-extrabold text-3xl text-slate-900 mb-2">500</h1>
        <h2 className="font-display font-bold text-lg text-slate-800 mb-4">Server Error</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          Something went wrong on our server. We are working on fixing it. Please try reloading the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md flex items-center gap-2"
        >
          <RefreshCw size={14} />
          Reload Page
        </button>
      </motion.div>
    </div>
  );
};

// Offline Status Page Component
export const OfflinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
          <WifiOff size={32} />
        </div>
        <h2 className="font-display font-bold text-lg text-slate-800 mb-4">You are Offline</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          It looks like you've lost your internet connection. Please check your network cables, router, and wifi connection.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-xl text-xs font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-md flex items-center gap-2"
        >
          <RefreshCw size={14} />
          Try Reconnecting
        </button>
      </motion.div>
    </div>
  );
};

// Loading Skeleton Component to avoid CLS (Cumulative Layout Shift)
export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 space-y-6">
      {/* Header skeleton */}
      <div className="w-full max-w-7xl h-14 bg-white border border-slate-200/60 rounded-2xl flex items-center justify-between px-6 animate-pulse">
        <div className="h-6 w-24 bg-slate-200 rounded" />
        <div className="h-6 w-80 bg-slate-200 rounded hidden md:block" />
        <div className="h-8 w-24 bg-slate-200 rounded" />
      </div>

      {/* Hero skeleton */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 text-left animate-pulse">
          <div className="h-4 w-28 bg-slate-200 rounded-full" />
          <div className="h-12 w-80 bg-slate-200 rounded" />
          <div className="h-6 w-60 bg-slate-200 rounded" />
          <div className="h-4 w-full max-w-md bg-slate-200 rounded" />
          <div className="h-4 w-full max-w-sm bg-slate-200 rounded" />
          <div className="flex gap-4 pt-4">
            <div className="h-10 w-32 bg-slate-200 rounded-xl" />
            <div className="h-10 w-28 bg-slate-200 rounded-xl" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center animate-pulse">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-slate-200 rounded-3xl" />
        </div>
      </div>
    </div>
  );
};
