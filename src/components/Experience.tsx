'use client';
import { motion } from 'framer-motion';

const values = [
    {
        title: 'Clean Architecture',
        description: 'I write scalable, maintainable code that teams love to work with. No spaghetti, just clear patterns and predictable state.'
    },
    {
        title: 'Performance First',
        description: 'Speed is a feature. I optimize every interaction, ensuring 60fps animations and sub-second load times.'
    },
    {
        title: 'Collaborative Growth',
        description: 'I thrive in cross-functional teams, bridging the gap between design vision and engineering reality.'
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section container py-32 bg-[var(--surface)] text-[var(--text-main)] rounded-2xl md:rounded-3xl my-24 overflow-hidden relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] to-transparent opacity-50 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-24 px-6 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">More than just code.</h2>
                <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
                    I bring a product mindset to engineering, focusing on user value and technical excellence.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-500"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--text-main)]">System Engineer</h3>
                            <a href="https://www.jobinandjismi.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] text-lg hover:underline block mt-1">
                                Jobin and Jismi IT Services
                            </a>
                        </div>
                        <span className="text-[var(--text-muted)] mt-2 md:mt-0 font-mono text-sm">Sep 2023 — Present</span>
                    </div>

                    <p className="text-[var(--text-muted)] leading-relaxed mb-8 text-lg">
                        Working on complex system architectures and delivering high-performance solutions for enterprise clients. Focusing on modern web technologies, optimization, and scalable codebases.
                    </p>

                    <div className="flex flex-wrap gap-x-3 gap-y-4 mt-8">
                        {['React', 'Next.js', 'System Architecture', 'Performance Optimization'].map((tech) => (
                            <span
                                key={tech}
                                className="tech-pill"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
