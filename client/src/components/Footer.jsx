// ============================================
// FOOTER — ส่วนล่างสุด
// ============================================

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} — Built with React, Express & Docker
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/korawit03"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="tearooa1@gmail.com"
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;