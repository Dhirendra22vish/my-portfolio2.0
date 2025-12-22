"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden transition-colors duration-300">
            {/* Gradient Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>Get to Know Me</span>
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Passionate developer crafting digital experiences with modern technologies
                    </p>
                </motion.div>

                {/* About & Education Combined */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12 max-w-4xl mx-auto"
                >
                    {/* Bio Section */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">I'm Dhirendra</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        I’m a self-taught Web Developer from Kanpur, Uttar Pradesh, currently pursuing my undergraduate degree from CSJMU. Technology and development have always excited me — especially the power of building things from scratch that actually work. I work mainly with the MERN Stack (MongoDB, Express.js, React.js, Node.js) and enjoy creating full-stack web apps, clones, and cool side projects. Every line of code I write is a step forward in my learning journey. Right now, I’m focused on sharpening my skills, building real-world projects, and becoming job-ready — one project at a time..
                    </p>


                    {/* Education Section */}
                    <div className="flex items-center gap-3 mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                degree: "Bachelor of Computer Application",
                                school: "CSJMU",
                                period: "2023 - 2026",
                                description: "Focused on software engineering, algorithms, and web development"
                            },
                            {
                                degree: "Online Certifications",
                                school: "scaler",
                                period: "2025 - Present",
                                description: "Continuous learning in React, Next.js, TypeScript, and cloud technologies"
                            }
                        ].map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l-4 border-purple-500 pl-4"
                            >
                                <h4 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    {edu.school} • {edu.period}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {edu.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Interests */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        When I'm Not Coding
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Open Source", "sketching", "Photography", "Gaming", "Reading"].map((interest, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md border border-gray-200 dark:border-gray-600"
                            >
                                {interest}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
