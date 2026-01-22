"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Globe, Server, Shield, Database, Smartphone } from "lucide-react";

const PricingMalay = () => {
    const [currency, setCurrency] = useState<"INR" | "USD">("INR");
    const [currencySymbol, setCurrencySymbol] = useState("₹");
    const [exchangeRate, setExchangeRate] = useState(1); // 1 for INR, e.g. 0.012 for USD

    // Feature Data
    const websitePackages = [
        {
            title: "Basic Website",
            priceInr: 5000,
            features: [
                "3-5 Pages",
                "Mobile Responsive Design",
                "Contact Form",
                "Basic SEO Setup",
                "WhatsApp / Call Button",
                "Optional Admin Panel",
            ],
            bestFor: "Local Businesses",
        },
        {
            title: "Business Website",
            priceInr: 8000,
            features: [
                "5-10 Pages",
                "Advanced UI/UX Design",
                "Admin Panel",
                "Blog / News Section",
                "Content Management",
                "Lead Management Dashboard",
                "SEO Optimized Structure",
            ],
            bestFor: "Growing Companies",
        },
        {
            title: "Professional Business Website",
            priceInr: 9500,
            features: [
                "Custom UI/UX Design",
                "Unlimited Pages",
                "Advanced Admin Panel",
                "Advanced Forms & Lead Routing",
                "Basic Analytics Integration",
                "Security Hardening",
            ],
            bestFor: "Brands & Agencies",
        },
    ];

    const ecommercePackage = {
        title: "Base E-Commerce Package",
        priceInr: 15000,
        features: [
            "Product Listing & Catalog",
            "Product Detail Pages",
            "Single or Multi Product Support",
            "Buy Now Button (No Cart)",
            "Simple Order Form",
            "Razorpay Payment Integration",
            "Admin Order Dashboard",
            "Email Notification on Orders",
            "Basic Inventory Tracking",
            "Basic Security Setup",
        ],
    };

    const commonAddOns = [
        { name: "Website Hosting Setup", priceInr: 1000 },
        { name: "Advanced Admin Customization", priceInr: 1500 },
        { name: "Advanced Security Hardening", priceInr: 1500 },
        { name: "Performance Optimization", priceInr: 1500 },
        { name: "Analytics Integration", priceInr: 1000 },
        { name: "Multi-language Support", priceInr: 1500 },
    ];

    const basicAddOns = [
        { name: "Blog System", priceInr: 1000 },
        { name: "Advanced Contact Forms", priceInr: 1000 },
        { name: "Lead Management", priceInr: 1500 },
        { name: "Gallery & Media Manager", priceInr: 1000 },
        { name: "Appointment Booking", priceInr: 1500 },
    ];

    useEffect(() => {
        // Detect User Location
        const fetchLocation = async () => {
            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                if (data.country_code !== "IN") {
                    setCurrency("USD");
                    setCurrencySymbol("$");
                    // Approximate conversion rate, can be dynamic but static is safer for display consistency
                    setExchangeRate(0.019);
                }
            } catch (error) {
                console.error("Failed to fetch location, defaulting to INR", error);
            }
        };
        fetchLocation();
    }, []);

    const formatPrice = (priceInr: number) => {
        if (currency === "INR") {
            return `₹${priceInr.toLocaleString("en-IN")}+`;
        } else {
            const priceUsd = Math.ceil(priceInr * exchangeRate);
            return `$${priceUsd.toLocaleString("en-US")}+`;
        }
    };

    return (
        <section className="relative w-full py-24 bg-neutral-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-white" />
                            <span className="text-xs font-black tracking-[0.3em] text-white uppercase">
                                Investment
                            </span>
                            <div className="w-12 h-[2px] bg-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                            Transparent <span className="text-blue-600">Pricing</span>
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Professional solutions tailored to your needs. Prices are transparent and feature-based.
                            <br />
                            <span className="text-sm font-semibold text-blue-600">
                                {currency === "USD" ? "International pricing enabled (USD)" : "Indian pricing enabled (INR)"}
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* Website Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {websitePackages.map((pkg, idx) => (
                        <motion.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="relative p-8 bg-neutral-800 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] border border-neutral-700 hover:border-blue-500 transition-all hover:shadow-xl flex flex-col"
                        >
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{pkg.title}</h3>
                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-blue-600">{formatPrice(pkg.priceInr)}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 flex-1 mb-8">
                                {pkg.features.map((feat) => (
                                    <li key={feat} className="flex items-start gap-3 text-sm text-neutral-400">
                                        <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <div className="py-2 px-4 bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider text-center rounded-lg">
                                    Best for {pkg.bestFor}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* E-Commerce Section */}
                <div className="max-w-5xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-neutral-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden ring-1 ring-white/10"
                    >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4 pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-black uppercase mb-2">{ecommercePackage.title}</h3>
                                <p className="text-blue-300 mb-6">Essential Online Selling System</p>
                                <div className="text-5xl font-black mb-8 text-blue-400">{formatPrice(ecommercePackage.priceInr)}</div>
                                <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                                    Launch Store
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {ecommercePackage.features.map((feat) => (
                                    <div key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Add-Ons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="flex items-center gap-3 text-xl font-black uppercase text-white mb-6">
                            <Server size={24} className="text-blue-600" />
                            Common Add-Ons
                        </h4>
                        <ul className="space-y-4">
                            {commonAddOns.map((addon) => (
                                <li key={addon.name} className="flex items-center justify-between p-4 bg-neutral-800 rounded-xl shadow-sm border border-neutral-700">
                                    <span className="text-neutral-300 font-medium">{addon.name}</span>
                                    <span className="font-bold text-white">{formatPrice(addon.priceInr)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="flex items-center gap-3 text-xl font-black uppercase text-white mb-6">
                            <Shield size={24} className="text-green-600" />
                            Basic Website Add-Ons
                        </h4>
                        <ul className="space-y-4">
                            {basicAddOns.map((addon) => (
                                <li key={addon.name} className="flex items-center justify-between p-4 bg-neutral-800 rounded-xl shadow-sm border border-neutral-700">
                                    <span className="text-neutral-300 font-medium">{addon.name}</span>
                                    <span className="font-bold text-white">{formatPrice(addon.priceInr)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default PricingMalay;
