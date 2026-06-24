import { useState } from 'react';
import { Eye, X, MapPin } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const projects = [
    {
      title: "Matte Black Composite Door",
      category: "doors",
      location: "Liverpool City Centre",
      image: "/gallery_door.png",
      description: "Premium secure composite front door featuring sleek brushed gold vertical bar handle."
    },
    {
      title: "Anthracite Aluminium Bifold Doors",
      category: "doors",
      location: "Crosby",
      image: "/gallery_bifold.png",
      description: "Large 3-panel folding patio doors fully opened, connecting living space to garden."
    },
    {
      title: "Bespoke Composite Cladding",
      category: "upvc",
      location: "Sefton",
      image: "/gallery_cladding.png",
      description: "Weatherproof slate grey composite cladding fitted neatly underneath a uPVC bay window."
    },
    {
      title: "uPVC Sash Double Glazing Upgrade",
      category: "windows",
      location: "Maghull",
      image: "/after.png",
      description: "Clean retrofitted uPVC sash window replacing old rotten drafty timber framing."
    },
    {
      title: "Architectural Twilight Glazing",
      category: "windows",
      location: "Wirral",
      image: "/hero.png",
      description: "Floor-to-ceiling glass installations and sliding doors on a luxury home."
    },
    {
      title: "Sash Window Frame Resealing",
      category: "windows",
      location: "Southport",
      image: "/before.png",
      description: "Full windproofing and seal alignment on domestic double-glazed windows."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Our Recent Projects</h2>
          <p>
            Explore real project photos of premium window fittings, composite doors, and uPVC installations completed by Adam Lewis and the team.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="tabs-list" style={{ marginBottom: '30px' }}>
          <button className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          <button className={`tab-btn ${filter === 'windows' ? 'active' : ''}`} onClick={() => setFilter('windows')}>Windows</button>
          <button className={`tab-btn ${filter === 'doors' ? 'active' : ''}`} onClick={() => setFilter('doors')}>Doors</button>
          <button className={`tab-btn ${filter === 'upvc' ? 'active' : ''}`} onClick={() => setFilter('upvc')}>uPVC & Cladding</button>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-panel"
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '280px',
                cursor: 'pointer'
              }}
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Project Image */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease'
              }} 
              className="gallery-image-zoom"
              />

              {/* Glass overlay on hover */}
              <div 
                className="gallery-hover-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 9, 14, 0.95) 10%, rgba(14, 19, 31, 0.4) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  border: '1px solid var(--border-gold)'
                }}
              >
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--accent-gold-glow)', border: '1px solid var(--border-gold)', padding: '6px', borderRadius: '50%', color: 'var(--accent-gold-hover)' }}>
                  <Eye size={18} />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <MapPin size={12} />
                  <span>{project.location}</span>
                </div>
                
                <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '6px', fontWeight: 'bold' }}>{project.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{project.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* CSS for Zoom & Overlay Hovers */}
        <style dangerouslySetInnerHTML={{__html: `
          .glass-panel:hover .gallery-image-zoom {
            transform: scale(1.08);
          }
          .glass-panel:hover .gallery-hover-overlay {
            opacity: 1 !important;
          }
        `}} />

        {/* LIGHTBOX MODAL */}
        {lightboxIndex !== null && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(4, 6, 10, 0.9)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button 
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setLightboxIndex(null)}
            >
              <X size={20} />
            </button>

            {/* Lightbox Content Container */}
            <div 
              style={{
                maxWidth: '900px',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredProjects[lightboxIndex].image} 
                alt={filteredProjects[lightboxIndex].title} 
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{ padding: '30px', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <MapPin size={14} />
                  <span>{filteredProjects[lightboxIndex].location}</span>
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: 'bold' }}>{filteredProjects[lightboxIndex].title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '15px' }}>{filteredProjects[lightboxIndex].description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
