import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { NotFoundPage, OfflinePage, LoadingSkeleton } from './components/ErrorPages';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simulate initial loading skeleton to optimize Cumulative Layout Shift (CLS)
    const loadTimer = setTimeout(() => setIsLoading(false), 500);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    // Listen for path changes
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Offline Fallback
  if (!isOnline) {
    return <OfflinePage />;
  }

  // Initial Loading Skeleton
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // Client-side Routing Fallback (for 404 Pages on direct URL access)
  const allowedPaths = ['/', '/resume', '/resume.pdf'];
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash if any
  const pathToCheck = cleanPath === '' ? '/' : cleanPath;

  if (!allowedPaths.includes(pathToCheck)) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Keyboard Accessibility: Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] px-5 py-3 rounded-xl bg-primary text-white font-bold shadow-xl border border-primary-light outline-none"
      >
        Skip to Content
      </a>

      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
