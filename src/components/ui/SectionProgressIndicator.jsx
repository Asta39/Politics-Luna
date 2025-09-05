import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Hero', icon: '🏆' },
    { id: 'services', label: 'Services', icon: '🎯' },
    { id: 'portfolio', label: 'Portfolio', icon: '📸' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'rush-orders', label: 'Rush Orders', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement?.scrollHeight;
      const clientHeight = document.documentElement?.clientHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section
      const sectionElements = sections?.map(section => ({
        ...section,
        element: document.getElementById(section?.id)
      }))?.filter(section => section?.element);

      const scrollPosition = scrollTop + 200;

      for (let i = sectionElements?.length - 1; i >= 0; i--) {
        const section = sectionElements?.[i];
        if (section?.element && section?.element?.offsetTop <= scrollPosition) {
          setActiveSection(section?.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Right Edge Indicator */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-floating">
        <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-cta border border-border">
          <div className="space-y-3">
            {sections?.map((section, index) => {
              const isActive = activeSection === section?.id;
              const isPassed = sections?.findIndex(s => s?.id === activeSection) > index;
              
              return (
                <button
                  key={section?.id}
                  onClick={() => handleSectionClick(section?.id)}
                  className={`group relative block w-3 h-3 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary scale-125' 
                      : isPassed 
                        ? 'bg-secondary' :'bg-border hover:bg-muted-foreground'
                  }`}
                  title={section?.label}
                >
                  {/* Tooltip */}
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-body font-body-semibold whitespace-nowrap">
                      {section?.label}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 w-1 h-20 bg-border rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-t from-primary to-secondary transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SectionProgressIndicator;