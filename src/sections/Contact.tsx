import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { sendEmail } from '../services/emailService';

// Strictly typed validation errors interface
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // Form Field States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Validation & Submission States
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Automatically dismiss toast notification after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Client-side Trim and Validate function
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    // Name Validation (Min 3 characters)
    if (!trimmedName) {
      tempErrors.name = 'Full Name is required.';
    } else if (trimmedName.length < 3) {
      tempErrors.name = 'Name must be at least 3 characters.';
    }

    // Email Validation (Valid structure check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      tempErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    // Phone Validation (Optional, checks format if supplied)
    if (trimmedPhone && !/^\+?[0-9\s-]{6,20}$/.test(trimmedPhone)) {
      tempErrors.phone = 'Please enter a valid phone number (digits/spaces only).';
    }

    // Subject Validation (Min 5 characters)
    if (!trimmedSubject) {
      tempErrors.subject = 'Subject is required.';
    } else if (trimmedSubject.length < 3) {
      tempErrors.subject = 'Subject must be at least 3 characters.';
    }

    // Message Validation (Min 20 characters)
    if (!trimmedMessage) {
      tempErrors.message = 'Message body is required.';
    } else if (trimmedMessage.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions if already loading
    if (submitStatus === 'loading') return;

    // Validate inputs
    if (!validateForm()) {
      setErrorMessage('Please fix the validation errors below.');
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const timeString = new Date().toLocaleString();

      // Dispatch parameters to EmailJS service
      await sendEmail({
        from_name: name.trim(),
        from_email: email.trim(),
        phone: phone.trim(),
        subject: subject.trim(),
        message: message.trim(),
        reply_to: email.trim(),
        time: timeString,
      });

      setSubmitStatus('success');

      // Reset inputs
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setErrors({});

      // Scroll smoothly to top of contact section
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = contactSec.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } catch (err: unknown) {
      console.error('Email transmission failed:', err);
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('A network transmission error occurred. Please try again.');
      }
      setSubmitStatus('error');
    }
  };

  // Framer Motion Animation configs
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const inputItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as any },
    },
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Dynamic Toast Feedback Banner */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md border ${submitStatus === 'success'
                ? 'bg-slate-900/95 border-emerald-500/30 text-emerald-400'
                : 'bg-slate-900/95 border-rose-500/30 text-rose-400'
                }`}
            >
              {submitStatus === 'success' ? (
                <CheckCircle2 size={20} className="shrink-0" />
              ) : (
                <AlertCircle size={20} className="shrink-0" />
              )}
              <div className="text-left">
                <span className="text-xs font-bold block text-white select-none">
                  {submitStatus === 'success' ? 'Message Sent Successfully' : 'Message Send Failed'}
                </span>
                <span className="text-[10px] text-slate-300 block mt-0.5 max-w-[280px]">
                  {submitStatus === 'success'
                    ? 'Thank you for reaching out! Your message was received.'
                    : errorMessage}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Solid Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(99,102,241,0.15)] border border-slate-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Direct Info Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Let's Work Together
              </h2>
              <p className="text-indigo-200 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                I'm always open to new opportunities, contract work, or discussing interesting project collaborations. Feel free to reach out!
              </p>

              {/* Contact Icons List */}
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

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold font-mono text-indigo-300 uppercase tracking-wide leading-none">Location</span>
                    <span className="text-sm font-bold text-white mt-1">{resumeData.location}</span>
                  </div>
                </div>
              </div>

              {/* Profiles */}
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
                    aria-label="GitHub Profile"
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
                    aria-label="LinkedIn Profile"
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

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 w-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-6 sm:p-8">
              <motion.form
                variants={formContainerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                onSubmit={handleSubmit}
                className="space-y-5 text-left"
                noValidate
              >
                {/* General Submission Alerts */}
                {submitStatus === 'error' && !Object.keys(errors).length && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center gap-3 text-xs font-semibold">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <motion.div variants={inputItemVariants} className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase text-indigo-200 flex items-center justify-between">
                      <span>Full Name *</span>
                      {errors.name && <span className="text-rose-400 font-bold text-[9px] lowercase tracking-wide font-sans">{errors.name}</span>}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      disabled={submitStatus === 'loading'}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                      }}
                      className={`px-4 py-3 rounded-xl bg-slate-800/50 border text-white text-xs outline-none transition-all focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-400'
                        }`}
                      placeholder="Your full name"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={inputItemVariants} className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase text-indigo-200 flex items-center justify-between">
                      <span>Email Address *</span>
                      {errors.email && <span className="text-rose-400 font-bold text-[9px] lowercase tracking-wide font-sans">{errors.email}</span>}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      disabled={submitStatus === 'loading'}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                      }}
                      className={`px-4 py-3 rounded-xl bg-slate-800/50 border text-white text-xs outline-none transition-all focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-400'
                        }`}
                      placeholder="your.email@domain.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Input */}
                  <motion.div variants={inputItemVariants} className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] font-mono font-bold uppercase text-indigo-200 flex items-center justify-between">
                      <span>Phone Number</span>
                      {errors.phone && <span className="text-rose-400 font-bold text-[9px] lowercase tracking-wide font-sans">{errors.phone}</span>}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      disabled={submitStatus === 'loading'}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                      }}
                      className={`px-4 py-3 rounded-xl bg-slate-800/50 border text-white text-xs outline-none transition-all focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-400'
                        }`}
                      placeholder="+91 XXXXX XXXXX (optional)"
                    />
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div variants={inputItemVariants} className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[10px] font-mono font-bold uppercase text-indigo-200 flex items-center justify-between">
                      <span>Subject *</span>
                      {errors.subject && <span className="text-rose-400 font-bold text-[9px] lowercase tracking-wide font-sans">{errors.subject}</span>}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      disabled={submitStatus === 'loading'}
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors(prev => ({ ...prev, subject: undefined }));
                      }}
                      className={`px-4 py-3 rounded-xl bg-slate-800/50 border text-white text-xs outline-none transition-all focus:ring-2 focus:ring-primary/20 ${errors.subject ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-400'
                        }`}
                      placeholder="Topic of discussion"
                    />
                  </motion.div>
                </div>

                {/* Message Textarea */}
                <motion.div variants={inputItemVariants} className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase text-indigo-200 flex items-center justify-between">
                    <span>Message *</span>
                    {errors.message && <span className="text-rose-400 font-bold text-[9px] lowercase tracking-wide font-sans">{errors.message}</span>}
                  </label>
                  <textarea
                    id="message"
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    disabled={submitStatus === 'loading'}
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                    }}
                    className={`px-4 py-3 rounded-xl bg-slate-800/50 border text-white text-xs outline-none transition-all focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700 focus:border-indigo-400'
                      }`}
                    placeholder="Tell me about your project or career opportunity (minimum 20 characters)..."
                  />
                </motion.div>

                {/* Submit button */}
                <motion.button
                  variants={inputItemVariants}
                  whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.01 }}
                  whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.99 }}
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 rounded-xl text-xs font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-[0_4px_14px_rgba(99,102,241,0.3)] disabled:opacity-75 flex items-center justify-center gap-2.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader2 size={14} className="animate-spin text-white" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={12} className="text-white" />
                    </>
                  )}
                </motion.button>

              </motion.form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
