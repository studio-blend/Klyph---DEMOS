import { Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreServices, onDesignYourOwn }) {
  return (
    <section className="hero-wrapper">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--accent-purple)', display: 'inline-block' }}></span>
            <span>Liverpool & The Northwest</span>
          </div>
          
          <h1 className="hero-title">
            Architectural Glazing.<br />
            <span>Bespoke Craftsmanship.</span>
          </h1>
          
          <p className="hero-desc">
            Transforming homes across the Northwest with elite-grade window installations, secure composite doors, and precision glass replacements. Crafted to insulate, protect, and stand the test of time.
          </p>
          
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={onDesignYourOwn}>
              <span>Design Your Window</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={onExploreServices}>
              <span>Explore 64 Services</span>
            </button>
          </div>

          {/* Quick Trust Pillars */}
          <div style={{ display: 'flex', gap: '30px', marginTop: '60px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--accent-purple)', background: 'rgba(217, 70, 239, 0.1)', padding: '10px', borderRadius: '50%' }}>
                <Award size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', color: '#fff' }}>10/10 Checkatrade</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Vetted & Recommended</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--accent-purple)', background: 'rgba(217, 70, 239, 0.1)', padding: '10px', borderRadius: '50%' }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', color: '#fff' }}>All Aspects of uPVC</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Full Repair & Fit Experts</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
