import { useState, useEffect } from 'react';
import { Send, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const getServiceEstimate = (serviceName) => {
  if (!serviceName) return null;
  const s = serviceName.toLowerCase();
  
  // Custom Configurator strings, e.g. "Anthracite Grey SASH with TRIPLE Glazing"
  if (s.includes('sash') || s.includes('casement') || s.includes('tilt-turn') || s.includes('glazing')) {
    let isDoor = s.includes('door') || s.includes('bifold') || s.includes('patio') || s.includes('composite');
    let base = isDoor ? 750 : 380;
    
    if (s.includes('sash')) base += 120;
    if (s.includes('tilt-turn')) base += 80;
    if (s.includes('patio')) base += 350;
    if (s.includes('bifold')) base += 600;
    
    if (s.includes('grey') || s.includes('black') || s.includes('anthracite')) base += 45;
    if (s.includes('oak')) base += 90;
    
    if (s.includes('triple')) base += 110;
    if (s.includes('frosted')) base += 30;
    
    return {
      min: Math.round(base * 0.95),
      max: Math.round(base * 1.05),
      unit: isDoor ? 'per door system' : 'per window'
    };
  }

  // 64 Standard services
  if (s.includes('bifold')) {
    return { min: 3000, max: 5500, unit: 'installed' };
  }
  if (s.includes('composite front door') || s.includes('composite door')) {
    return { min: 1100, max: 2200, unit: 'installed' };
  }
  if (s.includes('french door') || s.includes('french doors') || s.includes('patio door') || s.includes('patio doors')) {
    return { min: 1400, max: 2800, unit: 'installed' };
  }
  if (s.includes('aluminium door') || s.includes('aluminium doors')) {
    return { min: 1500, max: 3200, unit: 'installed' };
  }
  if (s.includes('cat flap') || s.includes('dog flap')) {
    return { min: 180, max: 380, unit: 'installed (includes glass cut)' };
  }
  if (s.includes('fire door') || s.includes('fire doors')) {
    return { min: 450, max: 950, unit: 'installed' };
  }
  if (s.includes('door') && s.includes('repair')) {
    return { min: 90, max: 220, unit: 'per door' };
  }
  if (s.includes('door') && s.includes('installation')) {
    return { min: 800, max: 1800, unit: 'installed' };
  }

  if (s.includes('bay window') || s.includes('bay windows')) {
    return { min: 1200, max: 2500, unit: 'per bay installation' };
  }
  if (s.includes('sash window') || s.includes('sash windows')) {
    return { min: 650, max: 1100, unit: 'per window' };
  }
  if (s.includes('loft window') || s.includes('loft windows') || s.includes('roof window')) {
    return { min: 700, max: 1400, unit: 'per window' };
  }
  if (s.includes('double glazing installation') || s.includes('upvc windows installation')) {
    return { min: 500, max: 850, unit: 'per window' };
  }
  if (s.includes('triple glazing installation')) {
    return { min: 680, max: 1100, unit: 'per window' };
  }
  if (s.includes('misted double glazing') || s.includes('glass replacement') || s.includes('blown')) {
    return { min: 110, max: 290, unit: 'per double glazed unit (glass only)' };
  }
  if (s.includes('window repair') || s.includes('glazing repair')) {
    return { min: 80, max: 180, unit: 'per window' };
  }
  if (s.includes('shutter') || s.includes('shutters')) {
    return { min: 150, max: 350, unit: 'per window' };
  }
  if (s.includes('tinting') || s.includes('film')) {
    return { min: 90, max: 240, unit: 'per window' };
  }
  if (s.includes('draught proofing')) {
    return { min: 70, max: 160, unit: 'per window/door' };
  }

  if (s.includes('conservatory installation') || s.includes('orangeries')) {
    return { min: 9500, max: 22000, unit: 'complete project' };
  }
  if (s.includes('conservatory roof') || s.includes('conservatory insulation')) {
    return { min: 1800, max: 4500, unit: 'complete project' };
  }
  if (s.includes('conservatory repair') || s.includes('conservatory repairs')) {
    return { min: 250, max: 1200, unit: 'varies by repair' };
  }
  if (s.includes('porch')) {
    return { min: 2500, max: 6000, unit: 'installed' };
  }

  if (s.includes('repair') || s.includes('fix')) {
    return { min: 80, max: 220, unit: 'average repair cost' };
  }
  if (s.includes('installation') || s.includes('fitting') || s.includes('install')) {
    return { min: 600, max: 1500, unit: 'average install cost' };
  }

  return { min: 150, max: 850, unit: 'estimate range' };
};

export default function LeadFunnel({ prefilledService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    borough: 'Liverpool',
    name: '',
    phone: '',
    email: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync prefilled service when it changes
  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
      // Jump back to step 1 so they see the prefilled service
      setStep(1);
    }
  }, [prefilledService]);

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const boroughs = [
    "Liverpool (City Centre)",
    "Maghull & Sefton",
    "Wirral & Birkenhead",
    "Knowsley & Huyton",
    "St Helens & Prescot",
    "Halton & Widnes",
    "Other Northwest Region"
  ];

  const standardServices = [
    "Window Installation",
    "Window Repair / Seal Fix",
    "Composite Front Door Fitting",
    "Patio / Bifold Doors Installation",
    "Door Adjustment & Lock Repair",
    "Glass Replacement (Misted/Blown)",
    "Conservatory Installation / Repair",
    "All Aspects of uPVC Work"
  ];

  const estimate = getServiceEstimate(formData.service);

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Get Connected</span>
          <h2 className="section-title">Request Your Instant Estimate</h2>
          <p>
            Get a tailored pricing outline in minutes. Choose your service, fill in your details, and Welshy & team will review your specifications.
          </p>
        </div>

        <div className="glass-panel funnel-card">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              
              {/* Stepper Header Progress */}
              <div className="stepper-header">
                <div className={`stepper-step ${step === 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
                <div className={`stepper-step ${step === 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</div>
                <div className={`stepper-step ${step === 3 ? 'active' : ''}`}>3</div>
              </div>

              {/* STEP 1: Service and Location */}
              {step === 1 && (
                <div className="step-content">
                  <h3 style={{ fontSize: '18px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Select Service & Location</h3>
                  <div className="funnel-inputs">
                    
                    <div className="control-group">
                      <label className="input-label">Project Service Type</label>
                      <select 
                        className="funnel-field" 
                        value={formData.service} 
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        required
                      >
                        <option value="">-- Select a Service --</option>
                        {formData.service && !standardServices.includes(formData.service) && (
                          <option value={formData.service}>{formData.service} (Customized)</option>
                        )}
                        {standardServices.map((srv, idx) => (
                          <option key={idx} value={srv}>{srv}</option>
                        ))}
                      </select>
                    </div>

                    <div className="control-group">
                      <label className="input-label">Fitting Location (Northwest)</label>
                      <select 
                        className="funnel-field" 
                        value={formData.borough} 
                        onChange={(e) => handleInputChange('borough', e.target.value)}
                      >
                        {boroughs.map((bor, idx) => (
                          <option key={idx} value={bor}>{bor}</option>
                        ))}
                      </select>
                    </div>

                  </div>
                </div>
              )}

              {/* STEP 2: Contact Details */}
              {step === 2 && (
                <div className="step-content">
                  <h3 style={{ fontSize: '18px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Your Contact Information</h3>
                  <div className="funnel-inputs">
                    
                    <div className="control-group">
                      <label className="input-label">Full Name</label>
                      <div style={{ position: 'relative' }}>
                        <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          className="funnel-field"
                          style={{ paddingLeft: '38px' }}
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="control-group">
                      <label className="input-label">Phone Number</label>
                      <div style={{ position: 'relative' }}>
                        <Phone size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input 
                          type="tel" 
                          placeholder="07700 900077" 
                          className="funnel-field"
                          style={{ paddingLeft: '38px' }}
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="control-group">
                      <label className="input-label">Email Address</label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="funnel-field"
                          style={{ paddingLeft: '38px' }}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* STEP 3: Details */}
              {step === 3 && (
                <div className="step-content">
                  <h3 style={{ fontSize: '18px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Any Specific Project Notes?</h3>
                  <div className="funnel-inputs">
                    
                    <div className="control-group">
                      <label className="input-label">Project Details / Measurements</label>
                      <textarea 
                        placeholder="Please describe what you need (e.g. 2 blown bedroom double glazed panes to replace, or a new composite front door in anthracite grey)..." 
                        className="funnel-field"
                        value={formData.details}
                        onChange={(e) => handleInputChange('details', e.target.value)}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                      <MapPin size={16} style={{ color: 'var(--accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                        Fitted locally by Adam (Welshy) Lewis. Our team has fully vetted public liability insurance for domestic glazing work.
                      </p>
                    </div>

                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="stepper-actions">
                {step > 1 ? (
                  <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                    Back
                  </button>
                ) : (
                  <div /> // placeholder for alignment
                )}

                {step < 3 ? (
                  <button type="button" className="btn btn-primary" onClick={handleNext} disabled={step === 1 && !formData.service}>
                    Continue
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    <Send size={16} />
                    <span>Request Estimate</span>
                  </button>
                )}
              </div>

            </form>
          ) : (
            /* Thank you page */
            <div className="thank-you-view">
              <div className="thank-you-icon">
                <CheckCircle size={32} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Estimate Request Received!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: '1.6' }}>
                Thank you, <strong>{formData.name}</strong>. We have locked in your request for <strong>{formData.service || 'Glazing Consultation'}</strong> in <strong>{formData.borough}</strong>.
              </p>

              {estimate && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(14, 19, 31, 0.95) 0%, rgba(7, 9, 14, 0.98) 100%)',
                  border: '1px solid var(--border-gold)',
                  padding: '24px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-gold)'
                }}>
                  <span style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Estimated Price Range</span>
                  <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--accent-gold-hover)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', textShadow: '0 0 10px rgba(197, 168, 128, 0.2)' }}>
                    £{estimate.min.toLocaleString()} - £{estimate.max.toLocaleString()}
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginTop: '4px' }}>
                    {estimate.unit ? `*Estimated ${estimate.unit}` : '*Estimated range'} (subject to site survey)
                  </span>
                </div>
              )}
              
              <div style={{ background: 'var(--accent-gold-glow)', border: '1px solid var(--border-medium)', padding: '16px', borderRadius: '8px', marginBottom: '30px', textAlign: 'left' }}>
                <h4 style={{ fontSize: '14px', color: '#fff', marginBottom: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>⚡</span> What happens next?
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Adam (Welshy) and the team have received your project specs. We will contact you shortly at <strong>{formData.phone}</strong> (via call or WhatsApp) to discuss your options, confirm details, and arrange a free face-to-face site survey to lock in your final fixed quote.
                </p>
              </div>

              <button type="button" className="btn btn-secondary" onClick={() => { setSubmitted(false); setStep(1); setFormData({ service: '', borough: 'Liverpool', name: '', phone: '', email: '', details: '' }); }}>
                Submit Another Request
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
