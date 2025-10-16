'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

// Tipe data untuk sertifikat
type CertificateData = {
  title: string;
  description: string;
  image: string;
  likeCount: number;
};

// Komponen utama
interface CertificateShowcaseState {
  likes: boolean[];
  likeCounts: number[];
}

export default class CertificateShowcase extends React.Component<{}, CertificateShowcaseState> {
  // Data sertifikat
  certificates: CertificateData[] = [
    {
      title: 'Sertifikasi - Membuat Landing Page dengan HTML dan CSS',
      description:
        'Note: Saya telah berhasil menyelesaikan sertifikasi kompetensi dari WAN Teknologi Internasional dalam Pembuatan Landing Page Menggunakan HTML dan CSS. Sertifikasi ini membuktikan kemampuan saya dalam merancang dan mengembangkan halaman web statis yang menarik dan responsif. Saya menguasai dasar-dasar struktur web dengan HTML dan styling visual dengan CSS untuk menciptakan tampilan yang profesional dan sesuai standar industri. Dengan predikat "Kompeten" yang saya raih, saya siap untuk mengaplikasikan keterampilan front-end ini dalam proyek-proyek pengembangan web.',
      image: '/image/certificate/sertifikat 2.png',
      likeCount: 100,
    },
    {
      title: ' Sertifikasi - Membangun Website Library Management dengan Laravel',
      description:
        'Note:Saya telah berhasil menyelesaikan sertifikasi kompetensi dalam Membangun Website Library Management menggunakan Framework Laravel. Sertifikasi ini menunjukkan keahlian saya dalam pengembangan web back-end dengan menggunakan salah satu framework PHP terpopuler. Saya mampu merancang dan mengimplementasikan sistem manajemen data yang kompleks, termasuk interaksi database, otentikasi pengguna, dan logika bisnis yang efisien untuk aplikasi berbasis web. Predikat "KOMPETEN" yang saya peroleh menegaskan kemampuan saya dalam mengembangkan solusi web yang robust dan terstruktur dengan Laravel.',
    image: '/image/certificate/portogio.png',
      likeCount: 70,
    },

    {
      title: ' Sertifikasi - Membuat Aplikasi Pemesanan Hotel Berbasis Web',
      description:
        'Note:Saya dengan bangga menyatakan telah berhasil menyelesaikan sertifikasi kompetensi dari PT Dimensi Kreasi Nusantara dalam Pembuatan Aplikasi Pemesanan Hotel Berbasis Web. Sertifikasi ini membuktikan kemampuan tingkat tinggi saya dalam mengembangkan aplikasi web kompleks yang fungsional dan interaktif. Saya menguasai seluruh siklus pengembangan aplikasi, mulai dari perancangan user interface (UI), pengelolaan database, hingga implementasi fitur-fitur penting seperti pencarian, pemesanan, dan manajemen data. Dengan predikat "SANGAT KOMPETEN" yang saya raih, saya siap untuk mengaplikasikan keterampilan pengembangan web yang komprehensif ini dalam proyek-proyek berskala besar dan menantang.',
      image: '/image/certificate/sertifikat1.png', 
      likeCount: 90,
    },
    {
      title: 'Sertifikasi - Membuat Aplikasi Mobile Fullstack dengan React Native dan Laravel',
      description:
        'Note: Saya berhasil menyelesaikan sertifikasi kompetensi Fullstack Mobile App Development dari GINVO Studio, dengan fokus pada React Native (front-end) dan Laravel (back-end). Sertifikasi ini membuktikan keahlian saya dalam membangun aplikasi mobile secara menyeluruh, dari antarmuka hingga sistem back-end. Dengan predikat "KOMPETEN", saya siap berkontribusi dalam pengembangan aplikasi mobile.',
      image: '/image/certificate/sertifikat 3.png',
      likeCount: 16,
    },
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      likes: Array(this.certificates.length).fill(false),
      likeCounts: this.certificates.map(c => c.likeCount),
    };
  }

  handleLike = (index: number) => {
    this.setState(prevState => {
      const newLikes = [...prevState.likes];
      const newCounts = [...prevState.likeCounts];
      newLikes[index] = !newLikes[index];
      newCounts[index] += newLikes[index] ? 1 : -1;
      return { likes: newLikes, likeCounts: newCounts };
    });
  };

  render() {
    return (
      <>
        {this.certificates.map((cert, index) => (
          <div key={index} className="w-full bg-white dark:bg-[#161211] p-2 rounded-xl shadow-md my-14">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Kiri - Deskripsi */}
                <div className="md:w-3/6 flex flex-col justify-between space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight hover:text-gray-700 transition-colors">
                      {cert.title}
                    </h2>
                    <p className="text-gray-700 dark:text-[#989898] text-xl leading-relaxed mb-6 hover:text-gray-600 transition-colors">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <Link
                      href="#"
                      className="text-white font-semibold relative group border-b-2 border-b-gray-500 hover:border-b-white transition-all duration-300"
                    >
                      <span className="relative z-10 text-gray-700 dark:text-white">Continue reading</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black dark:bg-white transition-all group-hover:w-full duration-300"></span>
                    </Link>
                    <div
                      onClick={() => this.handleLike(index)}
                      className="flex items-center gap-2 hover:transform hover:scale-105 transition-transform cursor-pointer"
                    >
                      {this.state.likes[index] ? (
                        <FaHeart className="text-red-500 text-xl" />
                      ) : (
                        <FaRegHeart className="text-red-500 text-xl hover:text-red-600" />
                      )}
                      <p className="text-[#989898] text-sm">{this.state.likeCounts[index]}</p>
                    </div>
                  </div>
                </div>

                {/* Kanan - Gambar */}
                <div className="md:w-1/2">
                  <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
                    <Image
                      width={1000}
                      height={1000}
                      src={cert.image}
                      alt="Competency Certificate"
                      className="w-full object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
