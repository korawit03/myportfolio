// ============================================
// EXPERIENCE — แสดงประวัติทำงาน
// ============================================

import { useEffect, useState } from "react";

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch(() => setExperience([]));
  }, []);

  // ถ้าไม่มีข้อมูล → ไม่แสดง section
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          💼 Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-700 ml-4 space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8">
              {/* จุดบน timeline */}
              <div className="absolute-left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950" />

              <div className="space-y-1">
                <p className="text-xs text-gray-500">{item.period}</p>
                <h3 className="text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-blue-400 text-sm">{item.company}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;