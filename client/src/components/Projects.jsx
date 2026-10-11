// ============================================
// PROJECTS — แสดงโปรเจกต์เป็น Card
// ============================================

import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          🚀 Projects
        </h2>

        {/* Grid: 1 คอลัมน์ (mobile) → 2 คอลัมน์ (tablet) → 3 คอลัมน์ (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors group"
            >
              {/* รูปภาพ (ถ้ามี) */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              )}

              {/* เนื้อหา */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ลิงก์ */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      → GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      → Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;