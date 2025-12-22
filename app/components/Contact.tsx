"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            setIsSubmitted(true);
            setTimeout(() => {
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitted(false);
            }, 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/Dhirendra22vish", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/dhirendra-vishwakarma-53259a292/", label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
        { icon: Mail, href: "mailto:dhiru7521071887@gmail.com", label: "Email", color: "hover:text-red-600 dark:hover:text-red-400" }
    ];

    return (
        <section id="contact" className="py-20 transition-colors duration-300 relative overflow-hidden">
            {/* Gradient Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                            Let's Connect
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Contact Cards */}
                        <motion.a
                            href="mailto:dhiru7521071887@gmail.com"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        dhiru7521071887@gmail.com
                                    </p>
                                </div>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        +91 9305573854
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        India UP
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            {/* Left Sidebar */}
                            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-10 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/10" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's work together</h3>
                                    <p className="text-blue-100 mb-8 leading-relaxed">
                                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                            <span className="text-sm text-blue-100">Quick response time</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                            <span className="text-sm text-blue-100">Professional collaboration</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                            <span className="text-sm text-blue-100">Quality-focused approach</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/20">
                                        <p className="text-sm text-blue-100 mb-4 font-semibold">Connect with me</p>
                                        <div className="flex space-x-4">
                                            {socialLinks.map((social, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                                                    aria-label={social.label}
                                                >
                                                    <social.icon className="w-5 h-5 text-white" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="md:col-span-3 p-8 md:p-10">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="flex flex-col items-center justify-center h-full py-12"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4"
                                            >
                                                <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-center">
                                                Thank you for reaching out. I'll get back to you soon!
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <motion.input
                                                    whileFocus={{ scale: 1.01 }}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                                                    placeholder="John Doe"
                                                />
                                                {errors.name && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-red-500 text-sm mt-1"
                                                    >
                                                        {errors.name}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <motion.input
                                                    whileFocus={{ scale: 1.01 }}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-red-500 text-sm mt-1"
                                                    >
                                                        {errors.email}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Your Message *
                                                </label>
                                                <motion.textarea
                                                    whileFocus={{ scale: 1.01 }}
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none`}
                                                    placeholder="Tell me about your project or just say hello..."
                                                />
                                                {errors.message && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-red-500 text-sm mt-1"
                                                    >
                                                        {errors.message}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                            >
                                                <span>Send Message</span>
                                                <Send className="w-5 h-5" />
                                            </motion.button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
