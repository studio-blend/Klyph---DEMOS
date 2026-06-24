import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={scrollToTop}>
              <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#cbd5e1' }}>
                <rect x="4" y="4" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
                <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="2.5" />
                <line x1="4" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
                <polygon points="18,6 30,8 30,28 18,30" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="21" cy="18" r="1.5" fill="currentColor" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '0.05em', color: '#fff' }}>AJL</span>
                <span style={{ fontSize: '11px', fontWeight: '500', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Windows & Doors</span>
              </div>
            </a>
            <p className="footer-description">
              Professional double glazing fitters and repair specialists serving Maghull, Liverpool, and across the Northwest. Over 64 custom home services handled with verified 10/10 quality.
            </p>
            
            <div className="footer-badges">
              <div className="footer-badge-checkatrade">
                <Shield size={14} className="footer-badge-rating" />
                <span>Checkatrade Vetted</span>
                <span className="footer-badge-rating" style={{ marginLeft: '4px', fontWeight: 'bold' }}>10/10</span>
              </div>
              <a 
                href="https://www.instagram.com/ajlwindows" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)', display: 'inline-flex' }}
                className="social-link"
                title="Follow AJL on Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>


          {/* Column 2: Navigation Links */}
          <div className="footer-links-col">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a></li>
              <li className="footer-link"><a href="#before-after" onClick={(e) => { e.preventDefault(); scrollToSection('before-after'); }}>Before & After</a></li>
              <li className="footer-link"><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
              <li className="footer-link"><a href="#configurator" onClick={(e) => { e.preventDefault(); scrollToSection('configurator'); }}>Customizer Tool</a></li>
              <li className="footer-link"><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Client Reviews</a></li>
              <li className="footer-link"><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get an Estimate</a></li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="footer-links-col">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-contact-details">
              
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Call Adam (Welshy) Lewis</p>
                  <a href="tel:07763154792">07763 154792</a>
                  <span style={{ display: 'block', height: '4px' }} />
                  <a href="tel:07708504021">07708 504021 (WhatsApp)</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Email Address</p>
                  <a href="mailto:sales@windowsanddoorsliverpool.co.uk">sales@windowsanddoorsliverpool.co.uk</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Office/Showroom Location</p>
                  <p style={{ color: '#fff' }}>
                    4 Norton Grove, Maghull,<br />
                    Liverpool, L31 5JX
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <Clock size={16} className="footer-contact-icon" />
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Working Hours</p>
                  <p style={{ color: '#fff' }}>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p style={{ color: '#fff' }}>Sat: 9:00 AM - 4:00 PM</p>
                  <p style={{ color: 'var(--accent-gold)' }}>Sun: Emergency Service Active</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and registered info */}
        <div className="footer-bottom">
          <div>
            <p>© {new Date().getFullYear()} AJL Windows & Doors Ltd. All rights reserved.</p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
              Registered Office: 51 Heron Way, Liverpool, United Kingdom, L31 1LS | Company Number: 14197941
            </p>
          </div>
          <div>
            <ul className="footer-bottom-links">
              <li className="footer-bottom-link"><a href="#" onClick={scrollToTop}>Privacy Policy</a></li>
              <li className="footer-bottom-link"><a href="#" onClick={scrollToTop}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
