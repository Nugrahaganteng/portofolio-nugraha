// pages/index.js
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import TrustedLogos from "@/componen/TrustedLogos";
import SelectedWork from "@/componen/SelectedWork";
import CertificateShowcase from "@/componen/CertificateShowcase";
import Toolkit from "@/componen/Toolkit";
import Testimonials from "@/componen/Testimonials";
import ContactSection from "@/componen/ContactSection";
import Footer from "@/componen/Footer";
import Article from "@/componen/Article";
import { motion, useScroll, useTransform } from "framer-motion";
import Menu from "@/componen/Menu";

export default function Home() {
  const [, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  // Parallax effect untuk background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10 - 5,
        y: (e.clientY / window.innerHeight) * 10 - 5,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Nugraha Algeio - Frontend Dev & UI/UX Designer Portfolio</title>
        <meta name="description" content="Nugraha Algeio, a Frontend Web Developer and UI/UX Designer building accessible and high-performance websites." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main>
        {/* Hero Section - ENHANCED VERSION */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
          id="home"
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY, opacity }}
          >
            {/* Gradient Orbs dengan blur yang lebih artistik */}
            <motion.div
              className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(100,100,100,0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(80,80,80,0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

            {/* Floating Particles - Minimalis */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          {/* Main Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Text Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-black dark:text-white space-y-6 order-1 lg:order-1"
              >
                {/* Badge dengan glow effect */}
                <motion.div
                  variants={itemVariants}
                  className="inline-block relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gray-400/20 dark:bg-gray-600/20 blur-xl rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                  <span className="relative bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                    Frontend Engineer & UI/UX
                  </span>
                </motion.div>

                {/* Main Heading dengan gradient text effect */}
                <motion.h1
                  variants={itemVariants}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-snug"
                >
                  Building{' '}
                  <motion.span
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      High-Performance
                    </span>
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent"
                      initial={{ width: 0, left: '50%' }}
                      animate={{ width: '100%', left: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    />
                    {/* Shimmer effect */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.span>
                  {' '}Websites
                </motion.h1>

                {/* Subtitle dengan typing effect simulation */}
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: 0.2 }}
                  className="overflow-hidden"
                >
                  <motion.p
                    className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <p>
                      {"Hi, I'm "}
                      <span className="font-semibold text-black dark:text-white">Nugraha Algeio</span>
                    </p>

                  </motion.p>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl pt-2"
                >
                  Saya seorang insinyur perangkat lunak frontend dan perancang antarmuka yang berdedikasi untuk menciptakan pengalaman digital yang  <span className="font-semibold text-black dark:text-white"> mudah diakses, berkinerja tinggi,</span>, <span className="font-semibold text-black dark:text-white">dan responsive</span>untuk digunakan
                </motion.p>

                {/* CTA Buttons dengan enhanced hover effects */}
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >
                  <motion.a
                    href="#contact"
                    className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold overflow-hidden transition-shadow shadow-lg hover:shadow-2xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">contact</span>
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/10"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.a>

                  <motion.a
                    href="#my-work"
                    className="group relative px-8 py-4 border-2 border-black dark:border-white rounded-full font-bold text-black dark:text-white overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                      View Projects
                    </span>
                    {/* Fill effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-black dark:bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.a>
                </motion.div>

                {/* Stats dengan counter animation effect */}
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: 0.5 }}
                  className="flex gap-8 pt-8"
                >
                  {[
                    { value: "50+", label: "Projects Done" },
                    { value: "1+", label: "Happy Clients" },
                    { value: "3+", label: "Years Exp" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="relative"
                    >
                      {i > 0 && (
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                      )}
                      <div className="text-3xl font-bold text-black dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Photo Section dengan enhanced effects */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="relative order-2 lg:order-2 mt-12 lg:mt-0"
              >
                {/* Main Photo Container */}
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  style={{
                    x: mousePosition.x * 0.3,
                    y: mousePosition.y * 0.3,
                  }}
                >
                  {/* Rotating Decorative Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl -m-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Glassmorphism Frame */}
                  <motion.div
                    className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/50 dark:bg-black/50 p-3 border border-gray-200 dark:border-gray-800 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Photo */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                      <Image
                        src="/image/hero/potogio.png"
                        alt="Nugraha Algeio Profile"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        priority
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-1/4"
                        animate={{ y: ['0%', '400%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background: 'linear-gradient(45deg, transparent 40%, rgba(100, 100, 100, 0.3), transparent 60%)',
                        backgroundSize: '200% 200%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  {/* Floating Badge - Available */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl shadow-xl border border-gray-700 dark:border-gray-300"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 3, 0, -3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-sm font-semibold">student</span>
                    </div>
                  </motion.div>

                  {/* Experience Badge */}
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white px-6 py-4 rounded-2xl shadow-2xl"
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -2, 0, 2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="opacity-60">
                  <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2" />
                  <motion.circle
                    cx="10"
                    cy="10"
                    r="3"
                    fill="currentColor"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Rest of sections */}
        <section className="relative bg-gray-100 dark:bg-[#0c0a0a] z-30 rounded-t-[70px] -mt-16 pt-20">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-16">
              Trusted by
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center py-10">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <TrustedLogos
                    startFrom={Math.floor(Math.random() * 1000)}
                    intervalMs={Math.floor(Math.random() * 2000) + 2000}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <section className="bg-gray-100 dark:bg-[#0c0a0a] py-20" id="my-work">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                Selected Work
              </h2>
              <SelectedWork />
            </div>
          </section>

          <section className="bg-gray-100 dark:bg-[#0c0a0a] py-20" id="see-certificate">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                My Certificates and Experience
              </h2>
              <CertificateShowcase />
              <Article />
            </div>
          </section>

          <section className="bg-gray-100 dark:bg-[#0c0a0a] py-20" id="my-skills">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
                My Toolkit & Tech Stack
              </h2>
              <Toolkit />
            </div>
          </section>

          <section className="bg-gray-100 dark:bg-[#0c0a0a] py-20" id="testimonials">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-16">
                What Clients Say
              </h2>
              <Testimonials />
            </div>
          </section>

          <section className="bg-gray-100 dark:bg-[#0c0a0a] pt-10 pb-20" id="contact">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-6xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-16">
                Ready to Start a Project?
              </h2>
              <ContactSection />
            </div>
          </section>

          <Footer />
        </section>
      </main>
    </>
  );
}