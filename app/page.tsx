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
import { motion } from "framer-motion";
import Menu from "@/componen/Menu";

export default function Home() {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Frontend Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main>
        {/* Hero Section - Professional Profile Page (Lighter Background) */}
        <section
          className="relative h-[110vh] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
          id="home"
        >
          {/* Background image with subtle effects - Lighter */}
          <div className="absolute inset-0">
            <Image
              src="/image/hero/headerBG.png"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
              className="transition-opacity duration-500"
              style={{
                objectPosition: "65% center",
                filter: "brightness(0.9) contrast(1.1)", // Kembali ke brightness awal, tanpa blur/saturate tambahan
              }}
            />
            {/* Lighter, more subtle overlay */}
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />{" "}
            {/* Opasitas dikurangi */}
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <Image
                src="/image/hero/potogio.png"
                alt="Profile Picture of Nugraha Algeio"
                width={180}
                height={180}
                className="rounded-full border-4 border-gray-400 dark:border-gray-600 shadow-xl object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight leading-tight"
              >
                {"Hi, I'm "}
                <span className="text-gray-300 dark:text-gray-200">
                  Nugraha Algeio
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="text-gray-300 dark:text-gray-400 mb-6 font-medium text-xl sm:text-2xl"
              >
                Frontend Web Developer & UI/UX Designer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                className="text-white dark:text-white mb-10 font-light text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
              >
                Seorang insinyur perangkat lunak frontend dan perancang
                antarmuka yang membangun situs web yang seperti UI UX, mudah
                diakses, dan berkinerja tinggi.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <button className="bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-700 dark:to-gray-900 text-white px-8 sm:px-14 py-4 sm:py-5 font-bold rounded-lg relative z-10 w-full text-center transition-all duration-300 shadow-md hover:shadow-lg">
                    Contact Me
                  </button>
                </motion.a>
                <motion.a
                  href="#my-work"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-gray-500 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-200 dark:text-gray-300 px-8 sm:px-14 py-4 sm:py-5 font-bold rounded-lg transition-all duration-300 bg-transparent hover:bg-gray-700/20">
                    See My Work
                  </button>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Trusted By Section */}
        <section className="section-override relative bg-gray-100 dark:bg-[#0c0a0a] z-30 rounded-t-[70px] -mt-16 pt-20">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-16">
              Trusted by
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-items-center py-10">
              {[...Array(4)].map((_, i) => (
                <TrustedLogos
                  key={i}
                  startFrom={Math.floor(Math.random() * 1000)}
                  intervalMs={Math.floor(Math.random() * 2000) + 2000}
                />
              ))}
            </div>
          </div>

          {/* Selected Work Section */}
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-25" id="my-work">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                Selected my Work
              </h2>
              <SelectedWork />
            </div>
          </section>
          {/* Certificates Section */}
          <section
            className="bg-gray-100 dark:bg-[#0c0a0a] pb-25"
            id="see-certificate"
          >
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                My certificate and experience
              </h2>
              <CertificateShowcase />
              <Article />
            </div>
          </section>
          {/* Toolkit Section */}
          <section
            className="bg-gray-100 dark:bg-[#0c0a0a] pb-25"
            id="my-skills"
          >
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
                My Toolkit
              </h2>
              <Toolkit />
            </div>
          </section>
          {/* Testimonials Section */}
          <section
            className="bg-gray-100 dark:bg-[#0c0a0a] pb-25"
            id="testimonials"
          >
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-4">
                Testimonials
              </h2>
              <Testimonials />
            </div>
          </section>
          {/* Contact Section */}
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-15" id="contact">
            <div className="container mx-auto ">
              <h2 className="text-3xl md:text-6xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-24">
                Send Message
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
