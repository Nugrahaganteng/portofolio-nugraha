import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(prev => !prev);
        }, 800);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className="w-full bg-[#e8e8e8] dark:bg-[#161211] dark:text-white text-gray-900 border-4 dark:border-[#161211] border-[#d7d7d7] transition-colors duration-300 rounded-[5px] p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/3 bg-[#f8f8f8] dark:bg-[#0c0a0a] bg-opacity-50 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center bg-gray-200 dark:bg-black rounded-full px-4 py-2 mb-6 shadow-sm"
                    >
                        <div
                            className={`w-2 h-2 rounded-full mr-2 ${isBlinking ? 'bg-red-600' : 'bg-transparent'}`}
                            style={{ transition: 'background-color 0.2s ease' }}
                        />
                        <span className="dark:text-white text-gray-900 font-medium text-sm md:text-base">Tersedia untuk bekerja sama</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700 dark:text-[#989898] mb-6 font-medium text-lg md:text-xl leading-relaxed"
                    >
                        Saya adalah siswi SMK dengan minat besar di bidang teknologi. Saya membuat desain UI/UX yang menarik dan membangun website modern yang fungsional serta responsif.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 dark:text-[#989898] mb-8 leading-relaxed text-sm md:text-base"
                    >
                        Di luar sekolah, saya senang membuat ilustrasi digital dan terus belajar tren desain terbaru. Saya terbuka untuk kolaborasi dan siap mewujudkan ide-ide kreatif bersama Anda.
                    </motion.p>

                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src="/image/signatures.png"
                        alt="Signature"
                        className="h-10 md:h-12 w-auto invert dark:invert-0"
                    />
                </motion.div>

                {/* Right Column - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-2/3 flex justify-start items-center"
                >
                    <form
                        action="https://formsubmit.co/nugrahafirizki@gmail.com" // Pastikan ini email Anda
                        method="POST"
                        className="space-y-4 md:space-y-6 w-full py-6 md:py-8 px-4 md:px-0"
                    >
                        {/* Hidden input for subject (opsional tapi bagus untuk filter email) */}
                        <input type="hidden" name="_subject" value="New message from your Portfolio Contact Form!" />

                        {/* Optional Redirect After Submit: Ganti URL ini ke halaman "Thank You" di website Anda */}
                        <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />
                        {/* Contoh: <input type="hidden" name="_next" value="https://nugrahaalgeio.vercel.app/thank-you" /> */}

                        {/* Menonaktifkan CAPTCHA (jika tidak ingin ada reCAPTCHA) */}
                        <input type="hidden" name="_captcha" value="false" />

                        {/* Meningkatkan keamanan dari bot (opsional) */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="transform hover:scale-[1.01] transition-all duration-300"
                        >
                            <label htmlFor="name" className="text-gray-900 dark:text-white block mb-2 text-sm md:text-base font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-900 dark:text-white bg-gray-50 dark:bg-transparent transition-all duration-300 shadow-sm"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="transform hover:scale-[1.01] transition-all duration-300"
                        >
                            <label htmlFor="email" className="text-gray-900 dark:text-white block mb-2 text-sm md:text-base font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-900 dark:text-white bg-gray-50 dark:bg-transparent transition-all duration-300 shadow-sm"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="transform hover:scale-[1.01] transition-all duration-300"
                        >
                            <label htmlFor="message" className="text-gray-900 dark:text-white block mb-2 text-sm md:text-base font-medium">How can I help you?</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                required
                                className="w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-900 dark:text-white bg-gray-50 dark:bg-transparent transition-all duration-300 shadow-sm"
                            ></textarea>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center md:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full md:w-32 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-200 dark:to-white text-gray-900 font-medium py-3 px-6 rounded-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base transform hover:-translate-y-1"
                            >
                                Send
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}