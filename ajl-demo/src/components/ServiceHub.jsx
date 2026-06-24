import { useState } from 'react';
import { Search, ChevronRight, HelpCircle } from 'lucide-react';

export default function ServiceHub({ onSelectService, selectedService }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    // Windows category
    { name: "Aluminium Windows Installation", category: "windows" },
    { name: "Aluminium Windows Repair", category: "windows" },
    { name: "Bay Windows Installation", category: "windows" },
    { name: "Bay Windows Repair", category: "windows" },
    { name: "Double Glazing Installation", category: "windows" },
    { name: "Double Glazing Repair", category: "windows" },
    { name: "Frosted Windows", category: "windows" },
    { name: "Interior Window Shutter Fitters", category: "windows" },
    { name: "Loft Windows Installation", category: "windows" },
    { name: "Loft Windows Repair", category: "windows" },
    { name: "Roof Windows Installation", category: "windows" },
    { name: "Roof Windows Repair", category: "windows" },
    { name: "Secondary Glazing", category: "windows" },
    { name: "Timber / Wooden Windows Installation", category: "windows" },
    { name: "Timber / Wooden Windows Repair", category: "windows" },
    { name: "Triple Glazing Installation", category: "windows" },
    { name: "Triple Glazing Repair", category: "windows" },
    { name: "UPVC Windows Installation", category: "windows" },
    { name: "UPVC Windows Repair", category: "windows" },
    { name: "Window Film", category: "windows" },
    { name: "Window Fitters", category: "windows" },
    { name: "Window Shutter Fitters", category: "windows" },
    { name: "Window Shutters", category: "windows" },
    { name: "Window Tinting", category: "windows" },
    { name: "Wooden Sash Windows Installation", category: "windows" },
    { name: "Wooden Sash Windows Repair", category: "windows" },
    { name: "Windows Supply", category: "windows" },

    // Doors category
    { name: "Aluminium Doors Installation", category: "doors" },
    { name: "Aluminium Doors Repair", category: "doors" },
    { name: "Bifold Doors Installation", category: "doors" },
    { name: "Bifold Doors Repair", category: "doors" },
    { name: "Cat Flaps", category: "doors" },
    { name: "Composite Front Doors Installation", category: "doors" },
    { name: "Composite Front Doors Repair", category: "doors" },
    { name: "Dog Flaps", category: "doors" },
    { name: "Door Canopies", category: "doors" },
    { name: "Exterior Doors Installation", category: "doors" },
    { name: "Exterior Doors Repair", category: "doors" },
    { name: "Fire Doors Installation", category: "doors" },
    { name: "Fire Doors Repair", category: "doors" },
    { name: "French Doors Installation", category: "doors" },
    { name: "French Doors Repair", category: "doors" },
    { name: "Patio Doors Installation", category: "doors" },
    { name: "Patio Doors Repair", category: "doors" },
    { name: "Stable Doors", category: "doors" },
    { name: "Timber / Wooden Doors Installation", category: "doors" },
    { name: "Timber / Wooden Doors Repair", category: "doors" },
    { name: "UPVC Doors Installation", category: "doors" },
    { name: "UPVC Doors Repair", category: "doors" },
    { name: "Doors Supply", category: "doors" },

    // Conservatories category
    { name: "Conservatory Glass Heat Reduction Film", category: "conservatories" },
    { name: "Conservatory Installation", category: "conservatories" },
    { name: "Conservatory Repairs", category: "conservatories" },
    { name: "Conservatory Roof Insulation", category: "conservatories" },
    { name: "Orangeries", category: "conservatories" },
    { name: "Porch Installation", category: "conservatories" },
    { name: "Porches Repair", category: "conservatories" },

    // General / Repairs specific (creating visual overlap mapping for ease of find)
    { name: "Draught Proofing", category: "repairs" },
    { name: "Emergency Windows / Doors / Conservatories Service", category: "repairs" },
    { name: "Glass Replacement", category: "repairs" },
    { name: "Misted Double Glazing", category: "repairs" },
    { name: "UPVC Repairs", category: "repairs" },
    { name: "UPVC Spraying", category: "repairs" }
  ];

  // We add items that end with "Repair" or are in repairs category to the repairs filter tab
  const getDisplayCategory = (service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'repairs') {
      return service.category === 'repairs' || service.name.toLowerCase().includes('repair') || service.name.toLowerCase().includes('proofing') || service.name.toLowerCase().includes('replacement');
    }
    return service.category === activeTab;
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = getDisplayCategory(service);
    return matchesSearch && matchesTab;
  });

  const handleServiceClick = (name) => {
    onSelectService(name);
    // Smooth scroll down to the contact form section
    const targetSection = document.getElementById('contact');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Full Capability</span>
          <h2 className="section-title">64 Services Handled Professionally</h2>
          <p>
            From simple window resealing and cat flap fittings to grand conservatory installations and bifold doors. Select a service to pre-populate our quote estimator.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search for a service (e.g. Cat Flap, Misted, Sash, Bifold)..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tab List */}
        <div className="tabs-list">
          <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Services (64)</button>
          <button className={`tab-btn ${activeTab === 'windows' ? 'active' : ''}`} onClick={() => setActiveTab('windows')}>Windows (27)</button>
          <button className={`tab-btn ${activeTab === 'doors' ? 'active' : ''}`} onClick={() => setActiveTab('doors')}>Doors (23)</button>
          <button className={`tab-btn ${activeTab === 'conservatories' ? 'active' : ''}`} onClick={() => setActiveTab('conservatories')}>Conservatories (7)</button>
          <button className={`tab-btn ${activeTab === 'repairs' ? 'active' : ''}`} onClick={() => setActiveTab('repairs')}>Repairs & Reseals (32)</button>
        </div>

        {/* Filtered Grid */}
        <div className="services-list-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, idx) => {
              const isSelected = selectedService === service.name;
              return (
                <div 
                  key={idx} 
                  className={`service-item-card ${isSelected ? 'active' : ''}`}
                  style={{
                    borderColor: isSelected ? 'var(--accent-gold)' : undefined,
                    background: isSelected ? 'var(--accent-gold-glow)' : undefined
                  }}
                  onClick={() => handleServiceClick(service.name)}
                >
                  <span className="service-item-name">{service.name}</span>
                  <div className="service-item-action">
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-results">
              <HelpCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
              <p>No matching service found. Try searching for a keyword like "uPVC", "Composite", or "Film".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
