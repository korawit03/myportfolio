// ============================================
// PORTFOLIO DATA — แก้ข้อมูลของคุณที่นี่
// ============================================

const data = {
         // ข้อมูลส่วนตัว
         about: {
                  name: "Korawit Witthayajarupraphan",
                  title: "Frontend Developer",
                  location: "Songkhla, Thailand",
                  email: "tearooa1@gmail.com",
                  github: "https://github.com/korawit03",
                  bio: "frontend developer ที่ชอบสร้างโซลูชันด้วย React, Node.js และ Docker. ยินดีรับงาน freelance และเปิดรับการ collaborate ในโปรเจกต์ใหม่ๆ",
                  avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
         },

         //ทักษะ
         skills: [
                  { name: "React", category: "Frontend", level: 60 },
                  { name: "Tailwind CSS", category: "Frontend", level: 65 },
                  { name: "JavaScript (ES6+)", category: "Frontend", level: 55 },
                  { name: "Node.js", category: "Backend", level: 50 },
                  { name: "Express.js", category: "Backend", level: 65 },
                  { name: "MongoDB", category: "Backend", level: 70 },
                  { name: "Docker", category: "DevOps", level: 50 },
                  { name: "Git", category: "DevOps", level: 65 },
         ],
         //โปรเจกต์
         projects: [
                  {
                           id: 1,
                           title: "My Portfolio Website",
                           description: "เว็บไซต์ portfolio ของฉันที่สร้างด้วย React และ Tailwind CSS",
                           tags: ["React", "Tailwind CSS", "Express", "docker"],
                           github: "https://github.com/korawit03/portfolio",
                           demo: "http://your-domain.com",
                           image: "",
                  },
                  {
                           id: 2,
                           title: "ระบบจัดการงานร้านอลูมิเนียม",
                           description: "ระบบจัดการงานร้านอลูมิเนียมที่สร้างด้วย React, Node.js และ superbase",
                           tags: ["React", "Node.js", "superbase", "Tailwind CSS"],
                           github: "https://github.com/korawit03/Project_Web",
                           demo: "http://your-domain.com",
                           image: "",
                  },
         ],
         // ประสบการณ์การฝึกงาน
         experience: [
                  {
                           role: "service ",
                           company: "บมจ.ซินเน็ค(ประเทศไทย)จำกัด สาขา หาดใหญ",
                           period: "11 มีนาคม พ.ศ. 2024 ถึง 10 พฤษภาคม พ.ศ. 2024",
                           description: "งาน service คอมพิวเตอร์และอุปกรณ์ IT ให้กับลูกค้า",
                  },
         ],
};

export default data;

