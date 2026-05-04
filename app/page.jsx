'use client';
import { useState } from 'react';

/* ─── Social icon paths — paste into SOCIAL_ICONS when ready to restore ───────
  { label: 'X',         path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' },
  { label: 'Facebook',  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'LinkedIn',  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'TikTok',    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
─────────────────────────────────────────────────────────────────────────── */

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

      <style>{`
        .nav-logo   { position: absolute; left: 50%; transform: translateX(-50%); pointer-events: none; }
        .nav-right  { display: flex; align-items: center; gap: 16px; }
        .contact-btn {
          border: 1.5px solid rgba(255,255,255,0.85);
          color: white;
          background: transparent;
          padding: 8px 22px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.13em;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .contact-btn:hover { background: rgba(255,255,255,0.08); }

        /* Mobile nav drawer */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 20px;
          padding: 24px 20px;
          background: #111;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .mobile-menu a:hover { color: white; }

        @media (max-width: 600px) {
          .nav-logo { position: static !important; transform: none !important; }
          .contact-btn { display: none !important; }
          .hero-padding { padding: 8px 16px 0 !important; }
          .footer-padding { padding: 24px 16px !important; }
          .nav-inner { padding: 16px 20px !important; }
        }

        @media (min-width: 601px) {
          .hamburger { display: none !important; }
        }
      `}</style>

      {/* ── Navigation ── */}
      <nav>
        <div className="nav-inner" style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 36px',
          backgroundColor: '#0a0a0a',
        }}>

          {/* ── SOCIAL ICONS (temporarily hidden) ──────────────────────────────
               To restore: replace the placeholder div below with this block:

               <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                 {SOCIAL_ICONS.map(({ label, path }) => (
                   <a key={label} href="#" aria-label={label} style={{ color: 'white', lineHeight: 0 }}>
                     <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                       <path d={path} />
                     </svg>
                   </a>
                 ))}
               </div>
          ─────────────────────────────────────────────────────────────────── */}
          <div style={{ width: '120px' }} />

          {/* Centered Logo */}
          <div className="nav-logo">
            <span style={{ color: 'white', fontSize: '22px', fontWeight: '900', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              SVX<span style={{ color: '#3e3e3e' }}>MGMT</span>
            </span>
          </div>

          {/* Right: Contact + Hamburger */}
          <div className="nav-right">
            <a href="mailto:hello@svxmgmt.com" className="contact-btn" style={{ textDecoration: 'none' }}>Contact Us</a>
            <button
              className="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
            >
              <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Athletes</a>
          <a href="#">Contact</a>
          {/* ── MOBILE SOCIAL ICONS (temporarily hidden) ────────────────────────
               To restore: uncomment the block below.

               <div style={{ display: 'flex', gap: '20px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                 {SOCIAL_ICONS.map(({ label, path }) => (
                   <a key={label} href="#" aria-label={label} style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 0 }}>
                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                       <path d={path} />
                     </svg>
                   </a>
                 ))}
               </div>
          ─────────────────────────────────────────────────────────────────── */}
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="hero-padding" style={{ padding: '12px 36px 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ width: '100%', overflow: 'hidden', borderRadius: '3px' }}>
          <img
            src="/hero-collage.png"
            alt="SVXMGMT Athletes"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* ── Copyright Footer ── */}
      <footer className="footer-padding" style={{
        backgroundColor: '#0a0a0a',
        padding: '32px 36px',
        textAlign: 'center',
        marginTop: '32px',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '10px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          &copy; {new Date().getFullYear()} SVX Management LLC. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
