import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState({
    campaigns: 0,
    materials: 0,
    deliveryTime: 0
  });

  const metrics = [
    { label: "Campaigns Served", value: 20, suffix: "+", color: "text-secondary" },
    { label: "Materials Printed This Month", value: 1200, suffix: "+", color: "text-accent" },
    { label: "Average Delivery Time", value: 5, suffix: " hrs", color: "text-success" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCount = (target, key) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    animateCount(20, 'campaigns');
    animateCount(1200, 'materials');
    animateCount(5, 'deliveryTime');
  }, []);

  const handleQuoteClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent font-body font-body-semibold text-sm">
                <Icon name="Zap" size={16} className="mr-2" />
                2027 Election Campaign Specialists
              </span>
            </div>

            <h1 className="font-headline font-headline-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
              Win Your 2027 Campaign with 
              <span className="text-accent block mt-2">Professional Political Materials</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-primary-foreground mb-8 max-w-2xl">
              Kenya's most trusted political campaign printing partner. Same-day turnaround, bulk pricing, and confidential handling for candidates who demand excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="default"
                size="lg"
                onClick={handleQuoteClick}
                iconName="Clock"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-primary font-headline font-headline-bold shadow-cta"
              >
                Get Rush Quote Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handlePortfolioClick}
                iconName="Eye"
                iconPosition="left"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground font-headline font-headline-bold"
              >
                View Campaign Portfolio
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className={`font-headline font-headline-bold text-2xl md:text-3xl ${metric.color} mb-1`}>
                    {index === 0 && animatedCounts.campaigns}
                    {index === 1 && animatedCounts.materials.toLocaleString()}
                    {index === 2 && animatedCounts.deliveryTime}
                    {metric.suffix}
                  </div>
                  <div className="font-body text-sm text-primary-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/assets/hero.png" // Correct path for images in the public folder
                alt="Professional political campaign materials including posters, banners, and merchandise"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full shadow-cta">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-body font-body-semibold text-sm">99% Win Rate</span>
                </div>
              </div>

              {/* Floating Delivery Badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-primary px-4 py-2 rounded-full shadow-cta">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={20} />
                  <span className="font-body font-body-semibold text-sm">Same Day Delivery</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;