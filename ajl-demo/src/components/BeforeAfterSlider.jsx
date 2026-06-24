import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Listen to mouseUp and touchEnd on window to make drag smooth even if cursor leaves container
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="before-after" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Visual Proof</span>
          <h2 className="section-title">The Standard of Our Work</h2>
          <p>
            Drag the slider to see how we replace old, drafty timber frames with modern, high-insulation A+ rated uPVC glazing in Liverpool.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="slider-container"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          style={{ cursor: isDragging ? 'ew-resize' : 'default' }}
        >
          {/* After image is the base */}
          <div 
            className="slider-img slider-after"
            style={{ backgroundImage: "url('/after.png')" }}
          />

          {/* Before image is absolute on top with clipped width */}
          <div 
            className="slider-img slider-before"
            style={{ 
              backgroundImage: "url('/before.png')",
              width: `${sliderPosition}%`,
              borderRight: '1px solid rgba(255,255,255,0.1)'
            }}
          />

          {/* Labels */}
          <div className="slider-label slider-label-before">Before Upgrade</div>
          <div className="slider-label slider-label-after">AJL uPVC Install</div>

          {/* Handle */}
          <div 
            className="slider-handle-bar"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="slider-handle-button">
              <ArrowLeftRight size={18} />
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            *All windows are custom-fitted to the original brick apertures, ensuring zero draft and maximum thermal efficiency.
          </p>
        </div>

      </div>
    </section>
  );
}
