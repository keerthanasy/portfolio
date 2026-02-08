'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          DEV<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
          <Link href="#about" className="hover:text-[var(--text-main)] transition-colors">About</Link>
          <Link href="#skills" className="hover:text-[var(--text-main)] transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-[var(--text-main)] transition-colors">Work</Link>
          <Link href="#experience" className="hover:text-[var(--text-main)] transition-colors">Experience</Link>
          <Link href="#contact" className="btn" style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}>Let's Talk</Link>
        </div>
      </div>
    </nav>
  );
}
