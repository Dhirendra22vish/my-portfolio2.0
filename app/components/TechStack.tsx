"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Server, Terminal, Cpu, Sparkles, Smartphone, Cloud, PenTool } from "lucide-react";

const technologies = [
    // Frontend
    { name: "React", icon: Code2, color: "from-blue-400 to-blue-600", category: "Frontend", proficiency: 95 },
    { name: "Next.js", icon: Globe, color: "from-gray-700 to-black", category: "Frontend", proficiency: 90 },
    { name: "TypeScript", icon: Terminal, color: "from-blue-500 to-blue-700", category: "Frontend", proficiency: 88 },
    { name: "Tailwind CSS", icon: Layout, color: "from-cyan-400 to-cyan-600", category: "Frontend", proficiency: 92 },
    { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-yellow-600", category: "Frontend", proficiency: 94 },
    { name: "HTML5", icon: Layout, color: "from-orange-500 to-orange-700", category: "Frontend", proficiency: 98 },
    { name: "CSS3", icon: Layout, color: "from-blue-500 to-blue-700", category: "Frontend", proficiency: 95 },

    // Backend
    { name: "Node.js", icon: Server, color: "from-green-500 to-green-700", category: "Backend", proficiency: 87 },
    { name: "Java", icon: Code2, color: "from-red-500 to-red-700", category: "Backend", proficiency: 80 },
    { name: "Python", icon: Code2, color: "from-yellow-500 to-yellow-700", category: "Backend", proficiency: 85 },
    { name: "C++", icon: Code2, color: "from-blue-600 to-blue-800", category: "Backend", proficiency: 75 },
    { name: "MongoDB", icon: Database, color: "from-green-400 to-green-600", category: "Backend", proficiency: 83 },
    { name: "MySQL", icon: Database, color: "from-blue-500 to-blue-700", category: "Backend", proficiency: 82 },

    // Mobile
    { name: "Android", icon: Smartphone, color: "from-green-400 to-green-600", category: "Mobile", proficiency: 85 },
    { name: "Kotlin", icon: Smartphone, color: "from-purple-500 to-purple-700", category: "Mobile", proficiency: 80 },

    // Tools & Others
    { name: "Git", icon: Terminal, color: "from-orange-500 to-orange-700", category: "Tools", proficiency: 90 },
    { name: "GitHub", icon: Code2, color: "from-gray-700 to-black", category: "Tools", proficiency: 92 },
    { name: "AWS", icon: Cloud, color: "from-yellow-500 to-orange-500", category: "Tools", proficiency: 70 },
    { name: "Netlify", icon: Cloud, color: "from-cyan-500 to-blue-500", category: "Tools", proficiency: 85 },
    { name: "WordPress", icon: Globe, color: "from-blue-600 to-blue-800", category: "Tools", proficiency: 80 },
    { name: "Figma", icon: Layout, color: "from-purple-500 to-purple-700", category: "Tools", proficiency: 80 },
    { name: "VS Code", icon: Code2, color: "from-blue-400 to-blue-600", category: "Tools", proficiency: 95 },
];

const categoryColors = {
    Frontend: "from-blue-500 to-cyan-500",
    Backend: "from-green-500 to-emerald-500",
    Mobile: "from-purple-500 to-pink-500",
    Tools: "from-orange-500 to-red-500"
};

export default function TechStack() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden transition-colors duration-300">
            {/* Gradient Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block mb-4"
                    >
                        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                            <Sparkles className="w-4 h-4" />
                            <span>Skills & Expertise</span>
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A comprehensive collection of technologies and tools I use to build modern, scalable applications.
                    </p>
                </motion.div>

                {/* Unified Technology Grid - Smaller Cards */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Category Badge */}
                                <div className="absolute top-1.5 right-1.5">
                                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r ${categoryColors[tech.category as keyof typeof categoryColors]} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                        {tech.category}
                                    </span>
                                </div>

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`mb-2 p-2.5 rounded-xl bg-gradient-to-br ${tech.color} shadow-md`}
                                >
                                    <tech.icon className="w-5 h-5 text-white" />
                                </motion.div>

                                {/* Name */}
                                <h3 className="text-xs md:text-sm font-bold text-gray-900 dark:text-white mb-1.5 text-center">
                                    {tech.name}
                                </h3>

                                {/* Proficiency Bar */}
                                <div className="w-full mt-1">
                                    <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${tech.proficiency}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                                        />
                                    </div>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 + 0.5 }}
                                        className="text-[10px] text-gray-500 dark:text-gray-400 text-center mt-0.5"
                                    >
                                        {tech.proficiency}%
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Animated Glow Border */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg`} />
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { label: "Frontend Technologies", count: technologies.filter(t => t.category === "Frontend").length, gradient: "from-blue-500 to-cyan-500" },
                        { label: "Backend Technologies", count: technologies.filter(t => t.category === "Backend").length, gradient: "from-green-500 to-emerald-500" },
                        { label: "Tools & Platforms", count: technologies.filter(t => t.category === "Tools").length, gradient: "from-purple-500 to-pink-500" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                                className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                            >
                                {stat.count}+
                            </motion.div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Learning More Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Always learning and exploring new technologies
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
