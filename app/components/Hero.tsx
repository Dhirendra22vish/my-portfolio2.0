"use client";

import { Download, Github, Linkedin, Mail, ArrowRight, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground";

export default function Hero() {
    return (
        <AuroraBackground id="home">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8 max-w-5xl flex flex-col items-center"
                >
                    {/* Professional Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Stack Developer
                        </span>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                        className="relative"
                    >
                        <div className="w-36 h-36 md:w-44 md:h-44 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900/30">
                            <Image
                                src="/profile.jpg"
                                alt="Dhirendra Vishwakarma"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <motion.div
                            className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-3 shadow-xl border-2 border-white dark:border-gray-800"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                        >
                            <Code2 className="w-5 h-5 text-white" />
                        </motion.div>
                    </motion.div>

                    {/* Name & Title */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
                        >
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                Dhirendra Vishwakarma
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-3"
                        >
                            <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                Building Digital Experiences
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Crafting scalable web applications with modern technologies.
                                Specialized in React, Next.js, and full-stack development.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 pt-6"
                    >
                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="#contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-md hover:shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Get In Touch
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex items-center gap-4 pt-4"
                    >
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Connect:</span>
                        <div className="flex gap-3">
                            <motion.a
                                href="https://github.com/Dhirendra22vish"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm hover:shadow-md"
                            >
                                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/dhirendra-vishwakarma-53259a292/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm hover:shadow-md"
                            >
                                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </motion.a>
                            <motion.a
                                href="mailto:dhiru7521071887@gmail.com"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm hover:shadow-md"
                            >
                                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </AuroraBackground>
    );
}
