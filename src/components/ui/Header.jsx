import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'rush-orders', label: 'Rush Orders', href: '#rush-orders' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navigationItems?.map(item => document.getElementById(item?.id))?.filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = sections?.[i];
        if (section && section?.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems?.[i]?.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-header-height">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h1 className="font-headline font-headline-bold text-xl text-primary">
                  Luna Graphics
                </h1>
                <p className="text-xs text-text-secondary font-body">
                  Political Campaign Printing
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => handleNavClick(item?.href)}
                className={`font-body font-body-semibold text-sm transition-smooth hover:text-primary ${
                  activeSection === item?.id 
                    ? 'text-primary border-b-2 border-primary pb-1' :'text-text-primary'
                }`}
              >
                {item?.label}
              </button>
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
              onClick={handleQuoteClick}
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
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-primary hover:bg-muted transition-smooth"
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
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navigationItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => handleNavClick(item?.href)}
                className={`block w-full text-left py-2 px-3 rounded-md font-body font-body-semibold transition-smooth ${
                  activeSection === item?.id
                    ? 'text-primary bg-primary/10' :'text-text-primary hover:text-primary hover:bg-muted'
                }`}
              >
                {item?.label}
              </button>
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
                onClick={handleQuoteClick}
                iconName="Phone"
                iconPosition="left"
                className="font-headline font-headline-bold bg-secondary hover:bg-secondary/90"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;