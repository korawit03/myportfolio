// ============================================
// APP — รวมทุก Component
// ============================================

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;