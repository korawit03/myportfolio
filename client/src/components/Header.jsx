// ============================================
// HEADER — แถบนำทางด้านบน (Fixed)
// ============================================

function Header() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / ชื่อ (ซ้าย) */}
        <a href="#about" className="text-lg font-bold text-blue-400 shrink-0">
          &lt;Korawit /&gt;
        </a>

        {/* เมนู (ขวา) */}
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;