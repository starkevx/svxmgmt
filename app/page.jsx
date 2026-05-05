'use client';
import { useState, useEffect } from 'react';

/* ─── Social icon paths — restore by declaring const SOCIAL_ICONS = [...] ────
  { label: 'X',         path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' },
  { label: 'Facebook',  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'LinkedIn',  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'TikTok',    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
─────────────────────────────────────────────────────────────────────────── */

// ── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Athlete Representation',
    desc: 'Contract negotiations, career planning, and full-spectrum management for high school and collegiate athletes across every major sport vertical.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Brand Partnerships',
    desc: 'Strategic connections between athletes and brands that drive authentic engagement, measurable reach, and long-term commercial value.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Startup Development',
    desc: 'We build and scale sports-adjacent startups from concept to launch — providing operational strategy, branding, and marketing infrastructure.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
  {
    title: 'NIL Marketing',
    desc: 'Maximizing Name, Image, and Likeness opportunities for collegiate and high school athletes through compliant, creative, revenue-generating campaigns.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

const STATS = [
  { number: '50+',  label: 'Athletes Represented' },
  { number: '$2M+', label: 'Deals Closed' },
  { number: '15+',  label: 'Brand Partners' },
  { number: '6',    label: 'Sports Verticals' },
];

const PROCESS = [
  { step: '01', title: 'Scout & Evaluate', desc: 'We identify elite talent and evaluate fit across our full network — on-field performance, character, and brand potential.' },
  { step: '02', title: 'Represent & Protect', desc: 'Contracts, negotiations, and legal protection handled end-to-end so athletes can focus on what they do best.' },
  { step: '03', title: 'Build & Develop', desc: 'Brand identity, social presence, NIL strategy, and partnership pipeline built from the ground up.' },
  { step: '04', title: 'Scale & Grow', desc: 'Long-term growth strategy, ecosystem integration, and continuous opportunity development as careers evolve.' },
];

const PORTFOLIO = [
  {
    tag: 'Athlete Placement',
    title: 'Commitment Package',
    desc: 'Secured a full athletic scholarship placement for a 4-star recruit through strategic school outreach, highlight reel development, and direct coach engagement.',
    metric: '100% Scholarship',
  },
  {
    tag: 'NIL Deal',
    title: '6-Figure NIL Partnership',
    desc: 'Launched a multi-platform NIL partnership between a rising college QB and a regional sports nutrition brand — negotiated, activated, and managed in under 30 days.',
    metric: '$120K+ Deal Value',
  },
  {
    tag: 'Platform Launch',
    title: 'VarsityOne Beta',
    desc: 'Developed and soft-launched VarsityOne, an athlete-first platform connecting prep talent to college programs nationwide, from concept to beta in under 6 months.',
    metric: '3500+ Athletes',
  },
];

const TESTIMONIALS = [
  {
    quote: "SVX got your boy right. They built my brand from the ground up. The NIL deal they closed opened doors I didn't even know was even an option.",
    name: 'Marcus W.',
    title: 'SMU Receiver',
  },
  {
    quote: "Partnering with SVX was everything we needed. Kiya understood our audience and matched us with athletes who actually fit our style and plan.",
    name: 'Jordan K.',
    title: 'Brand Founder',
  },
  {
    quote: "The team at SVX especially Mr Starke operates on a different level. Professional, funny, strategic, and genuinely invested in your success. I swear he is always having a great time ",
    name: 'Tyler R.',
    title: 'Parent',
  },
];

const TEAM = [
  { initials: 'WS', name: 'Wes Starke',      title: 'Founder & CEO',               bio: 'Athlete-first operator with a background in sports marketing and startup development. Building the next generation of sports management.' },
  { initials: 'AR', name: 'Team Member',      title: 'Head of Athlete Relations',    bio: 'Former collegiate athlete turned advocate. Manages day-to-day representation and athlete development across all sport verticals.' },
  { initials: 'BP', name: 'Team Member',      title: 'Brand Partnerships Director',  bio: 'Specializes in NIL strategy and brand integration, connecting athletes to authentic, compliant partnership opportunities.' },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Drawer ── */
        .drawer-backdrop { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:998; opacity:0; pointer-events:none; transition:opacity .35s ease; }
        .drawer-backdrop.open { opacity:1; pointer-events:all; }
        .slide-drawer { position:fixed; top:0; right:0; height:100vh; width:min(380px,100vw); background:#111; border-left:1px solid rgba(255,255,255,0.07); z-index:999; display:flex; flex-direction:column; padding:32px 36px 48px; transform:translateX(100%); transition:transform .38s cubic-bezier(.4,0,.2,1); }
        .slide-drawer.open { transform:translateX(0); }
        .drawer-links { display:flex; flex-direction:column; gap:28px; margin-top:56px; }
        .drawer-links a { color:rgba(255,255,255,0.6); text-decoration:none; font-size:20px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; transition:color .15s; }
        .drawer-links a:hover { color:white; }

        /* ── Nav ── */
        .nav-logo { position:absolute; left:50%; transform:translateX(-50%); pointer-events:none; }
        .nav-right { display:flex; align-items:center; gap:16px; }
        .contact-btn { border:1.5px solid rgba(255,255,255,0.85); color:white; background:transparent; padding:8px 22px; border-radius:999px; font-size:11px; letter-spacing:0.13em; font-weight:700; cursor:pointer; text-transform:uppercase; white-space:nowrap; text-decoration:none; display:inline-block; transition:background .15s; }
        .contact-btn:hover { background:rgba(255,255,255,0.08); }

        /* ── Section shared ── */
        .section-wrap { padding:100px 60px; }
        .section-overline { color:#888; font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 16px; }
        .section-title { color:white; font-size:clamp(36px,5vw,60px); font-weight:900; letter-spacing:-0.02em; line-height:1.05; margin:0 0 20px; }
        .section-subtitle { color:rgba(255,255,255,0.55); font-size:clamp(15px,1.6vw,17px); line-height:1.75; max-width:580px; margin:0; }

        /* ── Cards ── */
        .card { background:#111; border:1px solid rgba(255,255,255,0.06); border-radius:10px; padding:32px; transition:border-color .2s; }
        .card:hover { border-color:rgba(255,255,255,0.2); }

        /* ── Grids ── */
        .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-top:56px; }
        .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:56px; }
        .grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; margin-top:56px; }

        /* ── Stats ── */
        .stat-number { color:#888; font-size:clamp(40px,5vw,64px); font-weight:900; letter-spacing:-0.03em; line-height:1; margin:0 0 8px; }
        .stat-label { color:rgba(255,255,255,0.5); font-size:13px; letter-spacing:0.08em; text-transform:uppercase; font-weight:600; }

        /* ── Services ── */
        .service-icon { width:52px; height:52px; background:rgba(255,255,255,0.05); border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:24px; }
        .service-title { color:white; font-size:18px; font-weight:800; margin:0 0 12px; letter-spacing:-0.01em; }
        .service-desc { color:rgba(255,255,255,0.55); font-size:14px; line-height:1.7; margin:0; }

        /* ── Process ── */
        .process-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; margin-top:64px; position:relative; }
        .process-grid::before { content:''; position:absolute; top:28px; left:calc(12.5%); right:calc(12.5%); height:1px; background:rgba(255,255,255,0.12); z-index:0; }
        .process-step { position:relative; z-index:1; padding:0 20px; }
        .process-num { width:56px; height:56px; border-radius:50%; background:#0a0a0a; border:1px solid #888; color:#888; font-size:13px; font-weight:800; letter-spacing:0.05em; display:flex; align-items:center; justify-content:center; margin:0 auto 24px; }
        .process-title { color:white; font-size:16px; font-weight:800; text-align:center; margin:0 0 10px; }
        .process-desc { color:rgba(255,255,255,0.5); font-size:13px; line-height:1.65; text-align:center; margin:0; }

        /* ── Portfolio ── */
        .portfolio-tag { display:inline-block; color:#888; font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; border:1px solid rgba(255,255,255,0.2); border-radius:999px; padding:4px 12px; margin-bottom:20px; }
        .portfolio-title { color:white; font-size:22px; font-weight:800; margin:0 0 12px; letter-spacing:-0.01em; }
        .portfolio-desc { color:rgba(255,255,255,0.55); font-size:14px; line-height:1.7; margin:0 0 24px; }
        .portfolio-metric { color:#888; font-size:24px; font-weight:900; letter-spacing:-0.02em; padding-top:20px; border-top:1px solid rgba(255,255,255,0.07); }

        /* ── Testimonials ── */
        .testimonial-card { background:#111; border:1px solid rgba(255,255,255,0.06); border-radius:10px; padding:36px; display:flex; flex-direction:column; }
        .testimonial-quote-mark { color:#888; font-size:56px; line-height:1; font-weight:900; margin-bottom:8px; font-family:Georgia,serif; }
        .testimonial-text { color:rgba(255,255,255,0.8); font-size:clamp(14px,1.4vw,16px); line-height:1.75; margin:0 0 28px; flex:1; }
        .testimonial-name { color:white; font-size:14px; font-weight:800; margin:0 0 4px; }
        .testimonial-role { color:rgba(255,255,255,0.4); font-size:12px; letter-spacing:0.06em; text-transform:uppercase; margin:0; }

        /* ── Team ── */
        .team-avatar { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#555,#2a2a2a); display:flex; align-items:center; justify-content:center; color:white; font-size:20px; font-weight:800; margin-bottom:20px; flex-shrink:0; }
        .team-name { color:white; font-size:18px; font-weight:800; margin:0 0 4px; }
        .team-title { color:#888; font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; margin:0 0 16px; }
        .team-bio { color:rgba(255,255,255,0.5); font-size:13px; line-height:1.7; margin:0; }

        /* ── CTA ── */
        .cta-section { background:#111; border-top:1px solid rgba(255,255,255,0.06); border-bottom:1px solid rgba(255,255,255,0.06); }
        .cta-btn-primary { display:inline-block; background:#888; color:white; font-size:13px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; padding:16px 36px; border-radius:999px; transition:background .15s,transform .15s; cursor:pointer; border:none; }
        .cta-btn-primary:hover { background:#666; transform:translateY(-1px); }
        .cta-btn-secondary { display:inline-block; background:transparent; color:white; font-size:13px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; padding:15px 36px; border-radius:999px; border:1.5px solid rgba(255,255,255,0.5); transition:border-color .15s,transform .15s; cursor:pointer; }
        .cta-btn-secondary:hover { border-color:white; transform:translateY(-1px); }
        .cta-btn-ghost { display:inline-block; background:transparent; color:rgba(255,255,255,0.5); font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; padding:15px 36px; border-radius:999px; border:1.5px solid rgba(255,255,255,0.15); transition:all .15s; cursor:pointer; }
        .cta-btn-ghost:hover { color:white; border-color:rgba(255,255,255,0.4); transform:translateY(-1px); }
        .cta-buttons { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; margin-top:48px; }

        /* ── About ── */
        .about-body { font-size:clamp(15px,2vw,18px); line-height:1.8; color:rgba(255,255,255,0.75); text-align:center; max-width:760px; margin:0 auto; }

        /* ── Divider ── */
        .section-divider { height:1px; background:rgba(255,255,255,0.06); margin:0 60px; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .grid-4 { grid-template-columns:repeat(2,1fr); }
          .process-grid { grid-template-columns:repeat(2,1fr); gap:32px; }
          .process-grid::before { display:none; }
        }
        @media (max-width: 600px) {
          .contact-btn { display:none !important; }
          .section-wrap { padding:72px 24px; }
          .section-divider { margin:0 24px; }
          .grid-4, .grid-3, .grid-2, .process-grid { grid-template-columns:1fr; }
          .hero-padding { padding:8px 16px 0 !important; }
          .footer-padding { padding:24px 16px !important; }
          .nav-inner { padding:16px 20px !important; }
          .about-section { padding:80px 24px !important; }
          .slide-drawer { padding:28px 24px 40px !important; }
          .cta-buttons { flex-direction:column; align-items:center; }
          .cta-btn-primary, .cta-btn-secondary, .cta-btn-ghost { width:100%; text-align:center; }
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div className={`drawer-backdrop${menuOpen ? ' open' : ''}`} onClick={close} aria-hidden="true" />

      {/* ── Slide-out Drawer ── */}
      <div className={`slide-drawer${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/SVX_v3_logo-outline-75px.png" height="44" alt="SVX Management" style={{ display: 'block', objectFit: 'contain' }} />
          <button onClick={close} aria-label="Close menu" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: '4px', lineHeight: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <nav className="drawer-links">
          <a href="#" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#services" onClick={close}>Services</a>
          <a href="#work" onClick={close}>Our Work</a>
          <a href="#team" onClick={close}>Team</a>
          <a href="mailto:hello@svxmgmt.com" onClick={close}>Contact</a>
        </nav>
        <div style={{ marginTop: 'auto', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {/* ── DRAWER SOCIAL ICONS (temporarily hidden) ──────────────────────
               <div style={{ display:'flex', gap:'20px', marginBottom:'24px' }}>
                 {SOCIAL_ICONS.map(({ label, path }) => (
                   <a key={label} href="#" aria-label={label} style={{ color:'rgba(255,255,255,0.5)', lineHeight:0 }}>
                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d={path}/></svg>
                   </a>
                 ))}
               </div>
          ──────────────────────────────────────────────────────────────────── */}
          <a href="mailto:hello@svxmgmt.com" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', letterSpacing: '0.08em', textDecoration: 'none' }}>
            hello@svxmgmt.com
          </a>
        </div>
      </div>

      {/* ── Navigation Bar ── */}
      <nav style={{ position: 'relative', zIndex: 100 }}>
        <div className="nav-inner" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 36px', backgroundColor: '#0a0a0a' }}>
          {/* SOCIAL ICONS placeholder — see comment block above for restore instructions */}
          <div style={{ width: '120px' }} />
          <div className="nav-logo">
            <img src="/SVX_v3_logo-outline-75px.png" height="20" alt="SVX Management" style={{ display: 'block', objectFit: 'contain' }} />
          </div>
          <div className="nav-right">
            <a href="mailto:hello@svxmgmt.com" className="contact-btn">Contact Us</a>
            <button aria-label="Open menu" onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white' }} />
              <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white' }} />
              <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-padding" style={{ padding: '12px 36px 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ width: '100%', overflow: 'hidden', borderRadius: '3px' }}>
          <img src="/hero-collage.png" alt="SVXMGMT Athletes" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="about-section" style={{ backgroundColor: '#0a0a0a', padding: '120px 36px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(52px, 9vw, 110px)', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 10px' }}>
          Who We Serve
        </h2>
        <p className="about-body">
          SVX Management is a private full-service sports marketing, talent representation and brand management agency headquartered in San Diego, California. We provide operations management for partner brands and startup development, while delivering elite business, career, and financial management for high school and collegiate athletes across football, esports, basketball, baseball, soccer, volleyball, and olympic sports. SVXMGMT creates innovative marketing solutions — our mission is to protect, grow, and elevate every client we represent, on and off the field.
        </p>
      </section>

      <div className="section-divider" />

      {/* ── Stats ── */}
      <section className="section-wrap" style={{ backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid-4" style={{ marginTop: 0 }}>
            {STATS.map(({ number, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '20px' }}>
                <p className="stat-number">{number}</p>
                <p className="stat-label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Services ── */}
      <section id="services" className="section-wrap" style={{ backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-overline">What We Do</p>
          <h2 className="section-title">Built for Athletes.<br />Designed for Brands.</h2>
          <p className="section-subtitle">Four core disciplines. One integrated team. Focused on making every client we represent win.</p>
          <div className="grid-4">
            {SERVICES.map(({ title, desc, icon }) => (
              <div key={title} className="card">
                <div className="service-icon">{icon}</div>
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Process ── */}
      <section className="section-wrap" style={{ backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-overline">How We Work</p>
          <h2 className="section-title">From Prospect<br />to Professional.</h2>
          <p className="section-subtitle">A proven four-step process that takes athletes and brands from where they are to where they need to be.</p>
          <div className="process-grid">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className="process-step">
                <div className="process-num">{step}</div>
                <h3 className="process-title">{title}</h3>
                <p className="process-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Portfolio ── */}
      <section id="work" className="section-wrap" style={{ backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-overline">Client Wins</p>
          <h2 className="section-title">Results That<br />Speak for Themselves.</h2>
          <p className="section-subtitle">Real outcomes for real athletes and brands. Every engagement is built around measurable impact.</p>
          <div className="grid-3">
            {PORTFOLIO.map(({ tag, title, desc, metric }) => (
              <div key={title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="portfolio-tag">{tag}</span>
                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-desc">{desc}</p>
                <p className="portfolio-metric">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Testimonials ── */}
      <section className="section-wrap" style={{ backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-overline">Social Proof</p>
          <h2 className="section-title">Straight From<br />the People We Serve.</h2>
          <div className="grid-3">
            {TESTIMONIALS.map(({ quote, name, title }) => (
              <div key={name} className="testimonial-card">
                <div className="testimonial-quote-mark">&ldquo;</div>
                <p className="testimonial-text">{quote}</p>
                <div>
                  <p className="testimonial-name">{name}</p>
                  <p className="testimonial-role">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-wrap cta-section" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p className="section-overline">Get Started</p>
          <h2 className="section-title" style={{ margin: '0 0 16px' }}>Ready to Elevate<br />Your Game?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you&rsquo;re an athlete looking for representation, a brand seeking authentic partnerships, or ready to join the SVX ecosystem, we&rsquo;re ready.
          </p>
          <div className="cta-buttons">
            <a href="mailto:hello@svxmgmt.com?subject=Represent Me" className="cta-btn-primary">Represent Me</a>
            <a href="mailto:hello@svxmgmt.com?subject=Partner With Us" className="cta-btn-secondary">Partner With Us</a>
            <a href="mailto:hello@svxmgmt.com?subject=Apply Now - VarsityOne" className="cta-btn-ghost">Apply Now</a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer-padding" style={{ backgroundColor: '#0a0a0a', padding: '32px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <img src="/SVX_v3_logo-outline-75px.png" height="18" alt="SVX Management" style={{ display: 'block', objectFit: 'contain', opacity: 0.4 }} />
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
          &copy; {new Date().getFullYear()} SVXMGMT LLC. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
