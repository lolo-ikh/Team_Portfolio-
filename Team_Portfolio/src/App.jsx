import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, ArrowUpRight, Globe, Code, Cpu, Layers } from 'lucide-react';

/**
 * TEAM PORTFOLIO: LEENA & AYA (ENSIA 3RD YEAR)
 * Updated with an improved minimalist header, cool hover interactions, and responsive design.
 */

const App = () => {
  // Simple state to handle page navigation within the same file
  const [currentPage, setCurrentPage] = useState('home');

  // --- SUB-COMPONENT: HOME PAGE ---
  const HomePage = () => (
    <>
      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Typography & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6 md:mb-8 uppercase tracking-tighter">
              tech <br /> duo
            </h1>
            
            <div className="max-w-md mb-8 md:mb-10">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Third-year Computer Science students at <span className="font-bold text-black underline decoration-yellow-400">ENSIA</span>. 
                We specialize in blending high-level engineering with creative digital experiences.
              </p>
              
              <div className="flex gap-4 mb-10">
                {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              <div>
                <span className="text-3xl md:text-4xl font-bold block">3rd</span>
                <p className="text-[10px] uppercase text-gray-400 font-bold leading-tight mt-1">
                  Year Students at ENSIA AI School
                </p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold block">15+</span>
                <p className="text-[10px] uppercase text-gray-400 font-bold leading-tight mt-1">
                  Collaborative Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Leena's Card (Clickable) */}
          <div 
            onClick={() => setCurrentPage('leena')}
            className="lg:col-span-7 relative group cursor-pointer order-1 lg:order-2"
          >
            <div className="bg-[#FFB800] rounded-[40px] md:rounded-[60px] overflow-hidden relative aspect-[4/5] lg:h-[650px] w-full shadow-2xl transition-all duration-500 hover:rotate-1">
              {/* Leena's Image */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Leena Ikhlef" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute top-8 left-8 text-white">
                <p className="font-serif italic text-3xl md:text-5xl drop-shadow-md">Leena Ikhlef</p>
                <span className="text-[10px] uppercase tracking-widest bg-black/20 backdrop-blur-md px-2 py-1 rounded">View Profile</span>
              </div>

              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- MARQUEE --- */}
      <div className="mt-16 md:mt-24 py-8 md:py-12 overflow-hidden bg-black text-white">
        <div className="whitespace-nowrap animate-marquee flex gap-10">
          {[1,2,3].map((i) => (
            <span key={i} className="text-6xl md:text-9xl font-black uppercase flex items-center gap-10 opacity-80">
              ENSIA STUDENTS <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
              INNOVATION <span className="w-4 h-4 bg-white rounded-full"></span>
            </span>
          ))}
        </div>
      </div>

      {/* --- AYA'S SECTION (Clickable) --- */}
      <section className="bg-white py-16 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <div 
            onClick={() => setCurrentPage('aya')}
            className="relative cursor-pointer group"
          >
            <div className="bg-[#FFD600] rounded-[60px] md:rounded-[100px] w-full aspect-square max-w-[550px] mx-auto overflow-hidden relative shadow-xl transition-all duration-500 hover:-rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000" 
                alt="Aya Hoggas" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-all"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <h2 className="text-white text-6xl md:text-8xl font-black drop-shadow-lg">AYA</h2>
                 <p className="text-white font-bold tracking-widest uppercase text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Discover Aya's Work</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 bg-black text-white px-6 py-2 rounded-full font-black text-xl md:text-2xl uppercase">
              Portfolio
            </div>
          </div>

          <div className="space-y-10 md:space-y-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Featured <br /> Projects</h2>
            
            <div className="space-y-8">
               {[
                 { title: "AI Image Classifier", tech: "Python, TensorFlow", icon: <Cpu /> },
                 { title: "E-Commerce System", tech: "React, Firebase", icon: <Layers /> },
                 { title: "Smart City WebApp", tech: "Node.js, Leaflet", icon: <Code /> }
               ].map((project, idx) => (
                 <div key={idx} className="flex justify-between items-center group cursor-pointer border-b border-gray-100 pb-6 hover:border-black transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-yellow-400 transition-colors">
                        {project.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <p className="text-sm text-gray-400">{project.tech}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="text-gray-300 group-hover:text-black transition-colors" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // --- SUB-COMPONENT: INDIVIDUAL ABOUT PAGE ---
  const AboutPage = ({ name, bio }) => (
    <div className="max-w-4xl mx-auto px-6 py-20 min-h-[70vh]">
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-12 flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all"
      >
        ← Back to Team
      </button>
      <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">{name}</h2>
      <div className="bg-yellow-400 h-2 w-32 mb-12"></div>
      <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
        {bio}
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-black text-white rounded-3xl">
          <h3 className="text-xl font-bold mb-4 uppercase">Education</h3>
          <p>ENSIA - National Higher School of Artificial Intelligence</p>
          <p className="text-gray-400">3rd Year Student</p>
        </div>
        <div className="p-8 border-2 border-black rounded-3xl">
          <h3 className="text-xl font-bold mb-4 uppercase">Skills</h3>
          <p>Full-stack Development, Machine Learning, UI/UX Design</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-black font-sans selection:bg-yellow-400">
      {/* --- IMPROVED HEADER --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 md:py-8 border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        
        {/* LOGO: Minimal Circles */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setCurrentPage('home')}
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 border-2 border-black rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute inset-2 bg-yellow-400 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
          </div>
          <span className="font-black text-xl tracking-tighter">LA.</span>
        </div>

        {/* NAV LINKS: Cool Hover Pill Effect */}
        <div className="hidden md:flex items-center gap-1 bg-gray-50 p-1.5 rounded-full border border-gray-100">
          {[
            { id: 'home', label: 'Home' },
            { id: 'leena', label: 'Leena' },
            { id: 'aya', label: 'Aya' },
            { id: 'projects', label: 'Projects' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => link.id !== 'projects' && setCurrentPage(link.id)}
              className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                currentPage === link.id 
                ? 'bg-black text-white shadow-lg' 
                : 'text-gray-500 hover:text-black hover:bg-white hover:shadow-sm'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* STATUS BADGE */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[9px] bg-black text-white px-4 py-2 rounded-full font-black uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            ENSIA '26
          </div>
          <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 bg-black rounded-full">
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* --- DYNAMIC CONTENT --- */}
      <div className="transition-opacity duration-300">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'leena' && (
          <AboutPage 
            name="Leena Ikhlef" 
            bio="I am a passionate 3rd-year student at ENSIA with a focus on Frontend Architecture and AI integration. I believe that technology should not only work perfectly but also look beautiful and provide a seamless user experience."
          />
        )}
        {currentPage === 'aya' && (
          <AboutPage 
            name="Aya Hoggas" 
            bio="Specializing in Backend systems and Data Engineering at ENSIA. I love solving complex logical puzzles and building the robust infrastructures that power modern web applications. Currently exploring the intersection of AI and cloud computing."
          />
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-left">
              <p className="font-black text-2xl mb-2">Let's build together.</p>
              <p className="text-gray-400 text-sm">ENSIA National School of AI, Algeria.</p>
           </div>
           <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <Mail size={20} />
              </button>
              <button className="px-8 py-3 bg-black text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all">
                Hire Us
              </button>
           </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-50">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-300">
            © 2026 LA — Leena & Aya — AI Engineering Duo
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;