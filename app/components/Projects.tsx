"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Resume Generator",
        description: "A comprehensive resume building and analysis platform with AI-powered insights, ATS optimization, and professional templates.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "openai"],
        github: "https://github.com/Dhirendra22vish/resumeAI_pro",
        demo: "https://newresume-henna.vercel.app/",
        image: "https://image2url.com/images/1764089057948-08b5d8f7-d3ea-4a91-bd96-e248ecf6a640.png",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "DesiStore",
        description: "A simple and modern Next.js e-commerce UI built to showcase products with a clean, responsive layout. Perfect for starters and learning.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
        github: "https://github.com/Dhirendra22vish/E-commerce-DesiStore",
        demo: "https://e-commerce-desi-store.vercel.app/",
        image: "https://image2url.com/images/1764350230633-49978ea1-f4b9-49da-88c7-049ff5f65f7e.png",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "SplitMate",
        description: "Modern mobile-first app for effortlessly splitting expenses with friends.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB",],
        github: "https://github.com/Dhirendra22vish/splitemate2.0",
        demo: "https://splitemate2-0-shjc.vercel.app/",
        image: "https://image2url.com/images/1766419287578-ae7aa226-3f4a-480e-96d9-e1ff7fc0d03b.png",
        gradient: "from-indigo-500 to-blue-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 transition-colors duration-300 relative overflow-hidden">
            {/* Gradient Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                            Portfolio
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience in my development journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 flex flex-col h-full"
                            >
                                {/* Image Container with Gradient Overlay */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                                    {/* Floating Action Buttons */}
                                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                            aria-label="View GitHub Repository"
                                        >
                                            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                            aria-label="View Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technology Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* View Project Link */}
                                    <motion.div
                                        className="pt-4 border-t border-gray-200 dark:border-gray-700"
                                    >
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
                                        >
                                            <span>View Project</span>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Animated Border Gradient (visible on hover) */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/Dhirendra22vish"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Github className="w-5 h-5" />
                        <span>View All Projects on GitHub</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
