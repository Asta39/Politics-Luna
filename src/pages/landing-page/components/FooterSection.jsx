import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { label: 'Main website-Luna Graphics', href: 'https://www.lunagraphics.co.ke/' },
      { label: 'Career Opportunities', href: 'https://www.lunagraphics.co.ke/team-page/' }
    ],
    support: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Rush Order Hotline', href: 'tel:+254791159618' },
      { label: 'Email Support', href: 'mailto:info.lunagraphics@gmail.com' },
      { label: 'WhatsApp Chat', href: 'https://wa.me/254791159618' },
    ]
   
  };

  const socialLinks = [
   
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'FSC Certified', description: 'Sustainable Printing' },
    { name: 'IEBC Approved', description: 'Election Materials' },
    { name: 'Data Protection', description: 'GDPR Compliant' }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, href?.startsWith('http') ? '_blank' : '_self');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    // Newsletter subscription logic would go here
    alert('Thank you for subscribing to Luna Graphics updates!');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-card p-1 rounded-lg flex items-center justify-center border border-border">
                <img 
                src="/logo.png" 
                alt="Luna Graphics Logo" 
                className="h-full w-full object-contain" 
              />
                 
              </div>
              <div>
                <h3 className="font-headline font-headline-bold text-xl text-accent">
                  Luna Graphics
                </h3>
                <p className="text-xs text-primary-foreground/80">
                  Political Campaign Printing Specialists
                </p>
              </div>
            </div>
            
            <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed">
              Kenya's most trusted political campaign printing partner since 2018. We've helped over 800 candidates win their elections with professional, high-quality campaign materials and same-day delivery service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-accent" />
                <span className="font-body text-sm">+254 791 159 618</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-accent" />
                <span className="font-body text-sm">info.lunagraphics@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span className="font-body text-sm">Nairobi CBD, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="font-body text-sm">24/7 During Campaign Season</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(social?.href)}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                  title={social?.label}
                >
                  <Icon name={social?.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Services Links */}
          

          {/* Company Links */}
          <div>
            <h4 className="font-headline font-headline-bold text-lg text-accent mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link?.href)}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-headline font-headline-bold text-lg text-accent mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link?.href)}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-headline font-headline-bold text-xl text-accent mb-2">
                Stay Updated on 2027 Election Services
              </h4>
              <p className="font-body text-primary-foreground/80 text-sm">
                Get exclusive updates on new services, bulk pricing offers, and campaign season announcements.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              <Button
                type="submit"
                variant="default"
                className="bg-accent hover:bg-accent/90 text-primary font-headline font-headline-bold"
                iconName="Send"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="font-headline font-headline-bold text-lg text-accent mb-6 text-center">
            Our Certifications & Compliance
          </h4>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <h5 className="font-body font-body-semibold text-primary-foreground text-sm mb-1">
                  {cert?.name}
                </h5>
                <p className="font-body text-primary-foreground/70 text-xs">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-body text-primary-foreground/80 text-sm">
                © {currentYear} Luna Graphics. All rights reserved.
              </p>
              <p className="font-body text-primary-foreground/80 text-sm">
                Made by <a href="https://evoqcreative.co.ke" target="_blank" rel="noopener noreferrer">Evoq</a>
              </p>
              <div className="flex items-center space-x-4">
                {footerLinks?.legal?.slice(0, 3)?.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link?.href)}
                    className="font-body text-primary-foreground/60 hover:text-accent text-xs transition-colors"
                  >
                    {link?.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="font-body text-primary-foreground/80 text-xs">
                  Secure & Confidential
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} className="text-accent" />
                <span className="font-body text-primary-foreground/80 text-xs">
                  Same-Day Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;