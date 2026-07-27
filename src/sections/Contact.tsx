import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage('Please fill out all required fields.');
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('loading');

    // Simulate sending email
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', { name, email, subject, message });
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Card Wrapper (Dark theme to contrast the light page, matching Jayesh's mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(99,102,241,0.15)] border border-slate-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct info */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Let's Work Together
              </h2>
              <p className="text-indigo-200 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                I'm always open to new opportunities, contract work, or discussing interesting project collaborations. Feel free to reach out!
              </p>

              {/* Direct Details */}
              <div className="space-y-4 mb-8 w-full">
                <a
                  href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold font-mono text-indigo-300 uppercase tracking-wide leading-none">Phone</span>
                    <span className="text-sm font-bold text-white mt-1 group-hover:text-indigo-200 transition-colors">{resumeData.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold font-mono text-indigo-300 uppercase tracking-wide leading-none">Email</span>
                    <span className="text-sm font-bold text-white mt-1 group-hover:text-indigo-200 transition-colors">{resumeData.email}</span>
                  </div>
                </a>

                <div
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold font-mono text-indigo-300 uppercase tracking-wide leading-none">Location</span>
                    <span className="text-sm font-bold text-white mt-1">{resumeData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono">
                  Connect with me
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/rajnirmal1622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nirmal-raj-p-110534198/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 w-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Form feedback */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3 text-xs font-semibold">
                    <CheckCircle2 size={16} />
                    <span>Message sent! I will respond as soon as possible.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center gap-3 text-xs font-semibold">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase text-indigo-200">
                      Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-white text-xs outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase text-indigo-200">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-white text-xs outline-none transition-all"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] font-mono font-bold uppercase text-indigo-200">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-white text-xs outline-none transition-all"
                    placeholder="Topic of conversation"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase text-indigo-200">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-white text-xs outline-none transition-all resize-none"
                    placeholder="Tell me about your project, role, or ideas..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 rounded-xl text-xs font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-[0_4px_14px_rgba(99,102,241,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitStatus === 'loading' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send size={12} />
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
