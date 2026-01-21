"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin, Twitter, Globe, Cpu, Layers, Code, Palette, Zap, Database, Box } from "lucide-react";
import Card from "./ui/socials";

// Ensure you have this image in public/images/malay-red-shirt.png
const malayImg = "/images/malay-red-shirt.png";

const AboutMalay = () => {
    // Theme Color: Midnight Black / Slate
    const themeColor = "#ffffff";

    const techStack = [
        { name: "Next.js", icon: <Layers size={20} />, color: "#000000" },
        { name: "TypeScript", icon: <Code size={20} />, color: "#3178C6" },
        { name: "Tauri + Rust", icon: <Cpu size={20} />, color: "#FF9900" },
        { name: "REST / GraphQL", icon: <Globe size={20} />, color: "#E10098" },
        { name: "Postgres", icon: <Database size={20} />, color: "#336791" },
        { name: "Supabase", icon: <Layers size={20} />, color: "#3ECF8E" },
        { name: "Docker", icon: <Box size={20} />, color: "#2496ED" },
        { name: "Coolify (DevOps)", icon: <Zap size={20} />, color: "#60A5FA" },
        { name: "CI/CD Pipeline", icon: <Cpu size={20} />, color: "#F05032" },
        { name: "System Design", icon: <Layers size={20} />, color: "#0F172A" },
        { name: "GitHub", icon: <Github size={20} />, color: "#181717" },
        { name: "JavaScript", icon: <Zap size={20} />, color: "#F7DF1E" },
    ];

    const socials = [
        { id: "gmail", icon: <Mail size={22} />, label: "Gmail", href: "mailto:malay@ledgion.in" },
        { id: "phone", icon: <Phone size={22} />, label: "Phone", href: "tel:+917016870163" },
        { id: "github", icon: <Github size={22} />, label: "GitHub", href: "https://github.com/Malaybhai11" },
        { id: "linkedin", icon: <Linkedin size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/malay-raval-2708b8307/" },
    ];

    return (
        <section className="relative w-full min-h-screen bg-neutral-900 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-800/10 -skew-x-12 translate-x-1/4 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-[2px] bg-white" />
                            <span className="text-[12px] font-black tracking-[0.5em] text-white uppercase">
                                Discovery / About Me
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase mb-10"
                        >
                            ABOUT <span className="text-neutral-500 italic">ME!</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl"
                        >
                            <p>
                                Hi, I&apos;m <span className="text-white font-bold underline decoration-neutral-600 decoration-4">Malay Raval</span>,
                                I build and ship real products, not experiments. My work spans Next.js and TypeScript for modern web apps, REST and GraphQL APIs, and relational databases with Supabase, alongside Tauri + Rust for fast, efficient desktop software. I focus on clean architecture, performance, and systems that are easy to scale and maintain under real-world usage.
                            </p>
                            <p>
                                I own the entire lifecycle — from design and backend logic to DevOps, deployment, and monitoring. I self-host using Coolify, keep workflows disciplined on GitHub, and optimize for reliability over hype. If you want to see what’s been built and shipped, my projects are available on LinkedIn.
                            </p>
                        </motion.div>

                        {/* Contact Row */}
                        <div className="p-2 mt-5">
                            <Card>
                            </Card>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="mt-16 w-full">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase mb-6"
                            >
                                Skill-Set
                            </motion.h3>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
                            >
                                {techStack.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                        className="group relative flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-800 border border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-500"
                                    >
                                        <div className="p-2 rounded-lg bg-neutral-700 group-hover:bg-neutral-600 transition-colors" style={{ color: tech.color }}>
                                            {tech.icon}
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-500 group-hover:text-white uppercase tracking-tighter transition-colors">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-neutral-700/50 z-0 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-full bg-linear-to-tr from-neutral-800 to-transparent z-0" />

                        <div className="relative z-10 aspect-3/4 w-full overflow-hidden">
                            <Image
                                src={malayImg}
                                alt="Malay Raval Illustration"
                                fill
                                className="object-contain object-bottom scale-100 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 z-20 bg-neutral-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black tracking-widest text-white uppercase">Current Project</p>
                                    <p className="text-lg font-black text-white uppercase leading-none">Fullstack & DevOps Lead</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMalay;
