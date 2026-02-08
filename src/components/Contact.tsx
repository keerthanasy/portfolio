'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section container text-center py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Start a project</h2>
                <p className="text-xl text-[var(--text-muted)] mb-12">
                    Interested in working together? let's schedule a time to discuss.
                </p>

                <a href="mailto:skeerthana1912@gmail.com" className="btn px-8 py-4 text-base font-semibold mb-16 inline-flex items-center gap-2">
                    <Mail size={18} /> Say Hello
                </a>

                <div className="flex gap-8 justify-center items-center">
                    <a href="https://github.com/keerthanasy" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-xs uppercase tracking-widest font-medium group">
                        <span className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
                            <Github size={20} />
                        </span>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/keerthana-sachithanandham-6a8157218/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-xs uppercase tracking-widest font-medium group">
                        <span className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
                            <Linkedin size={20} />
                        </span>
                        LinkedIn
                    </a>
                    <a href="#" className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-xs uppercase tracking-widest font-medium group">
                        <span className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
                            <FileText size={20} />
                        </span>
                        Resume
                    </a>
                </div>
            </motion.div>

            <footer className="mt-24 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
                © {new Date().getFullYear()} Portfolio. Built with Next.js, Three.js, and endless coffee.
            </footer>
        </section>
    );
}
