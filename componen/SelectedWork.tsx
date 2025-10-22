import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SelectedWork() {
  const projects = [
    {
      id: 0,
      title: "Website SAVANA HOTEL",
      description:
        "Landing page hotel mewah dengan tema savana dan keindahan alam Indonesia. Menampilkan hero section interaktif, katalog kamar premium, fasilitas lengkap dengan travel slider, integrasi Google Maps, dan sistem booking yang elegan dengan desain responsif full-screen.",
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "AOS (Animate On Scroll)",
        "Font Awesome Icons",
        "Google Maps API",
        "Responsive Design",
        "Interactive Slider Component",
        "Parallax Effects",
        "CSS Animations",
      ],
      video: "https://www.youtube.com/watch?v=qfr-myFeQrg",
      link: "https://www.youtube.com/watch?v=qfr-myFeQrg",
      isVideo: true,
    },
    {
      id: 1,
      title: "APP JAKI CLONE",
      description:
        "Video ini menjelaskan tentang pembuatan remake dari aplikasi jaki clone pemesanan digital.",
      technologies: [
        "React Native",
        "Library",
        "Expo Router",
        "twrnc",
        "Icons",
        "Android Studio",
        "ScrollView",
      ],
      video: "https://www.youtube.com/shorts/m_1UOZ-P1ZU",
      link: "https://www.youtube.com/shorts/m_1UOZ-P1ZU",
      isVideo: true,
    },
    {
      id: 5,
      title: "Tech Experience Showcase",
      description:
        "Video ini menampilkan pengalaman saya membangun berbagai aplikasi dengan teknologi modern dan interaktif.",
      technologies: [
        "React Native",
        "State Management",
        "Dark Mode",
        "Framer Motion",
        "Flexbox",
        "Expo",
      ],
      video: "https://www.youtube.com/shorts/GQbhagOdEjw",
      link: "https://www.youtube.com/shorts/GQbhagOdEjw",
      isVideo: true,
    },
    {
      id: 8,
      title: "Website CERTISAT",
      description:
        "Website ini digunakan untuk menampilkan dan mengelola sertifikat siswa, alumni, dan perusahaan di Sekolah Pesat dengan sistem berbasis web yang modern dan responsif.",
      technologies: [
        "Laravel",
        "Tailwind CSS",
        "MySQL",
        "Blade",
        "Authentication",
        "Admin Seeder",
        "CRUD",
      ],
        image: "/image/Selected-my-Work/certisat.png",
      link: "https://github.com/Nugrahaganteng/beasiswaa.git",
      isVideo: false,
    },
    {
      id: 7,
      title: "Website BEASISWA",
      description:
        "Sistem Pendaftaran Beasiswa Pesat adalah aplikasi web untuk mengelola pendaftaran beasiswa mahasiswa. IPK otomatis ter-generate dan menentukan jenis beasiswa yang sesuai. Sistem ini memiliki validasi otomatis dan penyimpanan data pendaftar.",
      technologies: [
        "Laravel 11",
        "MySQL",
        "Tailwind CSS",
        "PHP 8.1+",
        "Blade Templates",
      ],
        image: "/image/Selected-my-Work/poto1.png",
      link: "https://github.com/Nugrahaganteng/beasiswaa.git",
      isVideo: false,
    },
    {
      id: 6,
      title: "Website LISH_EDU",
      description:
        "Lish_Edu adalah website kursus bahasa Inggris online yang menawarkan layanan pemesanan kelas, profil tutor, dan sistem pembelajaran interaktif.",
      technologies: [
        "Next.js",
        "Laravel",
        "MySQL",
        "Card",
        "Flex",
        "CRUD",
        "GitHub",
      ],
      image: "/image/Selected-my-Work/lisheduu.png",
      link: "https://github.com/ZygmaCore/lish_edu.git",
      isVideo: false,
    },
    {
      id: 2,
      title: "Website HOTEL",
      description:
        "Website ini berfungsi untuk anda memesan tiket untuk menginap di hotel impian anda.",
      technologies: [
        "PHP",
        "HTML",
        "MySQL",
        "Button",
        "Card",
        "Flex",
        "CRUD",
        "Bootstrap",
        "XAMPP",
      ],
      image: "/image/Selected-my-Work/geoporto3.png",
      link: "https://github.com/Nugrahaganteng/web-hotel",
      isVideo: false,
    },
    {
      id: 3,
      title: "Website TRAVEL",
      description:
        "Website ini untuk memesan tiket liburan dan menampilkan destinasi terbaik dan kuliner.",
      technologies: [
        "Grid",
        "Slide",
        "Form",
        "Navbar",
        "AOS",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      image: "/image/Selected-my-Work/geoporto5.png",
      link: "#",
      isVideo: false,
    },
    {
      id: 4,
      title: "Website PERNIKAHAN",
      description:
        "Website ini untuk pasangan yang ingin membuat undangan digital.",
      technologies: [
        "Grid",
        "Form",
        "Navbar",
        "Flex",
        "Time",
        "Date",
        "HTML",
        "Bootstrap",
      ],
      image: "/image/Selected-my-Work/geoporto6.png",
      link: "https://github.com/Nugrahaganteng/undangan",
      isVideo: false,
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="grid md:grid-cols-2 items-center gap-10 mb-28">
      {/* TEKS KIRI */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-6"
      >
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-extrabold text-[#414141] dark:text-white text-3xl md:text-4xl"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#757575] text-lg md:text-xl font-medium"
        >
          {project.description}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#757575] text-xl md:text-2xl font-semibold space-y-1"
        >
          {project.technologies.map((tech, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{tech}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link href={project.link} className="text-white font-semibold relative group">
            <span className="relative z-10 text-[#414141] dark:text-white">
              Explore this project
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#414141] dark:bg-white transition-all group-hover:w-full"></span>
          </Link>
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <FaGithub className="dark:text-gray-400 text-[#414141] text-3xl" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* MEDIA KANAN */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl shadow-black">
          {project.isVideo ? (
            project.video.includes("youtube.com") ||
            project.video.includes("youtu.be") ? (
              <iframe
                className="w-full h-full rounded-lg"
                src={
                  project.video.includes("watch?v=")
                    ? project.video.replace("watch?v=", "embed/")
                    : project.video.replace("shorts/", "embed/")
                }
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                muted
                loop
              >
                <source src={project.video} type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
            )
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              width={1280}
              height={720}
              className="object-cover object-top rounded-lg"
            />
          )}
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 px-6 md:px-16 max-w-screen-xl mx-auto" id="work">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
