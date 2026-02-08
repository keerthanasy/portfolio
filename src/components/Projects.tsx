'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
    {
        title: 'Legendium.ai',
        category: '3D Simulation / EdTech',
        description: '3D WebGL product for learning and building robots in a 3D environment. Focused on VFX, physics, and shaders.',
        stack: ['WebGL', 'Three.js', 'Shaders', 'Physics'],
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        link: 'https://legendium.ai'
    },
    {
        title: 'Dew Diamonds',
        category: '3D E-commerce',
        description: 'Immersive 3D jewellery shop demo created for a client.',
        stack: ['React', 'Three.js', 'R3F'],
        gradient: 'linear-gradient(135deg, #FFD700 0%, #FDB931 100%)',
        link: 'https://dewdiamonds.netlify.app/'
    },
    {
        title: 'SkiPhone 15',
        category: 'Clone / UI',
        description: 'A pixel-perfect replica of the iPhone 15 landing page with smooth animations.',
        stack: ['React', 'GSAP', 'Three.js'],
        gradient: 'linear-gradient(135deg, #2b2b2b 0%, #000000 100%)',
        link: 'https://skiphone15-clone.netlify.app/'
    },
    {
        title: 'Mood Tracker',
        category: 'Wellness App',
        description: 'Track your daily moods and visualize your emotional well-being over time.',
        stack: ['React', 'Chart.js', 'Firebase'],
        gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        link: 'https://skmood-tracker.netlify.app/'
    },
    {
        title: 'Cake Studio 3D',
        category: '3D Configurator',
        description: 'Design and customize 3D cakes in real-time using Three.js.',
        stack: ['R3F', 'Three.js', 'Zustand'],
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        link: 'https://cakestudio3d.netlify.app/'
    },
    {
        title: 'Nexus Liquid',
        category: 'WebGL Simulation',
        description: 'A mesmerizing fluid simulation experiment running on the GPU.',
        stack: ['WebGL', 'GLSL', 'Physics'],
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        link: 'https://nexusliquid.netlify.app/'
    },
    {
        title: 'Fluid Simulation',
        category: 'Interactive WebGL',
        description: 'Real-time interactive fluid dynamics simulation running in the browser.',
        stack: ['WebGL', 'GLSL', 'Physics'],
        gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
        link: 'https://fluid-simulation-sk.netlify.app/'
    }
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


    return (
        <section
            id="projects"
            className="section container"
        >
            <div className="mb-16 flex items-end justify-between border-b border-[var(--border)] pb-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected <span className="text-[var(--text-muted)]">Work</span></h2>
            </div>

            <div className="flex flex-col relative z-10" onMouseLeave={() => setHoveredIndex(null)}>
                {projects.map((project, index) => {
                    const isHovered = hoveredIndex === index;
                    return (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative py-6 cursor-pointer border-b border-[var(--border)]"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onClick={() => window.open(project.link, '_blank')}
                            style={{
                                backgroundColor: isHovered ? 'rgba(255,255,255,0.02)' : 'transparent',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            <div
                                className="flex flex-col md:flex-row justify-between items-baseline gap-4 md:gap-8 px-2 md:px-4"
                                style={{
                                    paddingLeft: isHovered ? '2rem' : '1rem',
                                    transition: 'padding 0.3s ease'
                                }}
                            >
                                <div className="flex-1">
                                    <span
                                        className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2 block"
                                        style={{ opacity: isHovered ? 1 : 0.7, transition: 'opacity 0.3s' }}
                                    >
                                        {project.category}
                                    </span>
                                    <h3
                                        className="text-3xl md:text-6xl font-bold transition-all duration-300"
                                        style={{
                                            backgroundImage: isHovered ? 'linear-gradient(to right, #fff, #999)' : 'none',
                                            backgroundClip: isHovered ? 'text' : 'border-box',
                                            WebkitBackgroundClip: isHovered ? 'text' : 'border-box',
                                            color: isHovered ? 'transparent' : 'var(--text-main)',
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex-1 md:text-left">
                                    <p
                                        className="transition-colors max-w-md mr-auto text-lg leading-relaxed"
                                        style={{ color: isHovered ? 'var(--text-main)' : 'var(--text-muted)' }}
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        className="mt-4 flex items-center justify-start gap-2 text-[var(--accent)] font-medium"
                                        style={{
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <span>Preview Project</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>


        </section>
    );
}
