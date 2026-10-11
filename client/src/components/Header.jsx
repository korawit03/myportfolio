// ============================================
// HEADER — แถบนำทางด้านบน (Fixed)
// ============================================

function Header() {
         const links = ["About", "Skills", "Projects", "Experience"];

         return (
                  <header classname="fixed top-0 left-0 right-0 z-0 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
                           <nav classname="max-w-6xl mx-auto flex item-center justify-between px-6 py-4">
                                    {/* Logo / ชื่อ */}
                                    <a href="/client/src/assets/n.jpgs" classname = "text-xl font-bold text-blue-400">
                                             &lt;Korawit Witthayajarupraphan /&gt;
                                    </a>
                                    {/* เมนู */}
                                    <ul className="flex gap-6">
                                        {links.map((link) => (
                                             <li key={link}>
                                                      <a href={'#${liink.toLowerCase()}'} 
                                                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                                                               {link}
                                                      </a>
                                             </li>
                                        ))}   
                                    </ul>
                           </nav>
                  </header>
         )
};
export default Header;