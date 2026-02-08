'use client';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript']
    },
    {
        title: 'Front-End',
        skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Redux']
    },
    {
        title: 'Back-End',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
    },
    {
        title: 'Databases',
        skills: ['MySQL', 'MongoDB']
    },
    {
        title: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'AWS (EC2, S3)']
    },
    {
        title: 'Game Engine',
        skills: ['Unity', 'Unreal']
    },
    {
        title: 'Additional',
        skills: ['Three.js', 'WebXR', 'GLSL Shaders', 'Agile/Scrum']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
            >
                Technical <span className="text-[var(--text-muted)]">Expertise</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group"
                    >
                        <h3 className="text-xl font-semibold mb-6 border-b border-[var(--border)] pb-2 group-hover:border-[var(--accent)] transition-colors duration-300">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-300 cursor-default">
                                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
