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
import Menu from "@/componen/Menu";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function Home() {
  const [, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
        <meta
          name="description"
          content="Nugraha Algeio, a Frontend Web Developer and UI/UX Designer building accessible and high-performance websites."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main>
        {/* ===================== HERO SECTION ===================== */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
        >
          {/* Background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              y: prefersReducedMotion ? 0 : backgroundY,
              opacity: prefersReducedMotion ? 1 : opacity,
            }}
          >
            <div
              className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(100,100,100,0.15) 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
            />
            <div
              className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(80,80,80,0.15) 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
            />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          </motion.div>

          {/* ===================== HERO CONTENT ===================== */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* TEXT AREA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-black dark:text-white space-y-6 order-1 lg:order-1"
            >
              <motion.div variants={itemVariants}>
                <span className="relative bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                  Frontend Engineer & UI/UX
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-snug"
              >
                Building{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    High-Performance
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent" />
                </span>{" "}
                Websites
              </motion.h1>

              <motion.p
                variants={itemVariants}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400"
              >
                Hi, I&apos;m{" "}
                <span className="font-semibold text-black dark:text-white">
                  Nugraha Algeio
                </span>
              </motion.p>

              <motion.p
                variants={itemVariants}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl pt-2"
              >
                Saya seorang siswa yang mengembangkan perangkat lunak frontend dan perancang
                antarmuka yang berdedikasi untuk menciptakan pengalaman digital
                yang{" "}
                <span className="font-semibold text-black dark:text-white">
                  mudah diakses
                </span>
                ,{" "}
                <span className="font-semibold text-black dark:text-white">
                  berkinerja tinggi
                </span>
                , dan{" "}
                <span className="font-semibold text-black dark:text-white">
                  responsif
                </span>
                .
              </motion.p>

              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.a
                  href="#contact"
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold overflow-hidden transition-all shadow-lg hover:shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.a>

                <motion.a
                  href="#my-work"
                  className="group relative px-8 py-4 border-2 border-black dark:border-white rounded-full font-bold text-black dark:text-white overflow-hidden transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">View Projects</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* PHOTO SECTION (Refined) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative order-2 lg:order-2 mt-12 lg:mt-0 flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl p-3"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                    <Image
                      src="/image/hero/potogio.png"
                      alt="Nugraha Algeio Profile"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </motion.div>

                {/* Floating Badges */}
                <div className="absolute -top-5 -right-5 flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl shadow-lg border border-gray-700 dark:border-gray-300">
                  <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full">
                    <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    Student
                  </span>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-black/90 border border-gray-300 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-2xl shadow-xl backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-bold">3+ Years</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== OTHER SECTIONS ===================== */}
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

          <section id="my-work" className="bg-gray-100 dark:bg-[#0c0a0a] py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                Selected Work
              </h2>
              <SelectedWork />
            </div>
          </section>

          <section
            id="see-certificate"
            className="bg-gray-100 dark:bg-[#0c0a0a] py-20"
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                My Certificates and Experience
              </h2>
              <CertificateShowcase />
              <Article />
            </div>
          </section>

          <section
            id="my-skills"
            className="bg-gray-100 dark:bg-[#0c0a0a] py-20"
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
                My Toolkit & Tech Stack
              </h2>
              <Toolkit />
            </div>
          </section>

          <section
            id="testimonials"
            className="bg-gray-100 dark:bg-[#0c0a0a] py-20"
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-16">
                What Clients Say
              </h2>
              <Testimonials />
            </div>
          </section>

          <section
            id="contact"
            className="bg-gray-100 dark:bg-[#0c0a0a] pt-10 pb-20"
          >
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
