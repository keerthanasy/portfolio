'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter z-50 relative" onClick={() => setIsOpen(false)}>
          DEV<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
          <Link href="#about" className="hover:text-[var(--text-main)] transition-colors">About</Link>
          <Link href="#skills" className="hover:text-[var(--text-main)] transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-[var(--text-main)] transition-colors">Work</Link>
          <Link href="#experience" className="hover:text-[var(--text-main)] transition-colors">Experience</Link>
          <Link href="#contact" className="btn" style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}>Let's Talk</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative text-[var(--text-main)] p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-medium md:hidden"
              style={{ paddingTop: '80px' }}
            >
              <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors text-2xl">About</Link>
              <Link href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors text-2xl">Skills</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors text-2xl">Work</Link>
              <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors text-2xl">Experience</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="btn px-8 py-3 text-lg mt-4">Let's Talk</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
