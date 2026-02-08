'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center relative z-10 text-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] pointer-events-none" />

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-5xl"
                style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
            >
                Hi, I'm <span className="text-[var(--accent)]">Keerthana Sachithanandham</span>.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-lg md:text-xl text-[var(--text-muted)] mb-10 tracking-wide font-medium max-w-2xl mx-auto"
            >
                Passionate about crafting immersive web experiences with modern technologies. I specialize in building scalable applications and 3D interactions that bridge the gap between design and engineering.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <a href="#projects" className="btn" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                    View Work
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--border)] to-transparent mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--accent)] animate-scroll-down" style={{ animation: 'scrollDown 2s infinite' }}></div>
                </div>
            </motion.div>

            <style jsx global>{`
          @keyframes scrollDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>
        </section>
    );
}
