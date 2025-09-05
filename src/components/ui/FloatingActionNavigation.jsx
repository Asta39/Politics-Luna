import React, { useState, useEffect } from 'react';

import Button from './Button';

const FloatingActionNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState('quote');
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement?.scrollHeight;
      const clientHeight = document.documentElement?.clientHeight;
      const scrollPercentage = (currentScrollY / (scrollHeight - clientHeight)) * 100;

      // Show after scrolling 20% of the page
      setIsVisible(scrollPercentage > 20);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);

      // Switch action based on scroll position
      if (scrollPercentage > 70) {
        setCurrentAction('whatsapp');
      } else {
        setCurrentAction('quote');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleQuoteClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+254791159618'; // Replace with actual WhatsApp Business number
    const message = encodeURIComponent('Hi! I need a quote for political campaign materials for 2027 elections.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Action */}
      <div className="hidden md:block fixed bottom-6 right-6 z-floating">
        <div className={`transition-all duration-300 ${scrollDirection === 'down' ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'}`}>
          {currentAction === 'quote' ? (
            <Button
              variant="default"
              size="lg"
              onClick={handleQuoteClick}
              iconName="FileText"
              iconPosition="left"
              className="font-headline font-headline-bold bg-secondary hover:bg-secondary/90 shadow-cta hover:shadow-lg transition-all duration-200"
            >
              Get Quote
            </Button>
          ) : (
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="font-headline font-headline-bold bg-success hover:bg-success/90 shadow-cta hover:shadow-lg transition-all duration-200"
            >
              WhatsApp
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-floating bg-background border-t border-border shadow-lg">
        <div className="flex items-center justify-center space-x-4 p-4">
          <Button
            variant="outline"
            size="default"
            onClick={handleQuoteClick}
            iconName="FileText"
            iconPosition="left"
            className="flex-1 font-headline font-headline-bold"
          >
            Get Quote
          </Button>
          <Button
            variant="default"
            size="default"
            onClick={handleWhatsAppClick}
            iconName="MessageCircle"
            iconPosition="left"
            className="flex-1 font-headline font-headline-bold bg-success hover:bg-success/90"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingActionNavigation;