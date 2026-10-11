// ============================================
// SKILLS — แสดงทักษะ + Progress Bar
// ============================================

import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch(() => setSkills([]));
  }, []);

  // Group โดย category
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          ⚡ Skills
        </h2>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              {category}
            </h3>
            <div className="space-y-3">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;