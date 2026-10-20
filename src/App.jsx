import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDownRight, ArrowUpRight, Code2, Github, Linkedin, Mail, Menu, Terminal,
  Cpu, ShieldCheck, Layers3, ExternalLink, Download, X, Sparkles, Zap, Gamepad2
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    title: 'Student Management System',
    category: 'C • DSA • FILE HANDLING',
    description: 'A console-based student record manager with create, search, update, delete, and file persistence features.',
    tags: ['C Programming', 'Linked Lists', 'File I/O'],
    github: 'https://github.com/lakshitpareek0/student-management-system-c',
    accent: 'lime'
  },
  {
    number: '02',
    title: 'Email Spam Detection',
    category: 'MACHINE LEARNING',
    description: 'A machine-learning project exploring text classification to distinguish spam messages from legitimate communication.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/',
    accent: 'violet'
  },
  {
    number: '03',
    title: 'Cloud Web App',
    category: 'AWS • FLASK • MARIADB',
    description: 'A cloud deployment concept using a Flask form, a MariaDB database, and a segmented AWS network architecture.',
    tags: ['AWS', 'Flask', 'MariaDB'],
    github: 'https://github.com/',
    accent: 'cyan'
  }
]

const skillGroups = [
  { icon: Code2, title: 'Programming', items: ['C', 'Python', 'JavaScript basics', 'SQL'] },
  { icon: Layers3, title: 'Web & Data', items: ['HTML / CSS', 'React fundamentals', 'MySQL', 'Pandas / NumPy'] },
  { icon: ShieldCheck, title: 'Cyber & Cloud', items: ['Cyber Security fundamentals', 'AWS services', 'Linux basics', 'Networking concepts'] },
  { icon: Cpu, title: 'Core CS', items: ['Data Structures', 'DBMS', 'Operating Systems', 'Algorithms'] }
]

function CyberOrb() {
  const group = useRef()
  const core = useRef()
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.16
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12
    }
    if (core.current) core.current.rotation.z -= delta * 0.2
  })
  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.45}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.15, 5]} />
          <MeshDistortMaterial color="#b8ff55" emissive="#315b11" emissiveIntensity={0.55} roughness={0.23} metalness={0.72} distort={0.28} speed={1.5} />
        </mesh>
      </Float>
      <mesh rotation={[0.8, 0.25, 0.15]}>
        <torusGeometry args={[1.72, 0.012, 12, 180]} />
        <meshBasicMaterial color="#b8ff55" />
      </mesh>
      <mesh rotation={[1.18, 0.5, 0.8]}>
        <torusGeometry args={[1.95, 0.008, 8, 180]} />
        <meshBasicMaterial color="#6de7ff" />
      </mesh>
      <mesh rotation={[0.25, 1.1, 0.4]}>
        <torusGeometry args={[1.48, 0.008, 8, 180]} />
        <meshBasicMaterial color="#b8ff55" transparent opacity={0.5} />
      </mesh>
      <mesh position={[1.62, 0.55, 0.25]}>
        <octahedronGeometry args={[0.12, 0]} />
        <meshBasicMaterial color="#6de7ff" />
      </mesh>
      <mesh position={[-1.6, -0.5, 0.15]}>
        <octahedronGeometry args={[0.08, 0]} />
        <meshBasicMaterial color="#b8ff55" />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 2, 4]} intensity={22} color="#b8ff55" />
        <pointLight position={[-3, -2, 2]} intensity={10} color="#6de7ff" />
        <Suspense fallback={null}>
          <Stars radius={65} depth={35} count={850} factor={2.2} saturation={0} fade speed={0.3} />
          <CyberOrb />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']]
  return (
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Go to home"><span className="brand-mark">L<span>.</span></span><span>LAKSHIT<span className="brand-muted">/DEV</span></span></a>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>LET'S TALK <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  )
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>
}

function App() {
  const root = useRef(null)
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 26, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.15 })
      gsap.from('.hero-visual', { opacity: 0, scale: 0.88, duration: 1.2, ease: 'power3.out', delay: 0.25 })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 42, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', toggleActions: 'play none none reverse' }
        })
      })
      gsap.utils.toArray('.story-panel').forEach((el, i) => {
        gsap.fromTo(el, { x: i % 2 === 0 ? -30 : 30, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' }
        })
      })
      gsap.to('.about-orbit', {
        rotate: 360, ease: 'none',
        scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1 }
      })
      gsap.to('.progress-fill', {
        width: '100%', ease: 'none',
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.4 }
      })
      gsap.to('.hero-visual', {
        y: 120, scale: 0.88, opacity: 0.35, ease: 'none',
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.8 }
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} className="app-shell">
      <div className="progress-track"><div className="progress-fill" /></div>
      <div className="ambient-grid" aria-hidden="true" />
      <Nav />

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> AVAILABLE FOR INTERNSHIPS & COLLABORATIONS</div>
            <p className="eyebrow">COMPUTER SCIENCE ENGINEERING <span> / </span> CYBER SECURITY</p>
            <h1>Building the<br /><span className="outline-text">digital</span> <span className="lime-text">unknown.</span></h1>
            <p className="hero-description">I'm <strong>Lakshit Pareek</strong> — a CSE student exploring code, cloud, and cyber security. I turn curiosity into projects and ideas into working systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">EXPLORE MY WORK <ArrowDownRight size={16} /></a>
              <a className="button button-ghost" href="#contact">GET IN TOUCH <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-number">03<span>+</span></span><span className="meta-label">PROJECT CONCEPTS</span></div>
              <div><span className="meta-number">∞</span><span className="meta-label">THINGS TO LEARN</span></div>
              <div><span className="meta-number">01</span><span className="meta-label">CURIOSITY ENGINE</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-topline"><span>FIG. 001 / CORE SYSTEM</span><span>ONLINE <i className="tiny-dot" /></span></div>
            <Scene />
            <div className="orb-caption"><span className="caption-line" /> <div><b>CORE // 01</b><small>CURIOUS BY DESIGN</small></div></div>
            <div className="coordinate coord-a">26°N<br />75°E</div>
            <div className="coordinate coord-b">SYS.STATUS<br /><span>EXPLORING</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
          <div className="hero-index">PORTFOLIO / {year}</div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="section-heading reveal">
            <SectionLabel number="01">THE HUMAN BEHIND THE CODE</SectionLabel>
            <h2>Not just writing code.<br /><span className="muted-heading">Learning how systems think.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-art reveal">
              <div className="about-orbit orbit-one" /><div className="about-orbit orbit-two" /><div className="about-orbit orbit-three" />
              <div className="about-core"><Terminal size={44} strokeWidth={1.2} /><span>HELLO_WORLD</span></div>
              <span className="art-tag art-tag-top">IDENTITY / 001</span><span className="art-tag art-tag-bottom">STAY CURIOUS_</span>
            </div>
            <div className="about-copy">
              <div className="story-panel">
                <span className="story-index">A / ORIGIN</span>
                <p>I'm a Computer Science & Engineering student at <strong>JK Lakshmipat University</strong>, building a strong foundation in programming, data structures, databases, and software development.</p>
              </div>
              <div className="story-panel">
                <span className="story-index">B / DIRECTION</span>
                <p>My specialization in <strong>Cyber Security</strong> pushes me to understand what happens beneath the interface — how applications work, how systems communicate, and how they can be made more secure.</p>
              </div>
              <div className="story-panel">
                <span className="story-index">C / OUTSIDE THE TERMINAL</span>
                <p>I enjoy collaborating on college events, playing volleyball, and exploring gaming communities. Teamwork and event coordination have taught me to think fast and execute together.</p>
              </div>
              <a href="#journey" className="text-link">MORE OF MY JOURNEY <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad skills-section">
          <div className="section-heading reveal">
            <SectionLabel number="02">MY TOOLKIT</SectionLabel>
            <h2>Curiosity is the skill.<br /><span className="muted-heading">These are my tools.</span></h2>
            <p className="section-intro">A growing toolkit built through coursework, projects, and hands-on exploration. I keep learning, testing, and improving.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon
              return <article className="skill-card reveal" key={group.title}>
                <div className="skill-card-head"><span>0{i + 1} / MODULE</span><Icon size={21} /></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                <div className="card-corner" />
              </article>
            })}
          </div>
          <p className="skills-note"><Sparkles size={14} /> Skill levels are intentionally not rated with arbitrary percentages.</p>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-heading reveal">
            <SectionLabel number="03">SELECTED BUILDS</SectionLabel>
            <h2>Ideas, meet <span className="lime-text">execution.</span></h2>
            <p className="section-intro">A few projects and learning builds that show how I approach problems. Some are works in progress — the next commit is always ahead.</p>
          </div>
          <div className="projects-list">
            {projects.map(project => <article className={`project-card project-${project.accent} reveal`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub link`}><ArrowUpRight /></a>
              <div className="project-decoration"><Code2 size={74} strokeWidth={0.7} /></div>
            </article>)}
          </div>
          <a href="https://github.com/lakshitpareek0" target="_blank" rel="noreferrer" className="button button-ghost github-button"><Github size={16} /> VIEW GITHUB PROFILE <ExternalLink size={14} /></a>
        </section>

        <section id="journey" className="section-pad journey-section">
          <div className="section-heading reveal">
            <SectionLabel number="04">BEYOND THE SCREEN</SectionLabel>
            <h2>Built through <span className="muted-heading">participation.</span></h2>
          </div>
          <div className="journey-grid">
            <article className="journey-card reveal">
              <div className="journey-icon"><Zap /></div><span className="journey-type">EVENT COORDINATION</span>
              <h3>Making things happen.</h3>
              <p>Contributed to college events and tournaments, including volleyball and BGMI activities. Coordinating people, schedules, and details has strengthened my planning and teamwork.</p>
              <span className="journey-foot">TEAMWORK / EXECUTION / OWNERSHIP</span>
            </article>
            <article className="journey-card reveal">
              <div className="journey-icon"><Gamepad2 /></div><span className="journey-type">COMMUNITY & SPORT</span>
              <h3>Competitive spirit.</h3>
              <p>Volleyball and gaming keep me connected to collaboration, strategy, practice, and the importance of learning from every match.</p>
              <span className="journey-foot">STRATEGY / COMMUNICATION / PRACTICE</span>
            </article>
          </div>
          <div className="education-strip reveal">
            <div className="education-symbol">EDU<span>_</span></div>
            <div><span className="journey-type">EDUCATION / CURRENT</span><h3>B.Tech — Computer Science & Engineering</h3><p>JK Lakshmipat University · Cyber Security specialization</p></div>
            <span className="education-status"><i className="tiny-dot" /> IN PROGRESS</span>
          </div>
        </section>

        <section id="resume" className="section-pad resume-section">
          <div className="resume-box reveal">
            <div className="resume-copy">
              <SectionLabel number="05">THE ONE-PAGE VERSION</SectionLabel>
              <h2>Want the details<br />without the scroll?</h2>
              <p>Prepare your latest resume as a PDF and add it to the project to make this button a direct download.</p>
              <a className="button button-primary" href="#contact"><Download size={16} /> REQUEST MY RESUME</a>
            </div>
            <div className="resume-visual"><div className="resume-paper"><div className="paper-mark">LP<span>.</span></div><div className="paper-line paper-line-long" /><div className="paper-line" /><div className="paper-line paper-line-short" /><div className="paper-rule" /><div className="paper-line paper-line-long" /><div className="paper-line" /><div className="paper-line paper-line-short" /><div className="paper-stamp">PROFILE<br />PREVIEW</div></div></div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <SectionLabel number="06">OPEN CHANNEL</SectionLabel>
              <h2>Have an idea?<br /><span className="lime-text">Let's connect.</span></h2>
              <p>Looking for an internship, collaboration, or a good technical conversation? My inbox is open.</p>
              <a className="contact-email" href="mailto:lakshitpareek0@gmail.com"><Mail size={18} /> lakshitpareek0@gmail.com <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-card reveal">
              <div className="contact-card-head"><span>CONNECTION REQUEST</span><span className="tiny-dot" /></div>
              <div className="contact-status"><span className="status-ring"><Mail size={24} /></span><div><b>Open to opportunities</b><small>INTERNSHIPS / PROJECTS / COLLABS</small></div></div>
              <a href="https://github.com/lakshitpareek0" target="_blank" rel="noreferrer" className="social-row"><Github size={18} /><span>GitHub</span><small>CODE & PROJECTS</small><ArrowUpRight size={16} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-row"><Linkedin size={18} /><span>LinkedIn</span><small>PROFESSIONAL NETWORK</small><ArrowUpRight size={16} /></a>
              <a href="mailto:lakshitpareek0@gmail.com" className="social-row"><Mail size={18} /><span>Email</span><small>DIRECT MESSAGE</small><ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">L<span>.</span></span><span>LAKSHIT<span className="brand-muted">/DEV</span></span></a>
        <span>DESIGNED IN CURIOSITY. BUILT WITH CODE.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {year} LAKSHIT PAREEK</span>
      </footer>
    </div>
  )
}

export default App
