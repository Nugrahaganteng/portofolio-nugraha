import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Varian animasi untuk pesan status
const statusVariants = {
    initial: { opacity: 0, y: -20, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.8 },
};

export default function ContactSection() {
    const [isBlinking, setIsBlinking] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(prev => !prev);
        }, 800);
        return () => clearInterval(blinkInterval);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/nugrahafirizki@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    _subject: 'New Contact Form Submission from Portfolio',
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
                setTimeout(() => setSubmitStatus('idle'), 7000); 
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-[#e8e8e8] dark:bg-[#161211] dark:text-white text-gray-900 border-4 dark:border-[#161211] border-[#d7d7d7] transition-colors duration-300 rounded-[5px] p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto">
                
                {/* Left Column - About Me */}
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
                        {/* Status Blinking Dot (diubah menjadi green untuk 'Tersedia') */}
                        <div
                            className={`w-2 h-2 rounded-full mr-2 ${isBlinking ? 'bg-green-500' : 'bg-transparent'}`}
                            style={{ transition: 'background-color 0.2s ease' }}
                        />
                        <span className="dark:text-white text-gray-900 font-medium text-sm md:text-base">Tersedia untuk proyek baru</span>
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
                        src="/image/1111.png"
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
                        onSubmit={handleSubmit}
                        className="space-y-4 md:space-y-6 w-full py-6 md:py-8 px-4 md:px-0"
                    >
                        
                        {/* Status Messages - MENGGUNAKAN SKEMA MONOKROMATIK */}
                        {submitStatus !== 'idle' && (
                            <motion.div
                                key={submitStatus} 
                                variants={statusVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className={`p-4 rounded-xl font-bold text-center border-2 shadow-xl 
                                    bg-gray-100 dark:bg-gray-800 border-gray-400 dark:border-gray-700
                                `}
                            >
                                <motion.div 
                                    className="flex items-center justify-center gap-3 text-lg md:text-xl"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* Ikon Animasi Sukses (Warna Netral/Abu-abu Terang) */}
                                    {submitStatus === 'success' && (
                                        <svg className="w-8 h-8 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 0.7, type: "tween" }}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    )}

                                    {/* Ikon Animasi Error (Warna Netral/Abu-abu Terang) */}
                                    {submitStatus === 'error' && (
                                        <svg className="w-8 h-8 text-gray-700 dark:text-gray-200 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    )}

                                    {/* Teks Status */}
                                    {submitStatus === 'success' ? (
                                        <span className="text-gray-900 dark:text-gray-100">
                                            yess! Pesan Anda sudah terkirim. Nugraha akan balas mohon bersabar.
                                        </span>
                                    ) : (
                                        <span className="text-gray-900 dark:text-gray-100">
                                            Ups, Koneksi terputus. Silakan coba lagi atau kirim via email.
                                        </span>
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                        
                        {/* Name Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="transform hover:scale-[1.01] transition-all duration-300"
                        >
                            <label htmlFor="name" className="text-gray-900 dark:text-white block mb-2 text-sm md:text-base font-medium">
                                Name <span className="text-gray-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Nama lengkap Anda"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-900 dark:text-white bg-gray-50 dark:bg-transparent transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
                            />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="transform hover:scale-[1.01] transition-all duration-300"
                        >
                            <label htmlFor="email" className="text-gray-900 dark:text-white block mb-2 text-sm md:text-base font-medium">
                                Email <span className="text-gray-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="alamat.email@contoh.com"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-900 dark:text-white bg-gray-50 dark:bg-transparent transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="transform hover:scale-[1.01] transition-all duration-300"
                        >
                            <label htmlFor="message" className="text-gray-900 dark:text-white block mb-2 text-sm md:text-base font-medium">
                                How can I help you? <span className="text-gray-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                                className="w-full px-4 py-3 border-b-2 border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-900 dark:text-white bg-gray-50 dark:bg-transparent transition-all duration-300 shadow-sm resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center md:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full md:w-auto min-w-[140px] bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-200 dark:to-white text-gray-900 font-medium py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Alternative Contact Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="pt-4 text-center md:text-left"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Atau hubungi langsung via email:{' '}
                                <a 
                                    href="mailto:nugrahafirizki@gmail.com" 
                                    className="text-gray-900 dark:text-white font-medium hover:underline"
                                >
                                    nugrahafirizki@gmail.com
                                </a>
                            </p>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}