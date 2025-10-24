import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
import { useTheme } from './ThemeProvider'; 

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <div className="flex justify-end p-5 px-30 pt-10">
          <motion.button 
            className="font-bold block ml-auto border border-gray-300 dark:border-gray-700 w-[132px] py-2 rounded-full text-gray-900 dark:text-gray-100 bg-white/80 dark:bg-black/80 backdrop-blur-md cursor-pointer shadow-lg hover:shadow-xl transition-all"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MENU
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div 
              className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                  className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-200/30 via-indigo-200/30 to-purple-200/30 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{ duration: 25, repeat: Infinity }}
                />
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>

              {/* Header with Close Button */}
              <div className="relative z-10 flex justify-between items-center p-6">
                <motion.button 
                  className="p-4 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-black shadow-lg hover:shadow-xl transition-all"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaX size={20} />
                </motion.button>

                {/* Optional: Add Logo or Title */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
                >
                  Navigation
                </motion.div>
              </div>

              {/* Navigation Links */}
              <motion.nav 
                className="relative z-10 flex flex-col items-start justify-center flex-grow p-10 md:p-16 text-4xl md:text-6xl lg:text-7xl font-bold space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'My Work', href: '#my-work' },
                  { name: 'Certificates', href: '#see-certificate' },
                  { name: 'My Skills', href: '#my-skills' },
                  { name: 'Contact', href: '#contact' }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative overflow-hidden group cursor-pointer"
                    variants={{
                      hidden: { x: -50, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 20 }}
                  >
                    {/* Number Index */}
                    <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-sm md:text-base text-gray-400 dark:text-gray-600 font-mono">
                      0{index + 1}
                    </span>

                    {/* Link Text with Gradient on Hover */}
                    <span className="relative inline-block group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:via-gray-500 group-hover:to-gray-700 dark:group-hover:from-gray-300 dark:group-hover:via-white dark:group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.name}
                    </span>

                    {/* Animated Underline */}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Shine Effect */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                ))}
              </motion.nav>

              {/* Footer Section */}
              <motion.div
                className="relative z-10 p-10 md:p-16 border-t border-gray-300 dark:border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  {/* Social Links */}
                  <div className="flex gap-4">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Email'].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        whileHover={{ y: -3 }}
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>

                  {/* Copyright */}
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    © 2025 Nugraha Algeio
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;