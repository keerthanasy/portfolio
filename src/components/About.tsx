'use client';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        I am a <span className="text-[var(--accent)]">System Engineer</span> based in India.
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg mb-4">
                        Currently working at <strong className="text-white">Jobin and Jismi IT Services</strong> since <span className="text-white">September 2023</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1"
                >
                    <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)] mb-6">
                        I specialize in building scalable web applications and optimizing system performance. My work bridges the gap between complex backend logic and seamless frontend experiences.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
                        Whether it's optimizing render cycles in React application or crafting a WebGL experience, I focus on the details that matter—speed, accessibility, and interaction.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
