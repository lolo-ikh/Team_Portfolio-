import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Mail, ArrowUpRight, Globe, Code, Cpu, Layers } from 'lucide-react';

/**
 * TEAM PORTFOLIO: LEENA & AYA (ENSIA 3RD YEAR)
 * Theme: Modern Brutalist / Visual Poetry
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Placeholder for Aya's processed image based on the upload
  const ayaStyledImage = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000"; 
  // Note: For the real site, you'll use the base64 or hosted link of the edited photo I provided.

  const HomePage = () => (
    <>
      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6 md:mb-8 uppercase tracking-tighter">
              tech <br /> duo
            </h1>
            
            <div className="max-w-md mb-8 md:mb-10">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Third-year AI Engineering students at <span className="font-bold text-black underline decoration-yellow-400 underline-offset-4">ENSIA</span>. 
                Bridging the gap between intelligent algorithms and immersive user experiences.
              </p>
              
              <div className="flex gap-4 mb-10">
                {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
              <div>
                <span className="text-3xl md:text-4xl font-bold block italic underline decoration-yellow-300">3rd</span>
                <p className="text-[10px] uppercase text-gray-400 font-black leading-tight mt-1">
                  Year @ ENSIA School
                </p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold block">15+</span>
                <p className="text-[10px] uppercase text-gray-400 font-black leading-tight mt-1">
                  Collaborative Works
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Leena's Card */}
          <div 
            onClick={() => setCurrentPage('leena')}
            className="lg:col-span-7 relative group cursor-pointer order-1 lg:order-2"
          >
            <div className="bg-[#FFB800] rounded-[40px] md:rounded-[60px] overflow-hidden relative aspect-[4/5] lg:h-[650px] w-full shadow-2xl transition-all duration-700 hover:rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Leena Ikhlef" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 contrast-125 transition-all duration-700"
              />
              
              <div className="absolute top-8 left-8 text-white z-10">
                <p className="font-serif italic text-4xl md:text-6xl drop-shadow-lg">Leena Ikhlef</p>
                <div className="h-1 w-20 bg-white mt-2 group-hover:w-40 transition-all duration-500"></div>
              </div>

              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-black group-hover:text-white transition-all scale-90 group-hover:scale-110">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- MARQUEE --- */}
      <div className="mt-16 md:mt-24 py-10 overflow-hidden bg-black text-white">
        <div className="whitespace-nowrap animate-marquee flex gap-10">
          {[1,2,3].map((i) => (
            <span key={i} className="text-6xl md:text-9xl font-black uppercase flex items-center gap-10">
              ENSIA AI <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
              PORTFOLIO <span className="w-4 h-4 bg-white rounded-full"></span>
            </span>
          ))}
        </div>
      </div>

      {/* --- AYA'S SECTION (Styled with Uploaded Image Theme) --- */}
      <section className="bg-white py-16 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <div 
            onClick={() => setCurrentPage('aya')}
            className="relative cursor-pointer group order-2 lg:order-1"
          >
            {/* The Yellow "Styled" Box for Aya */}
            <div className="bg-[#FFD600] rounded-[60px] md:rounded-[100px] w-full aspect-square max-w-[550px] mx-auto overflow-hidden relative shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              {/* This represents the processed 'Aya' photo */}
              <img 
                src={ayaStyledImage} 
                alt="Aya Hoggas" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 contrast-125 group-hover:opacity-100 transition-all"
              />
              
              <div className="absolute top-10 left-10">
                 <h2 className="text-white text-5xl md:text-8xl font-black drop-shadow-2xl opacity-40">AYA.</h2>
              </div>
              
              <div className="absolute bottom-10 right-10 flex flex-col items-end gap-4">
                 <div className="px-4 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                   View Work
                 </div>
              </div>
            </div>
            
            {/* "FOLIO" Background Text Effect */}
            <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 -z-10 opacity-10">
              <h2 className="text-[12rem] md:text-[20rem] font-black leading-none uppercase">Aya</h2>
            </div>
          </div>

          <div className="space-y-10 md:order-2">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Project <br /> <span className="text-transparent border-b-4 border-black pb-2" style={{ WebkitTextStroke: '1px black' }}>Showcase</span>
            </h2>
            
            <div className="space-y-6">
               {[
                 { title: "Neural Network Viz", tech: "Python, D3.js", icon: <Cpu /> },
                 { title: "Responsive Portfolio", tech: "React, Tailwind", icon: <Layers /> },
                 { title: "Data Analysis Tool", tech: "R, Shiny", icon: <Code /> }
               ].map((project, idx) => (
                 <div key={idx} className="flex justify-between items-center group cursor-pointer border-b border-gray-100 pb-6 hover:bg-gray-50 p-4 transition-all rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-full group-hover:bg-yellow-400 transition-colors">
                        {project.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold uppercase tracking-tight">{project.title}</h4>
                        <p className="text-xs text-gray-400 font-mono">{project.tech}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:rotate-45 transition-all">
                       <ArrowUpRight size={16} />
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const AboutPage = ({ name, bio }) => (
    <div className="max-w-4xl mx-auto px-6 py-20 min-h-[70vh]">
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-12 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-0 active:translate-y-1"
      >
        ← Return to Gallery
      </button>
      <h2 className="text-7xl font-black uppercase mb-4 leading-none">{name}</h2>
      <div className="bg-yellow-400 h-3 w-40 mb-12"></div>
      <p className="text-xl md:text-3xl font-medium leading-tight text-gray-800 tracking-tight">
        {bio}
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-10 bg-black text-white rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
             <Globe size={150} />
          </div>
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Academic Status</h3>
          <p className="text-yellow-400 font-bold mb-1">ENSIA School of AI</p>
          <p className="text-gray-400 text-sm">National School of Artificial Intelligence, Algiers. Specializing in Deep Learning and Software Systems.</p>
        </div>
        <div className="p-10 border-4 border-black rounded-[40px] flex flex-col justify-center">
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Stack & Tools</h3>
          <div className="flex flex-wrap gap-2">
             {['React', 'Tailwind', 'Python', 'PyTorch', 'Node.js', 'Git'].map(skill => (
               <span key={skill} className="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-black uppercase">{skill}</span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans selection:bg-yellow-400 overflow-x-hidden">
      {/* --- HEADER --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b-2 border-gray-100 bg-white/95 backdrop-blur-xl sticky top-0 z-50">
        
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 border-4 border-black rounded-full group-hover:scale-90 transition-transform duration-500"></div>
            <div className="absolute inset-2 bg-yellow-400 rounded-full group-hover:translate-x-3 transition-transform duration-500"></div>
          </div>
          <span className="font-black text-2xl tracking-tighter">STUDIO.</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-gray-100 p-1.5 rounded-full border border-gray-200">
          {[
            { id: 'home', label: 'Overview' },
            { id: 'leena', label: 'Leena' },
            { id: 'aya', label: 'Aya' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-500 ${
                currentPage === link.id 
                ? 'bg-black text-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]' 
                : 'text-gray-400 hover:text-black'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 font-mono">
           <div className="bg-black text-white text-[10px] px-4 py-2 rounded-full font-bold uppercase tracking-widest hidden sm:block">
              Online Portfolio
           </div>
        </div>
      </nav>

      {/* --- CONTENT --- */}
      <div className="animate-in fade-in duration-1000">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'leena' && (
          <AboutPage 
            name="Leena Ikhlef" 
            bio="I'm an AI engineer in training, currently focused on crafting high-performance, accessible web interfaces. I enjoy turning complex data into visual stories that people actually want to interact with."
          />
        )}
        {currentPage === 'aya' && (
          <AboutPage 
            name="Aya Hoggas" 
            bio="My focus lies in the intersection of large-scale backend architectures and predictive modeling. I build systems that are as efficient as they are scalable, ensuring the 'brain' of the application is powerful and fast."
          />
        )}
      </div>

      <footer className="bg-black text-white py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
           <div className="max-w-xl">
              <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6">Let's <br /> <span className="text-yellow-400">Collaborate</span></h2>
              <p className="text-gray-400 text-lg">We're always looking for new challenges and projects to tackle. Reach out if you're looking for a fresh perspective on AI and Design.</p>
           </div>
           <div className="flex flex-col items-end gap-6 w-full md:w-auto">
              <div className="flex gap-4">
                 <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                    <Linkedin />
                 </div>
                 <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                    <Mail />
                 </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Based in Sidi Abdellah, Algeria</p>
           </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;