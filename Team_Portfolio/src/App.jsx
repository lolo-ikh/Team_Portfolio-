import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Mail, ArrowUpRight, Globe, Code, Cpu, Layers } from 'lucide-react';
import leenaImg from './assets/5807465799550176852.jpg';
import ayaImg from './assets/5796280446282221570.jpg';

/**
 * TEAM PORTFOLIO: LEENA & AYA (ENSIA 3RD YEAR)
 * Theme: Modern Brutalist / Visual Poetry
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Placeholder for Aya's processed image based on the upload
  const ayaStyledImage = ayaImg;
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
                src={leenaImg}
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
          {[1, 2, 3].map((i) => (
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
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
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

  const AboutPage = ({ name, bio, role = "Specializing in Deep Learning and Software Systems.", extraSkills = [] }) => (
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
          <p className="text-gray-400 text-sm">National School of Artificial Intelligence, Algiers. {role}</p>
        </div>
        <div className="p-10 border-4 border-black rounded-[40px] flex flex-col justify-center">
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Stack & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Tailwind', 'Python', 'PyTorch', 'Node.js', 'Git', ...extraSkills].map(skill => (
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
      {/* --- REIMAGINED HEADER --- */}
      {/* --- REIMAGINED HEADER --- */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full px-6 py-4 flex items-center gap-4 md:gap-12 max-w-5xl w-full justify-between pointer-events-auto">

          {/* Logo */}
          <div
            className="flex items-center gap-3 px-2 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-sm group-hover:bg-yellow-400 group-hover:text-black transition-colors">
              LA
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">STUDIO.</span>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-2 md:gap-4 bg-gray-100/50 rounded-full p-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'leena', label: 'Leena' },
              { id: 'aya', label: 'Aya' },
              { id: 'projects', label: 'Projects' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${currentPage === link.id
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'text-gray-500 hover:text-black hover:bg-white/50'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action */}
          <button className="hidden sm:flex items-center gap-3 px-6 md:px-8 py-3 bg-black text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Hire Us
          </button>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-32"></div>

      {/* --- CONTENT --- */}
      <div className="animate-in fade-in duration-1000">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'leena' && (
          <AboutPage
            name="Leena Ikhlef"
            bio="I'm an AI engineer in training and the Secretary General at EBEC. Passionate about automating everyday tasks with AI to facilitate life, and deeply interested in Cybersecurity. My focus is on crafting high-performance interfaces and turning complex data into visual stories."
            role="Secretary General at EBEC. Specializing in Automation & Cybersecurity."
            extraSkills={['Security', 'Automation', 'UI/UX']}
          />
        )}
        {currentPage === 'aya' && (
          <AboutPage
            name="Aya Hoggas"
            bio="My focus lies in the intersection of large-scale backend architectures and predictive modeling. I build systems that are as efficient as they are scalable, ensuring the 'brain' of the application is powerful and fast."
          />
        )}
        {currentPage === 'projects' && (
          <div className="max-w-7xl mx-auto px-6 py-12 min-h-[70vh]">
            <h1 className="text-6xl md:text-9xl font-black uppercase mb-12 tracking-tighter">Selected <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Projects</span></h1>

            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  title: "Khedmni",
                  desc: "A comprehensive platform connecting students with freelance opportunities.",
                  authors: ["Leena", "Aya"],
                  tags: ["Flutter", "UI/UX", "Firebase"],
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
                  link: "#"
                },
                {
                  title: "SG Helper",
                  desc: "A digital organization tool developed for my role as Secretary General at EBEC to streamline event management.",
                  authors: ["Leena"],
                  tags: ["React Native", "Node.js"],
                  image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
                  link: "https://lolo-ikh.github.io/SG_Helper/"
                },
                {
                  title: "Honeypot",
                  desc: "A cybersecurity simulation designed to detect, deflect, or counteract attempts at unauthorized use of information systems.",
                  authors: ["Leena"],
                  tags: ["Security", "Network", "Python"],
                  image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
                  link: "https://github.com/lolo-ikh/Honeypot"
                },
                {
                  title: "AI Crop Predictor",
                  desc: "Machine learning model to predict optimal crop yields based on soil data.",
                  authors: ["Leena", "Aya"],
                  tags: ["Python", "Scikit-Learn", "Flask"],
                  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000",
                  link: "#"
                }
              ].map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-t-2 border-black pt-8 pb-12 transition-all hover:bg-gray-50 px-4 md:px-8 rounded-3xl block no-underline text-black"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-8 md:items-center">
                    <div className="md:w-1/2">
                      <div className="flex gap-2 mb-4">
                        {project.authors.map(author => (
                          <span key={author} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${author === 'Leena' ? 'bg-black text-white border-black' : 'bg-yellow-400 text-black border-yellow-400'}`}>
                            {author}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black uppercase mb-4 group-hover:translate-x-4 transition-transform duration-500">{project.title}</h3>
                      <p className="text-gray-500 text-lg md:text-xl max-w-md">{project.desc}</p>
                      <div className="flex gap-3 mt-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono text-gray-400">#{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/3 aspect-video overflow-hidden rounded-2xl bg-gray-200 relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-black text-white py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6">Let's <br /> <span className="text-yellow-400">Collaborate</span></h2>
            <p className="text-gray-400 text-lg">We're always looking for new challenges and projects to tackle. Reach out if you're looking for a fresh perspective on AI and Design.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 w-full md:w-auto">
            {/* Leena's Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Leena</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Aya's Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Aya</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                  <Mail size={20} />
                </a>
              </div>
            </div>
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