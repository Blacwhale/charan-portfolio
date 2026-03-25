import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Facebook,
  FileText, 
  Globe, 
  Instagram,
  Layers, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Terminal,
  ChevronRight,
  Briefcase,
  User,
  Zap,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  GraduationCap,
  Award
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCES, SOCIAL_LINKS, EDUCATION, CERTIFICATIONS } from './constants';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const toggleProject = (idx: number) => {
    setExpandedProject(expandedProject === idx ? null : idx);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-navy-black text-text-main' : 'bg-gray-50 text-gray-900'}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-navy-black/80 border-white/5' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tighter"
          >
            SRI<span className="text-accent-gold">CHARAN</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Resume'].map((item) => (
              <a 
                key={item} 
                href={item === 'Resume' ? `${import.meta.env.BASE_URL}Resume.pdf` : `#${item.toLowerCase()}`}
                {...(item === 'Resume' ? { download: true } : {})}
                className={`transition-colors duration-300 ${isDarkMode ? 'hover:text-accent-gold' : 'hover:text-accent-indigo'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              download
              className={`hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border shadow-lg ${isDarkMode ? 'bg-accent-gold border-accent-gold text-navy-black hover:bg-transparent hover:text-accent-gold shadow-accent-gold/20' : 'bg-accent-indigo border-accent-indigo text-white hover:bg-transparent hover:text-accent-indigo shadow-accent-indigo/20'}`}
            >
              <FileText size={14} />
              <span>Get Resume</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-indigo/10 blur-[120px] rounded-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl flex flex-col items-center"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-10"
            >

             <div className="flex justify-center items-center"></div>
             <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-yellow-500 overflow-hidden shadow-lg">
                <img
                   src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Sricharan L R G"
                  className="w-full h-full object-cover"
                    />
              </div>
            </motion.div>

            <h2 className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-6">Software Engineer</h2>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 tracking-tight leading-tight">
              Sricharan <br />
              <span className="text-accent-gold italic">L.R.G</span>
            </h1>
            
            <div className="w-24 h-[1px] bg-accent-gold mx-auto mb-8 opacity-50" />
            
            <p className={`text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-12 ${isDarkMode ? 'text-text-main/80' : 'text-gray-600'}`}>
              Building scalable and efficient software solutions with precision and elegance.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className={`px-10 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] transition-all duration-500 border-2 shadow-2xl ${isDarkMode? 'bg-accent-gold border-accent-gold text-navy-black hover:bg-transparent hover:text-accent-gold shadow-accent-gold/20': 'bg-accent-gold border-accent-gold text-navy-black hover:bg-transparent hover:text-accent-gold shadow-accent-gold/20'}`}
                >
                View Projects
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`${import.meta.env.BASE_URL}Resume.pdf`} download
                className={`px-10 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] transition-all duration-500 border-2 shadow-2xl ${isDarkMode? 'bg-accent-gold border-accent-gold text-navy-black hover:bg-transparent hover:text-accent-gold shadow-accent-gold/20': 'bg-accent-gold border-accent-gold text-navy-black hover:bg-transparent hover:text-accent-gold shadow-accent-gold/20'}`}
              >
                Get Resume
              </motion.a>

              <motion.div className="flex items-center space-x-6 ml-4">
                {[
                  { icon: Facebook, href: SOCIAL_LINKS.facebook },
                  { icon: Instagram, href: SOCIAL_LINKS.instagram },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Mail, href: SOCIAL_LINKS.email }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, color: '#C9A227' }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDarkMode ? 'text-text-main/60' : 'text-gray-400'}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent-gold/40"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent-gold to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                  The <span className="text-accent-gold italic">Vision</span>
                </h2>
                <div className={`p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-md border ${isDarkMode ? 'bg-surface/40 border-white/5' : 'bg-white/60 border-gray-200 shadow-xl'}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-indigo/10 blur-3xl rounded-full" />
                  <p className={`text-lg md:text-xl leading-relaxed font-light ${isDarkMode ? 'text-text-main/90' : 'text-gray-700'}`}>
                    Fresher Software Engineer with hands-on experience in full-stack development and strong foundations in data structures and software engineering principles. 
                    <br /><br />
                    Focused on building scalable, efficient, and reliable systems that solve real-world problems through elegant code and robust architecture.
                  </p>
                  
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                    className="mt-10 inline-flex items-center space-x-3 text-accent-gold font-bold uppercase tracking-[0.2em] text-[10px] group"
                  >
                    <span>Download Full CV</span>
                    <FileText size={16} className="group-hover:rotate-12 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { label: "Experience", value: "Fresher", icon: Briefcase },
                  { label: "Projects", value: "4", icon: Layers },
                  { label: "Focus", value: "Scalability", icon: Zap },
                  { label: "Role", value: "Software Engineer", icon: User }
                ].map((stat, i) => (
                  <div key={i} className={`p-6 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'border-white/5 bg-surface/20 hover:border-accent-gold/30' : 'border-gray-200 bg-white hover:border-accent-indigo/30 shadow-sm'}`}>
                    <stat.icon className="text-accent-gold mb-4" size={24} />
                    <div className="text-2xl font-serif font-bold mb-1">{stat.value}</div>
                    <div className={`text-xs uppercase tracking-widest font-bold ${isDarkMode ? 'text-text-main/40' : 'text-gray-400'}`}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-32 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-surface/30' : 'bg-gray-100'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Technical <span className="text-accent-gold italic">Arsenal</span></h2>
                <p className={`tracking-widest uppercase text-xs font-bold ${isDarkMode ? 'text-text-main/60' : 'text-gray-500'}`}>Expertise across the stack</p>
              </div>
              <a 
                href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                className="flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-widest text-xs group"
              >
                <span>Full Skill Matrix</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group p-8 rounded-3xl transition-all duration-500 shadow-2xl border ${isDarkMode ? 'bg-navy-black border-white/5 hover:border-accent-gold/50' : 'bg-white border-gray-100 hover:border-accent-indigo/50'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${isDarkMode ? 'bg-surface group-hover:bg-accent-gold/10' : 'bg-gray-50 group-hover:bg-accent-indigo/10'}`}>
                    {idx === 0 && <Terminal className="text-accent-gold" size={24} />}
                    {idx === 1 && <Globe className="text-accent-gold" size={24} />}
                    {idx === 2 && <Code2 className="text-accent-gold" size={24} />}
                    {idx === 3 && <Database className="text-accent-gold" size={24} />}
                    {idx === 4 && <Cpu className="text-accent-gold" size={24} />}
                  </div>
                  <h3 className="text-lg font-bold mb-4 tracking-tight">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className={`text-sm flex items-center space-x-2 ${isDarkMode ? 'text-text-main/60' : 'text-gray-500'}`}>
                        <div className="w-1 h-1 rounded-full bg-accent-gold/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured <span className="text-accent-gold italic">Creations</span></h2>
                <p className={`tracking-widest uppercase text-xs font-bold ${isDarkMode ? 'text-text-main/60' : 'text-gray-500'}`}>Showcasing engineering excellence</p>
              </div>
              <div className="flex items-center space-x-8">
                <a 
                  href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                  className="hidden lg:flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-widest text-xs group"
                >
                  <span>Project Documentation</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-widest text-xs group">
                  <span>View all projects</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={expandedProject === null ? { y: -12, scale: 1.02 } : {}}
                  className={`group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${isDarkMode ? 'bg-surface/40 border-white/5 hover:border-accent-gold/40 hover:shadow-[0_30px_60px_rgba(201,162,39,0.1)]' : 'bg-white border-gray-200 hover:border-accent-indigo/40 hover:shadow-[0_30px_60px_rgba(79,70,229,0.1)]'} ${expandedProject === idx ? (isDarkMode ? 'border-accent-gold/40 shadow-[0_30px_60px_rgba(201,162,39,0.1)]' : 'border-accent-indigo/40 shadow-[0_30px_60px_rgba(79,70,229,0.1)]') : ''}`}
                >
                  {/* Luxury Overlay Effect */}
                  <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${expandedProject === idx ? (isDarkMode ? 'bg-accent-gold/[0.05]' : 'bg-accent-indigo/[0.02]') : (isDarkMode ? 'group-hover:bg-accent-gold/[0.03]' : 'group-hover:bg-accent-indigo/[0.01]')}`} />
                  
                  <div className="p-10 flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className={`p-4 rounded-2xl border transition-colors ${isDarkMode ? 'bg-navy-black border-white/10' : 'bg-gray-50 border-gray-200'} ${expandedProject === idx ? (isDarkMode ? 'border-accent-gold/30' : 'border-accent-indigo/30') : (isDarkMode ? 'group-hover:border-accent-gold/30' : 'group-hover:border-accent-indigo/30')}`}>
                        <Code2 className="text-accent-gold" size={24} />
                      </div>
                    </div>

                    <h3 className={`text-3xl font-serif font-bold mb-5 tracking-tight transition-colors duration-300 ${expandedProject === idx ? (isDarkMode ? 'text-accent-gold' : 'text-accent-indigo') : (isDarkMode ? 'group-hover:text-accent-gold' : 'group-hover:text-accent-indigo')}`}>{project.title}</h3>
                    <p className={`text-base leading-relaxed mb-10 font-light tracking-wide italic opacity-80 ${isDarkMode ? 'text-text-main/50' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-5 mb-10">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className={`p-5 rounded-3xl border transition-colors ${isDarkMode ? 'bg-navy-black/40 border-white/5' : 'bg-gray-50 border-gray-100'} ${expandedProject === idx ? (isDarkMode ? 'border-accent-gold/20' : 'border-accent-indigo/20') : (isDarkMode ? 'group-hover:border-accent-gold/20' : 'group-hover:border-accent-indigo/20')}`}>
                          <div className="text-2xl font-serif font-bold text-accent-gold mb-1">{metric.value}</div>
                          <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isDarkMode ? 'text-text-main/30' : 'text-gray-400'}`}>{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <AnimatePresence>
                      {expandedProject === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className={`pt-4 pb-8 border-t mt-4 ${isDarkMode ? 'border-white/5' : 'border-gray-100'}`}>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-4">In-Depth Analysis</h4>
                            <p className={`text-sm leading-relaxed font-light tracking-wide ${isDarkMode ? 'text-text-main/60' : 'text-gray-600'}`}>
                              {project.extendedDescription}
                            </p>
                            
                            <motion.a
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              href="#contact"
                              className="mt-8 inline-flex items-center space-x-3 px-6 py-3 bg-accent-gold text-navy-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-accent-gold/20"
                            >
                              <span>Contact for Live Demo</span>
                              <MessageSquare size={14} />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] border transition-colors ${isDarkMode ? 'bg-surface/60 text-text-main/40 border-white/5' : 'bg-gray-50 text-gray-500 border-gray-100'} ${expandedProject === idx ? (isDarkMode ? 'border-accent-gold/10' : 'border-accent-indigo/10') : (isDarkMode ? 'group-hover:border-accent-gold/10' : 'group-hover:border-accent-indigo/10')}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleProject(idx)}
                      className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold group/btn"
                    >
                      <span>{expandedProject === idx ? 'Collapse Details' : 'Read More'}</span>
                      {expandedProject === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />}
                    </button>
                  </div>
                  
                  <div className={`h-1.5 w-full bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent transition-opacity duration-700 ${expandedProject === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-32 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-surface/30' : 'bg-gray-100'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Professional <span className="text-accent-gold italic">Journey</span></h2>
                <p className={`tracking-widest uppercase text-xs font-bold ${isDarkMode ? 'text-text-main/60' : 'text-gray-500'}`}>The path of growth</p>
              </div>
              <a 
                href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                className="flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-widest text-xs group"
              >
                <span>Request Full Resume</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12 border-l border-accent-gold/20"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-gold shadow-[0_0_15px_rgba(201,162,39,0.5)]" />
                  
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-serif font-bold">{exp.role}</h3>
                    <span className="text-accent-gold font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-accent-indigo font-bold text-lg mb-6">{exp.company}</div>
                  
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className={`leading-relaxed flex items-start space-x-4 ${isDarkMode ? 'text-text-main/70' : 'text-gray-600'}`}>
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 flex items-center justify-center">
                      <GraduationCap className="text-accent-gold" size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold tracking-tight">Academic <span className="text-accent-gold italic">Foundation</span></h2>
                  </div>
                  <a 
                    href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                    className="hidden lg:flex items-center space-x-2 text-accent-gold font-bold uppercase tracking-[0.2em] text-[10px] group"
                  >
                    <span>Get Full Resume</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <div className="space-y-8">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-surface/20 border-white/5' : 'bg-white border-gray-200 shadow-sm'}`}>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-accent-indigo font-bold mb-2">{edu.major}</div>
                      <div className={`text-sm mb-4 ${isDarkMode ? 'text-text-main/60' : 'text-gray-500'}`}>{edu.institution}</div>
                      <div className="text-accent-gold font-bold text-lg">{edu.score}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 flex items-center justify-center">
                    <Award className="text-accent-gold" size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold tracking-tight">Professional <span className="text-accent-gold italic">Distinctions</span></h2>
                </div>
                
                <div className="space-y-6">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className={`p-6 rounded-2xl border flex items-center space-x-6 transition-all duration-300 hover:border-accent-gold/30 ${isDarkMode ? 'bg-surface/20 border-white/5' : 'bg-white border-gray-200 shadow-sm'}`}>
                      <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                      <span className="text-lg font-medium tracking-wide">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden backdrop-blur-md border ${isDarkMode ? 'bg-surface/40 border-white/5' : 'bg-white border-gray-200 shadow-2xl'}`}>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-indigo/5 to-transparent -z-10" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-gold/5 blur-[100px] rounded-full" />
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to build something <br /><span className="text-accent-gold italic">Extraordinary?</span></h2>
              <p className={`text-xl mb-12 max-w-2xl mx-auto font-light ${isDarkMode ? 'text-text-main/60' : 'text-gray-600'}`}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:sricharanlrg@gmail.com"
                  className="px-10 py-5 bg-accent-gold text-navy-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all duration-300 shadow-xl shadow-accent-gold/20"
                >
                  Send an Email
                </a>
                <a 
                  href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                  className={`px-10 py-5 border rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${isDarkMode ? 'border-white/10 hover:border-accent-gold/50' : 'border-gray-200 hover:border-accent-indigo/50'}`}
                >
                  Get Resume
                </a>
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-10 py-5 border rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${isDarkMode ? 'border-white/10 hover:border-accent-gold/50' : 'border-gray-200 hover:border-accent-indigo/50'}`}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent-gold mb-8 flex justify-center">
                <Zap size={40} className="opacity-20" />
              </div>
              <blockquote className="text-3xl md:text-4xl font-serif italic font-light leading-relaxed mb-8">
                “A bird doesn’t fly when it opens its wings—it flies when it crosses the bridge of fear.”
              </blockquote>
              <cite className="text-accent-gold font-bold uppercase tracking-[0.3em] text-sm not-italic block mb-12">
                — Charan
              </cite>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
                className={`px-10 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] transition-all duration-500 border-2 ${isDarkMode ? 'border-white/10 text-text-main hover:border-accent-gold hover:text-accent-gold' : 'border-gray-200 text-gray-900 hover:border-accent-indigo hover:text-accent-indigo'}`}
              >
                Request Full Portfolio
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif font-bold">
            SRI<span className="text-accent-gold">CHARAN</span>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className={`text-xs font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-text-main/40' : 'text-gray-400'}`}>
              © 2026 Sricharan L.R.G. All rights reserved.
            </div>
            <a 
              href="mailto:sricharanlrg@gmail.com?subject=Resume Request"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold hover:opacity-70 transition-opacity"
            >
              Get Full Resume
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            {[
              { icon: Facebook, href: SOCIAL_LINKS.facebook },
              { icon: Instagram, href: SOCIAL_LINKS.instagram },
              { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
              { icon: Mail, href: SOCIAL_LINKS.email }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-text-main/40 hover:text-accent-gold' : 'text-gray-400 hover:text-accent-indigo'}`}>
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
