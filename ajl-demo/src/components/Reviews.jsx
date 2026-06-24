import { Star, ShieldCheck } from 'lucide-react';

export default function Reviews() {
  const customerReviews = [
    {
      author: "Rebecca J.",
      location: "Liverpool",
      date: "April 2026",
      rating: "10/10",
      service: "Bay Window Repair & Resealing",
      text: "All new plastic finish and wind proofing of windows... Absolutely amazing, nothing was too much trouble and did an amazing job."
    },
    {
      author: "Adam S.",
      location: "Sefton",
      date: "April 2026",
      rating: "10/10",
      service: "Draught Proofing",
      text: "Window resealing... Communication was excellent throughout... The quality of the work was top notch... clean and tidy afterwards."
    },
    {
      author: "Amy S.",
      location: "Maghull",
      date: "March 2026",
      rating: "10/10",
      service: "uPVC Door Adjustment",
      text: "UPVC Door Adjustment. Excellent service. Work completed quickly and was good value. Great communication."
    },
    {
      author: "Homeowner",
      location: "Wirral",
      date: "March 2026",
      rating: "10/10",
      service: "Blown Glass Pane Replacement",
      text: "Adam did a fantastic job replacing a blown glass pane... professional, reliable, and clearly takes pride in his work."
    },
    {
      author: "Homeowner",
      location: "Liverpool",
      date: "March 2026",
      rating: "10/10",
      service: "Internal Doors & Beading",
      text: "Welshy came to ours to fit seven internal doors and repair some botched beading... done an amazing job... very professional."
    },
    {
      author: "Homeowner",
      location: "Sefton",
      date: "February 2026",
      rating: "10/10",
      service: "Composite Cladding Fitting",
      text: "Composite cladding under front window... thrilled with the work... looks fantastic and keeps the heat in perfectly."
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Client Stories</span>
          <h2 className="section-title">Verified Reviews from Checkatrade</h2>
          <p>
            We take pride in our 10/10 ranking. Here is what homeowners across Liverpool and the Northwest say about Adam & the AJL team.
          </p>
        </div>

        <div className="reviews-grid">
          {customerReviews.map((rev, idx) => (
            <div key={idx} className="glass-card">
              <div className="review-meta">
                <span className="review-author">{rev.author}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{rev.date}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                  <span style={{ marginLeft: '6px', fontSize: '13px', fontWeight: 'bold', color: 'var(--text-primary)' }}>{rev.rating}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#10b981', fontWeight: 'bold' }}>
                  <ShieldCheck size={12} />
                  <span>Verified</span>
                </div>
              </div>

              <p className="review-text">"{rev.text}"</p>
              
              <span className="review-service-badge">{rev.service}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a 
            href="https://www.checkatrade.com/trades/ajlwindowsanddoorsltd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>View Full Checkatrade Profile</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
