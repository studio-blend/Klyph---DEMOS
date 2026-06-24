import { useEffect, useState } from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = scrolled ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          {/* Replicated AJL Official Logo Icon */}
          <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--accent-gold)' }}>
            <rect x="4" y="4" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
            <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="2.5" />
            <line x1="4" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
            <polygon points="18,6 30,8 30,28 18,30" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="21" cy="18" r="1.5" fill="currentColor" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>AJL</span>
            <span style={{ fontSize: '11px', fontWeight: '500', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Windows & Doors</span>
          </div>
        </a>

        <nav>
          <ul className="nav-menu">
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#before-after" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('before-after'); }}>Before & After</a></li>
            <li><a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
            <li><a href="#configurator" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('configurator'); }}>Design Your Own</a></li>
            <li><a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Reviews</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '50%',
              transition: 'var(--transition-smooth)'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="btn btn-primary header-cta-btn" onClick={() => scrollToSection('contact')}>
            <Sparkles size={16} />
            <span>Instant Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
}
