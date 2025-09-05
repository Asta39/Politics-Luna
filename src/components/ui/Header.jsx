import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
// Assuming your logo is in public/assets/images/logo.png
// No import is needed if the assets are in the public folder.

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Updated navigation items
  const navigationItems = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'main-site', label: 'Main Website', href: 'https://lunagraphics.co.ke', external: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navigationItems
        .filter(item => !item.external)
        .map(item => document.getElementById(item.id))
        .filter(Boolean);
        
      const scrollPosition = window.scrollY + 100;

      let currentSection = '';
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+254791159618';
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-card p-1 rounded-lg flex items-center justify-center border border-border">
              {/* Replaced SVG with an Image tag */}
              <img 
                src="/logo.png" 
                alt="Luna Graphics Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div>
              <h1 className="font-headline font-headline-bold text-xl text-primary">
                Luna Graphics
              </h1>
              <p className="text-xs text-text-secondary font-body">
                Political Campaign Printing
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-body-semibold text-sm transition-colors hover:text-primary text-text-primary flex items-center"
                >
                  {item.label}
                  <Icon name="ExternalLink" size={14} className="ml-1.5" />
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-body font-body-semibold text-sm transition-colors hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleQuoteClick}
              className="font-headline font-headline-bold"
            >
              Get Quote
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleCallClick}
              iconName="Phone"
              iconPosition="left"
              className="font-headline font-headline-bold bg-secondary hover:bg-secondary/90"
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-primary hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-background border-t border-border shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full text-left py-2 px-3 rounded-md font-body font-body-semibold transition-colors text-text-primary hover:text-primary hover:bg-muted"
                >
                  <span>{item.label}</span>
                  <Icon name="ExternalLink" size={16} />
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left py-2 px-3 rounded-md font-body font-body-semibold transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10' 
                      : 'text-text-primary hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={handleQuoteClick}
                className="font-headline font-headline-bold"
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={handleCallClick}
                iconName="Phone"
                iconPosition="left"
                className="font-headline font-headline-bold bg-secondary hover:bg-secondary/90"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;