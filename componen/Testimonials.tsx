import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [testimonials] = useState([
    {
      id: 1,
      quote: "Bekerja dengan Nugraha sangat menyenangkan. Ia teliti dalam setiap detail desain UI/UX dan selalu responsif dalam komunikasi. Proyek pun berjalan dengan lancar berkat kontribusinya.",
      name: "Budi Santoso",
      position: "Developer @TokopediaID",
      avatar: "/image/testimonials/rich-harris.png"
    },
    {
      id: 2,
      quote: "Nugraha adalah UI/UX designer yang cerdas dan punya pemahaman mendalam tentang front-end. Ia juga punya wawasan luas tentang strategi digital dan user behavior.",
      name: "Ahmad Ridwan",
      position: "Tech Lead @GoTo",
      avatar: "/image/testimonials/frank-mcsherry.webp"
    },
    {
      id: 3,
      quote: "Nugraha memiliki kreativitas tinggi dan selalu membawa ide segar dalam setiap project. Sangat profesional dan mudah diajak kerja sama. Saya tidak ragu untuk merekomendasikannya.",
      name: "Dewi Kusuma",
      position: "Head of Design @Traveloka",
      avatar: "/image/testimonials/brian-hirsh.png"
    },
    {
      id: 4,
      quote: "Salah satu hal terbaik dari Nugraha adalah kemampuannya dalam memecahkan masalah. Ia cepat tanggap dan selalu mengikuti tren desain terbaru dengan semangat belajar tinggi.",
      name: "Rudi Hermawan",
      position: "SWE @GojekTech",
      avatar: "/image/testimonials/adam.png"
    },
    {
      id: 5,
      quote: "Nugraha selalu menjadi rekan yang bisa diandalkan dalam tim. Keahliannya di bidang IT dan desain sangat membantu dalam menyelesaikan tantangan teknis maupun visual.",
      name: "Siti Rahma",
      position: "CEO @StartupIndo",
      avatar: "/image/testimonials/val-head.png"
    },
    {
      id: 6,
      quote: "Dengan bakat seni dan penguasaan tools digital, Nugraha selalu menghasilkan karya desain yang impactful dan profesional. Sangat kolaboratif dan inisiatif.",
      name: "Agus Prasetyo",
      position: "UI Lead @BukalapakID",
      avatar: "/image/testimonials/tim-satterwhite.webp"
    }
  ]);

  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div 
      className="border-t border-gray-800 dark:border-gray-800 pt-8 pb-10 px-4 h-full flex flex-col justify-between bg-gradient-to-br from-gray-50 to-gray-100 dark:from-transparent dark:to-transparent rounded-lg shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <p className="text-gray-700 dark:text-[#989793] mb-6 flex-grow">
        {testimonial.quote}
      </p>
      
      <motion.div 
        className="flex items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200 dark:border-gray-700"
        >
          <img 
            src={testimonial.avatar} 
            alt={`${testimonial.name}'s profile`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h3>
          <p className="text-gray-600 dark:text-[#989793]">{testimonial.position}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
