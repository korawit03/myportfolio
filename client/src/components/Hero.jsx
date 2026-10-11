// ============================================
// HERO — ส่วนแนะนำตัว (บนสุดของหน้า)
// ============================================

import { useEffect, useState } from "react";

function Hero() {
         const [about, setAbout] = useState(null);

         // ดึงข้อมูลจาก API /api/about
         useEffect(() => {
                  fetch("/api/about")
                           .then((res) => res.json())
                           .then((data) => setAbout(data))
                           .catch(() => setAbout(null));
         }, []);

         // ถ้ายังไม่มีข้อมูล → แสดง loading
         if (!about) {
                  return (
                           <section id="about" className="min-h-screen flex items-center justify-center">
                                    <p className="text-gray-400 animate-pulse">Loading...</p>
                           </section>
                  );
         }

         return (
                  <section
                           id="about"
                           className="min-h-screen flex items-center justify-center px-6"
                  >
                           <div className="text-center max-w-2xl space-y-6">
                                    {/* ชื่อ */}
                                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                                             {about.name}
                                    </h1>

                                    {/* ตำแหน่ง */}
                                    <h2 className="text-2xl text-blue-400 font-medium">
                                             {about.title}
                                    </h2>

                                    {/* Bio */}
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                             {about.bio}
                                    </p>

                                    {/* ปุ่ม */}
                                    <div className="flex justify-center gap-4 pt-4">
                                             <a
                                                      href={about.github}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors"
                                             >
                                                      GitHub
                                             </a>
                                             <a
                                                      href={`mailto:${about.email}`}
                                                      className="px-6 py-3 border border-gray-700 hover:border-blue-500 hover:text-blue-400 rounded-lg text-gray-300 font-medium transition-colors"
                                             >
                                                      Contact
                                             </a>
                                    </div>

                                    {/* ที่อยู่ */}
                                    <p className="text-gray-500 text-sm">
                                             📍 {about.location}
                                    </p>
                           </div>
                  </section>
         );
}

export default Hero;