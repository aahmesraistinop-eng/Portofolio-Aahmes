import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Globe, Palette, Github, Twitter, Linkedin, Mail,
  ArrowRight, Code, Sparkles, Cpu, Layers3, Zap, Star,
  Send, MapPin, Phone, User, Briefcase, Clock, Award,
  Monitor, Smartphone, Wand2
} from 'lucide-react'
import './index.css'

// ── Reduced particle count for old PCs ──────────────────────
const PARTICLE_COUNT = 6
const INITIAL_PARTICLES = [...Array(PARTICLE_COUNT)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${25 + Math.random() * 35}s`,
  delay: `${Math.random() * -20}s`,
}))

/* ═══════════════════════════════════════
   PARTICLES
═══════════════════════════════════════ */
const Particles = () => (
  <div className="particles">
    {INITIAL_PARTICLES.map((p, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: p.left,
          top: p.top,
          '--duration': p.duration,
          animationDelay: p.delay,
        }}
      />
    ))}
  </div>
)

/* ═══════════════════════════════════════
   AVATAR – real photo from DiceBear
═══════════════════════════════════════ */
const AVATAR_URL = '/profile-pic.jpeg'

const AvatarFrame = () => (
  <div className="avatar-wrap">
    <div className="avatar-ring ring-1" />
    <div className="avatar-ring ring-2" />
    <div className="avatar-ring ring-3" />

    <div className="avatar-core">
      <div className="avatar-gradient" />
      <img
        src={AVATAR_URL}
        alt="Aahmes Raistino"
        className="avatar-photo"
        loading="lazy"
      />
      <div className="avatar-scanline" />
    </div>

    {/* floating badges */}
    <div className="avatar-badge badge-tl">
      <Sparkles size={9} /> Available
    </div>
    <div className="avatar-badge badge-br">
      <Code size={9} /> React · Vite
    </div>

    {/* floating dots */}
    <div className="avatar-dot d1" />
    <div className="avatar-dot d2" />
    <div className="avatar-dot d3" />
  </div>
)

/* ═══════════════════════════════════════
   HERO INFO CARDS – floating mini stats
═══════════════════════════════════════ */
const heroCards = [
  { icon: Award,  value: '05+', label: 'Years Exp' },
  { icon: Briefcase, value: '40+', label: 'Projects' },
  { icon: Clock,  value: '24/7', label: 'Support' },
]

const HeroInfoCards = () => (
  <div className="hero-info-cards">
    {heroCards.map((c, i) => (
      <motion.div
        key={i}
        className="hero-info-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
      >
        <div className="hic-icon"><c.icon size={14} /></div>
        <div>
          <div className="hic-value">{c.value}</div>
          <div className="hic-label">{c.label}</div>
        </div>
      </motion.div>
    ))}
  </div>
)

/* ═══════════════════════════════════════
   PROFILE CARD – personal info
═══════════════════════════════════════ */
const profileItems = [
  { icon: User,      label: 'Full Name',    value: 'Aahmes Raistino P' },
  { icon: Briefcase, label: 'Role',         value: 'Creative Developer' },
  { icon: MapPin,    label: 'Location',     value: 'Jakarta, Indonesia' },
  { icon: Award,     label: 'Experience',   value: '5+ Years' },
  { icon: Globe,     label: 'Languages',    value: 'ID · EN' },
  { icon: Clock,     label: 'Availability', value: 'Open to Work' },
]

const ProfileCard = () => (
  <div className="profile-card">
    <div className="profile-card-header">
      <div className="profile-avatar-mini">
        <img src={AVATAR_URL} alt="Avatar" className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="profile-name">Aahmes Raistino</div>
        <div className="profile-role">Creative Developer</div>
        <div className="profile-status">
          <span className="status-dot" /> Open to Work
        </div>
      </div>
    </div>
    <div className="profile-items">
      {profileItems.map((item, i) => (
        <div key={i} className="profile-item">
          <div className="profile-item-icon"><item.icon size={13} /></div>
          <div className="profile-item-label">{item.label}</div>
          <div className="profile-item-value">{item.value}</div>
        </div>
      ))}
    </div>
  </div>
)

/* ═══════════════════════════════════════
   SERVICES – what I do
═══════════════════════════════════════ */
const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    desc: 'Building fast, scalable web apps with React, Next.js and modern tooling.',
    color: '#8b5cf6',
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    desc: 'Crafting premium interfaces with glassmorphism, motion and cinematic depth.',
    color: '#ec4899',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Pixel-perfect layouts that adapt beautifully across all screen sizes.',
    color: '#06b6d4',
  },
  {
    icon: Wand2,
    title: 'Motion & Animation',
    desc: 'Immersive animations with GSAP and Framer Motion for memorable experiences.',
    color: '#a855f7',
  },
]

const ServicesSection = () => (
  <section className="max-w-7xl mx-auto py-20 border-t border-white/5">
    <h2 className="section-title mb-2">SERVICES</h2>
    <p className="text-white/30 text-sm mb-12">What I bring to your project</p>
    <div className="services-grid">
      {services.map((s, i) => (
        <motion.div
          key={i}
          className="service-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          style={{ '--svc-color': s.color }}
        >
          <div className="service-icon" style={{ color: s.color, background: `${s.color}18`, borderColor: `${s.color}30` }}>
            <s.icon size={20} />
          </div>
          <h3 className="service-title">{s.title}</h3>
          <p className="service-desc">{s.desc}</p>
          <div className="service-line" style={{ background: s.color }} />
        </motion.div>
      ))}
    </div>
  </section>
)

/* ═══════════════════════════════════════
   ABOUT VISUAL – skill bars
═══════════════════════════════════════ */
const skills = [
  { label: 'React / Next.js',  pct: 92, color: '#06b6d4' },
  { label: 'UI / UX Design',   pct: 85, color: '#8b5cf6' },
  { label: 'GSAP / Framer',    pct: 80, color: '#ec4899' },
  { label: 'Node / Express',   pct: 72, color: '#22d3ee' },
  { label: 'Tailwind CSS',     pct: 95, color: '#a855f7' },
]

const AboutVisual = () => (
  <div className="about-visual">
    <div className="about-visual-header">
      <Zap size={14} className="text-primary" />
      <span>Core Skills</span>
    </div>
    <div className="about-skills">
      {skills.map((s, i) => (
        <div key={i} className="skill-row">
          <div className="skill-label">
            <span>{s.label}</span>
            <span style={{ color: s.color }}>{s.pct}%</span>
          </div>
          <div className="skill-track">
            <motion.div
              className="skill-bar"
              initial={{ width: 0 }}
              whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: 'easeOut' }}
              style={{ background: s.color }}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="about-stats-row">
      {[{ v: '05+', l: 'Years' }, { v: '40+', l: 'Projects' }, { v: '20+', l: 'Clients' }].map((s, i) => (
        <div key={i} className="about-stat">
          <div className="about-stat-value">{s.v}</div>
          <div className="about-stat-label">{s.l}</div>
        </div>
      ))}
    </div>
  </div>
)

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-navbar"
    >
      <div className="flex items-center justify-between w-full lg:w-auto gap-8">
        <div className="logo-gradient">Aahmes Raistino P</div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </motion.nav>
  )
}

/* ═══════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════ */
const experiences = [
  { year: '2026', title: 'Senior Creative Developer', company: 'Spectral Labs' },
  { year: '2024', title: 'UI Engineer',               company: 'Aura Studio' },
  { year: '2022', title: 'Frontend Developer',        company: 'Liquid Motion' },
]

const Timeline = () => (
  <section className="max-w-5xl mx-auto py-32">
    <h2 className="section-title">EXPERIENCE</h2>
    <div className="space-y-12 mt-20">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="timeline-item"
        >
          <div className="timeline-year">{exp.year}</div>
          <div>
            <h3 className="text-2xl font-bold">{exp.title}</h3>
            <p className="text-white/40 mt-2">{exp.company}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

/* ═══════════════════════════════════════
   CONTACT SECTION
═══════════════════════════════════════ */
const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'aahmes@future.dev' },
  { icon: MapPin,  label: 'Location', value: 'Jakarta, Indonesia' },
  { icon: Phone,   label: 'WhatsApp', value: '+62 812 xxxx xxxx' },
]

const ContactSection = () => (
  <section id="contact" className="contact-section">

    {/* decorative orbs */}
    <div className="contact-orb orb-left" />
    <div className="contact-orb orb-right" />

    <div className="max-w-7xl mx-auto relative z-10">

      {/* header */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-title text-center">GET IN TOUCH</p>
        <h2 className="contact-title">
          Let's Build<br />
          <span className="contact-title-gradient">The Future</span>
        </h2>
        <p className="contact-subtitle">
          Open for freelance, collaborations and experimental projects.
        </p>
      </motion.div>

      <div className="contact-grid">

        {/* LEFT – info + socials */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* info cards */}
          {contactInfo.map((item, i) => (
            <div key={i} className="contact-info-card">
              <div className="contact-info-icon">
                <item.icon size={16} />
              </div>
              <div>
                <div className="contact-info-label">{item.label}</div>
                <div className="contact-info-value">{item.value}</div>
              </div>
            </div>
          ))}

          {/* social icons */}
          <div className="contact-socials">
            {[
              { icon: Github,   label: 'GitHub',   href: '#' },
              { icon: Twitter,  label: 'Twitter',  href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Mail,     label: 'Email',    href: '#' },
            ].map(({ icon: Icon, label, href }, i) => (
              <a key={i} href={href} className="social-icon" title={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – form */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* animated border glow */}
          <div className="form-glow-border" />

          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@future.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="Project Collaboration"
              />
            </div>

            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea
                rows="5"
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="form-submit">
              <span>Send Message</span>
              <Send size={14} />
              <div className="submit-glow" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  </section>
)

/* ═══════════════════════════════════════
   APP
═══════════════════════════════════════ */
const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loader after 1.5s
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Cursor glow effect
    const cursor = document.querySelector(".cursor-glow-element")
    if (!cursor) return
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }
    document.addEventListener("mousemove", moveCursor)
    return () => document.removeEventListener("mousemove", moveCursor)
  }, [])

  useEffect(() => {
    // Ripple effect
    const handleRipple = (e) => {
      const ripple = document.createElement("span")
      ripple.classList.add("ripple-effect")
      const size = 200
      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = (e.pageX - size/2) + "px"
      ripple.style.top = (e.pageY - size/2) + "px"
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }
    document.addEventListener("click", handleRipple)
    return () => document.removeEventListener("click", handleRipple)
  }, [])

  return (
    <div className="app-container">

      {/* LOADING */}
      <div className={`loader-wrapper ${!loading ? 'hide' : ''}`}>
        <div className="loader"></div>
      </div>

      {/* CURSOR GLOW */}
      <div className="cursor-glow-element"></div>

      {/* BACKGROUND */}
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      <div className="bg-glow2"></div>

    <Particles />
    <Navbar />

    <main className="relative z-10 px-6">

      {/* ── HERO ─────────────────────────────── */}
      <section id="home" className="hero-section hero-two-col">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <Sparkles size={12} />
            AVAILABLE FOR PROJECTS
          </div>

          <h1 className="hero-title">
            AAHMES<br />RAISTINO
          </h1>

          <p className="hero-subtitle">
            Creative Developer crafting cinematic,
            futuristic and immersive digital experiences.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a href="#contact" className="glass-button">Contact Me</a>
            <a href="#projects" className="glass-button">View Work</a>
          </div>

          <HeroInfoCards />
        </motion.div>

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <AvatarFrame />
        </motion.div>

      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section id="about" className="max-w-7xl mx-auto py-32">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-grid">
          <div className="about-intro">
            <p className="text-base text-white/40 leading-relaxed mt-6 max-w-lg">
              I create immersive interfaces combining motion, depth,
              interaction and futuristic aesthetics.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                { icon: Code,    title: 'Development' },
                { icon: Palette, title: 'Design' },
                { icon: Cpu,     title: 'Performance' },
                { icon: Layers3, title: 'Systems' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="glass-card p-8"
                >
                  <item.icon className="text-primary mb-4" size={22} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AboutVisual />
          </motion.div>
        </div>

        {/* Profile card full-width below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <ProfileCard />
        </motion.div>
      </section>

      {/* ── SERVICES ─────────────────────────── */}
      <ServicesSection />

      {/* ── TECH STACK ───────────────────────── */}
      <section className="max-w-7xl mx-auto py-20 border-t border-white/5">
        <h2 className="section-title text-center mb-16">TECH STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {[
            { name: 'React',    icon: Code },
            { name: 'GSAP',     icon: Sparkles },
            { name: 'Framer',   icon: Layers3 },
            { name: 'Tailwind', icon: Palette },
            { name: 'Vite',     icon: Cpu },
            { name: 'Next.js',  icon: Globe },
          ].map((tech, i) => (
            <div key={i} className="glass-card p-5 flex flex-col items-center gap-3 text-center">
              <tech.icon size={22} className="text-primary/60" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────── */}
      <section id="projects" className="max-w-7xl mx-auto py-32">
        <h2 className="section-title mb-20">SELECTED WORK</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { title: 'Spectral', tag: 'Web App',  color: '#8b5cf6' },
            { title: 'Aura',     tag: 'UI Design', color: '#ec4899' },
            { title: 'Liquid',   tag: 'Motion',   color: '#06b6d4' },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="project-card group"
            >
              <div className="project-image">
                <div className="project-placeholder" style={{ '--accent': project.color }}>
                  <Star size={28} style={{ color: project.color, opacity: 0.5 }} />
                  <span className="project-tag" style={{ color: project.color }}>{project.tag}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <button>View Case <ArrowRight size={14} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────── */}
      <Timeline />

    </main>

    {/* ── CONTACT (full-width outside main) ── */}
    <ContactSection />

    {/* FOOTER */}
    <footer className="app-footer">
      © 2025 AAHMES — Modern Portfolio Experience
    </footer>

  </div>
  )
}

export default App
