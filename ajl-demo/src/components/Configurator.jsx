import { useState } from 'react';
import { Settings, Sparkles, Check, Thermometer } from 'lucide-react';

export default function Configurator({ onConfigureComplete }) {
  const [productType, setProductType] = useState('window'); // window, door
  const [style, setStyle] = useState('casement'); // casement, sash, tilt-turn | composite, patio, bifold
  const [color, setColor] = useState('grey'); // white, grey, black, oak
  const [glazing, setGlazing] = useState('double'); // double, triple, frosted

  // Adjust style when product type changes to keep them valid
  const handleProductTypeChange = (type) => {
    setProductType(type);
    if (type === 'window') {
      setStyle('casement');
    } else {
      setStyle('composite');
    }
  };

  // Color options maps
  const colorMap = {
    white: { name: 'Pristine White', hex: '#f8fafc', class: 'frame-white' },
    grey: { name: 'Anthracite Grey', hex: '#374151', class: 'frame-grey' },
    black: { name: 'Matte Black', hex: '#0f172a', class: 'frame-black' },
    oak: { name: 'Golden Oak', hex: '#b45309', class: 'frame-oak' }
  };

  // Pricing formula for visual estimation
  const getEstimate = () => {
    let base = productType === 'window' ? 380 : 750;
    
    // Style multiplier
    if (style === 'sash') base += 120;
    if (style === 'tilt-turn') base += 80;
    if (style === 'patio') base += 350;
    if (style === 'bifold') base += 600;

    // Color addition
    if (color === 'grey' || color === 'black') base += 45;
    if (color === 'oak') base += 90;

    // Glazing addition
    if (glazing === 'triple') base += 110;
    if (glazing === 'frosted') base += 30;

    return {
      min: Math.round(base * 0.95),
      max: Math.round(base * 1.05)
    };
  };

  const estimate = getEstimate();

  const handleFinishConfiguration = () => {
    const configString = `${colorMap[color].name} ${style.toUpperCase()} with ${glazing.toUpperCase()} Glazing`;
    onConfigureComplete(configString);
  };

  return (
    <section id="configurator" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Visualizer Tool</span>
          <h2 className="section-title">Design Your Custom Glazing</h2>
          <p>
            Configure your dream windows or doors below and see a live architectural preview. When ready, lock in your specifications to request an accurate quote.
          </p>
        </div>

        <div className="glass-panel configurator-layout" style={{ padding: '30px' }}>
          
          {/* LEFT: Live Render Preview */}
          <div className="configurator-preview">
            
            {/* Visual Render Canvas */}
            <div className={`window-visual ${productType === 'door' ? 'door-mode' : ''} ${style} ${colorMap[color].class}`}>
              
              {/* Glass Glare */}
              <div className="window-glass-glare" style={{
                background: glazing === 'frosted' 
                  ? 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(240,246,255,0.85) 100%)' 
                  : undefined
              }} />

              {/* Dividers & Sub panels */}
              {productType === 'window' && style === 'casement' && (
                <div className="window-pane-divider pane-divider-v" />
              )}
              
              {productType === 'window' && style === 'sash' && (
                <div className="window-pane-divider pane-divider-h" />
              )}

              {productType === 'window' && style === 'tilt-turn' && (
                <div style={{ position: 'absolute', inset: '10px', border: '1.5px dashed rgba(255,255,255,0.2)', pointerEvents: 'none' }} />
              )}

              {productType === 'door' && style === 'composite' && (
                <div className="door-panels">
                  <div className="door-panel" />
                  <div className="door-panel" />
                  <div className="door-panel" />
                  <div className="door-handle" />
                </div>
              )}

              {productType === 'door' && style === 'patio' && (
                <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                  <div style={{ width: '50%', borderRight: '4px solid currentColor', position: 'relative' }}>
                    <div style={{ position: 'absolute', right: '4px', top: '50%', width: '4px', height: '30px', background: '#cbd5e1', borderRadius: '2px' }} />
                  </div>
                  <div style={{ width: '50%' }} />
                </div>
              )}

              {productType === 'door' && style === 'bifold' && (
                <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                  <div style={{ width: '33%', borderRight: '2px solid currentColor' }} />
                  <div style={{ width: '34%', borderRight: '2px solid currentColor' }} />
                  <div style={{ width: '33%' }} />
                </div>
              )}

              {/* Frame color badge */}
              <div className="frame-text-badge">
                {colorMap[color].name}
              </div>
            </div>

            {/* Performance overlays */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px' }}>
              <span style={{ fontSize: '11px', background: glazing === 'triple' ? '#059669' : '#0284c7', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Thermometer size={12} />
                {glazing === 'triple' ? 'U-Value: 0.8 (A+++)' : 'U-Value: 1.2 (A+)'}
              </span>
              <span style={{ fontSize: '11px', background: '#07090e', border: '1px solid var(--border-medium)', color: 'var(--text-secondary)', padding: '4px 8px', borderRadius: '4px', fontWeight: '500' }}>
                Double Sealed
              </span>
            </div>

          </div>

          {/* RIGHT: Selector Controls */}
          <div className="configurator-controls">
            
            {/* Category: Window or Door */}
            <div className="control-group">
              <span className="control-label">Product Type</span>
              <div className="option-grid">
                <button 
                  className={`option-button ${productType === 'window' ? 'active' : ''}`}
                  onClick={() => handleProductTypeChange('window')}
                >
                  Window Systems
                </button>
                <button 
                  className={`option-button ${productType === 'door' ? 'active' : ''}`}
                  onClick={() => handleProductTypeChange('door')}
                >
                  Door Systems
                </button>
              </div>
            </div>

            {/* Style list */}
            <div className="control-group">
              <span className="control-label">Frame Style</span>
              <div className="option-grid">
                {productType === 'window' ? (
                  <>
                    <button className={`option-button ${style === 'casement' ? 'active' : ''}`} onClick={() => setStyle('casement')}>Casement (Side-hung)</button>
                    <button className={`option-button ${style === 'sash' ? 'active' : ''}`} onClick={() => setStyle('sash')}>Sash (Vertical-slide)</button>
                    <button className={`option-button ${style === 'tilt-turn' ? 'active' : ''}`} onClick={() => setStyle('tilt-turn')}>Tilt & Turn</button>
                  </>
                ) : (
                  <>
                    <button className={`option-button ${style === 'composite' ? 'active' : ''}`} onClick={() => setStyle('composite')}>Composite Front Door</button>
                    <button className={`option-button ${style === 'patio' ? 'active' : ''}`} onClick={() => setStyle('patio')}>Sliding Patio Doors</button>
                    <button className={`option-button ${style === 'bifold' ? 'active' : ''}`} onClick={() => setStyle('bifold')}>Aluminium Bifold Doors</button>
                  </>
                )}
              </div>
            </div>

            {/* Frame Colors */}
            <div className="control-group">
              <span className="control-label">Profile Finish: <span style={{ color: '#fff', textTransform: 'none', marginLeft: '6px' }}>{colorMap[color].name}</span></span>
              <div className="color-swatch-list">
                <button 
                  className={`color-swatch-btn swatch-grey ${color === 'grey' ? 'active' : ''}`} 
                  onClick={() => setColor('grey')} 
                  title="Anthracite Grey"
                />
                <button 
                  className={`color-swatch-btn swatch-black ${color === 'black' ? 'active' : ''}`} 
                  onClick={() => setColor('black')} 
                  title="Matte Black"
                />
                <button 
                  className={`color-swatch-btn swatch-white ${color === 'white' ? 'active' : ''}`} 
                  onClick={() => setColor('white')} 
                  title="Pristine White"
                />
                <button 
                  className={`color-swatch-btn swatch-oak ${color === 'oak' ? 'active' : ''}`} 
                  onClick={() => setColor('oak')} 
                  title="Golden Oak"
                />
              </div>
            </div>

            {/* Glazing Type */}
            <div className="control-group">
              <span className="control-label">Insulation & Glazing</span>
              <div className="option-grid">
                <button className={`option-button ${glazing === 'double' ? 'active' : ''}`} onClick={() => setGlazing('double')}>A+ Double Glazing</button>
                <button className={`option-button ${glazing === 'triple' ? 'active' : ''}`} onClick={() => setGlazing('triple')}>A+++ Triple Glazing</button>
                <button className={`option-button ${glazing === 'frosted' ? 'active' : ''}`} onClick={() => setGlazing('frosted')}>Privacy Frosted Glass</button>
              </div>
            </div>

            {/* Price estimate & CTA */}
            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estimated Supply & Fit</h4>
                  <p style={{ fontSize: '28px', fontWeight: '800', color: '#fff', fontFamily: 'var(--font-heading)' }}>
                    £{estimate.min} - £{estimate.max}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>*Estimated for Maghull /</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Liverpool Area fitting</p>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleFinishConfiguration}>
                <Sparkles size={16} />
                <span>Lock In Design & Get Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
