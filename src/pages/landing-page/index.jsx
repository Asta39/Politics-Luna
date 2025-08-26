import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import FloatingActionNavigation from '../../components/ui/FloatingActionNavigation';
import SectionProgressIndicator from '../../components/ui/SectionProgressIndicator';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Luna Graphics - Political Campaign Printing Kenya | Win Your 2027 Election';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Kenya\'s #1 political campaign printing service. Professional posters, banners, t-shirts & more. Same-day delivery, bulk discounts, confidential handling. Win your 2027 election with Luna Graphics.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Luna Graphics - Political Campaign Printing",
      "description": "Professional political campaign printing services in Kenya",
      "url": window.location?.href,
      "telephone": "+254700000000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      },
      "openingHours": "Mo-Sa 08:00-18:00",
      "priceRange": "KES 50 - KES 50000",
      "serviceArea": {
        "@type": "Country",
        "name": "Kenya"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head?.appendChild(script);

    // Cleanup function
    return () => {
      document.head?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header />
      
      {/* Progress Indicator */}
      <SectionProgressIndicator />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Above the fold */}
        <HeroSection />
        
        {/* Problem Agitation Section */}
        <ProblemSection />
        
        {/* Solution Overview Section */}
        <SolutionSection />
        
        {/* Portfolio Showcase Section */}
        <PortfolioSection />
        
        {/* Pricing Calculator Section */}
        <PricingSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Contact Form Section */}
        <ContactSection />
        
        {/* Footer Section */}
        <FooterSection />
      </main>
      
      {/* Floating Action Navigation */}
      <FloatingActionNavigation />
    </div>
  );
};

export default LandingPage;