"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

// Photos
const userImage = "/images/malay-suit.png"; // Primary professional image

const HeroSecMalay = () => {
    const themeColor = "#ffffff"; // White text for dark mode

    const today = new Date();
    const dateString = `${today.getDate()} ${today
        .toLocaleString("default", { month: "short" })
        .toUpperCase()} ${today.getFullYear()}`;

    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-neutral-900 overflow-hidden font-sans select-none -mt-1">

            {/* 🌟 Shooting Stars & Background */}
            <div className="absolute inset-0 z-0 h-full w-full bg-neutral-900">
                <Meteors number={30} />
            </div>

            {/* Top Left Date */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-4 left-4 sm:top-6 sm:left-5 md:top-8 md:left-8 lg:top-12 lg:left-12 z-40 flex flex-col gap-1"
            >
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-white/90">
                    {dateString}
                </h3>

                <div className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-relaxed">
                    in frame: <span className="text-white font-bold">@malay_raval</span>
                </div>
            </motion.div>

            {/* Top Right Slogan */}
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-5 md:top-10 md:right-8 lg:top-14 lg:right-12 z-40 text-right"
            >

                {/* ✅ MOBILE NAME (Only visible on mobile) */}
                <div className="block lg:hidden mt-2 leading-[0.85]">
                    <h2
                        className="text-base sm:text-lg font-black uppercase tracking-tight text-white"
                    >
                        MALAY
                    </h2>
                    <h2
                        className="text-sm sm:text-base font-normal uppercase tracking-[0.25em] text-white"
                    >
                        RAVAL
                    </h2>
                </div>
            </motion.div>

            {/* Center Composition */}
            <div className="relative w-full h-full flex items-center justify-center mb-52 md:mb-0 z-10">
                {/* Background Text - Outlined/Transparent style for dark mode */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
                    <h1
                        className="font-black leading-none uppercase text-center px-4"
                        style={{
                            fontSize: "clamp(3.5rem, 20vw, 24vw)",
                            fontFamily: "Impact, sans-serif",
                            color: "transparent",
                            WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)", // Outline effect
                            transform: "scaleY(1.2)",
                            letterSpacing: "-0.04em",
                            marginTop: "-5%",
                        }}
                    >
                        Engineer
                    </h1>
                </div>

                {/* Main Image */}
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="absolute z-10 bottom-0 h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh] w-full flex items-end justify-center pointer-events-none"
                >
                    <div className="relative h-full w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
                        <Image
                            src={userImage}
                            alt="Malay Raval"
                            fill
                            priority
                            draggable={false}
                            className="object-contain object-bottom scale-105 origin-bottom drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Bottom Left Role */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5 md:bottom-10 md:left-8 lg:bottom-14 lg:left-12 z-40"
            >
                <h2
                    className="text-sm sm:text-base md:text-2xl lg:text-4xl font-black uppercase tracking-tight text-white"
                >
                    FULLSTACK & DEVOPS
                </h2>
                <div className="flex items-center gap-3">
                    <h2 className="text-xs sm:text-sm md:text-xl lg:text-3xl font-light uppercase tracking-[0.15em] opacity-90 text-white">
                        DEVELOPER
                    </h2>
                    <span className="hidden md:inline-block h-[1px] w-12 bg-white/50"></span>
                    <span className="hidden md:inline-block text-[10px] font-medium tracking-widest uppercase text-blue-400">
                        Converting Visitors <br /> into Customers
                    </span>
                </div>
            </motion.div>

            {/* ✅ DESKTOP NAME (Hidden on Mobile) */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden lg:block absolute bottom-14 right-12 z-40 text-right"
            >
                <h2
                    className="text-7xl font-black uppercase tracking-tighter text-white"
                >
                    MALAY
                </h2>
                <h2
                    className="text-5xl font-normal uppercase tracking-[0.25em] text-white"
                >
                    RAVAL
                </h2>
            </motion.div>
        </section>
    );
};

export default HeroSecMalay;
