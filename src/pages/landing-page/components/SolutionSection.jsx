import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SolutionSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'posters',
      category: 'print',
      title: 'Campaign Posters',
      description: 'High-impact political posters that command attention and drive voter recognition.',
      features: ['Weather-resistant materials', 'Bulk pricing available', 'Same-day printing'],
      basePrice: 'From KES 150',
      bulkDiscount: '30% off 500+',
      icon: 'FileImage',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'banners',
      category: 'print',
      title: 'Rally Banners',
      description: 'Large-format banners perfect for rallies, events, and strategic positioning.',
      features: ['Multiple sizes available', 'Wind-resistant design', 'Easy installation'],
      basePrice: 'From KES 2,500',
      bulkDiscount: '25% off 50+',
      icon: 'Flag',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'merchandise',
      category: 'branded',
      title: 'Campaign Merchandise',
      description: 'Branded t-shirts, caps, and accessories that turn supporters into walking advertisements.',
      features: ['Premium fabric quality', 'Durable printing', 'Custom sizing'],
      basePrice: 'From KES 800',
      bulkDiscount: '40% off 200+',
      icon: 'Shirt',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'vehicle',
      category: 'branded',
      title: 'Vehicle Branding',
      description: 'Transform vehicles into mobile campaign headquarters with professional wraps.',
      features: ['Full vehicle wraps', 'Removable materials', 'Professional installation'],
      basePrice: 'From KES 25,000',
      bulkDiscount: '20% off 5+ vehicles',
      icon: 'Car',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'digital',
      category: 'design',
      title: 'Digital Campaign Assets',
      description: 'Social media graphics, web banners, and digital materials for online campaigns.',
      features: ['Multiple format delivery', 'Social media optimized', 'Brand consistency'],
      basePrice: 'From KES 5,000',
      bulkDiscount: 'Package deals available',
      icon: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'stationery',
      category: 'print',
      title: 'Campaign Stationery',
      description: 'Professional letterheads, business cards, and official campaign documents.',
      features: ['Premium paper stock', 'Official formatting', 'Quick turnaround'],
      basePrice: 'From KES 50',
      bulkDiscount: '35% off 1000+',
      icon: 'FileText',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: 'Grid3X3' },
    { id: 'print', label: 'Print Materials', icon: 'Printer' },
    { id: 'branded', label: 'Branded Items', icon: 'Tag' },
    { id: 'design', label: 'Digital Design', icon: 'Palette' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services?.filter(service => service?.category === selectedCategory);

  const handleQuoteClick = (serviceId) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success font-body font-body-semibold text-sm mb-6">
            <Icon name="CheckCircle" size={16} className="mr-2" />
            Complete Campaign Solutions
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Everything You Need to 
            <span className="text-primary block mt-2">Win Your 2027 Campaign</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            From concept to delivery, Luna Graphics provides comprehensive political campaign printing services with guaranteed quality, confidential handling, and lightning-fast turnaround.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-body-semibold text-sm transition-smooth ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-cta'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices?.map((service) => (
            <div
              key={service?.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-cta transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center">
                  <Icon name={service?.icon} size={20} className="text-primary-foreground" />
                </div>
                <div className="absolute bottom-4 right-4 bg-accent text-primary px-3 py-1 rounded-full font-body font-body-semibold text-sm">
                  {service?.basePrice}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-headline font-headline-bold text-xl text-text-primary mb-3">
                  {service?.title}
                </h3>
                <p className="font-body text-text-secondary mb-4 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 font-body text-sm text-text-secondary">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-body font-body-semibold text-success text-sm">
                      {service?.bulkDiscount}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuoteClick(service?.id)}
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="font-headline font-headline-bold"
                  >
                    Get Quote
                  </Button>
                </div>

                {/* Hover Overlay */}
                {hoveredService === service?.id && (
                  <div className="absolute inset-0 bg-primary/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-6">
                      <Icon name="Zap" size={32} className="text-accent mx-auto mb-4" />
                      <h4 className="font-headline font-headline-bold text-lg text-primary-foreground mb-2">
                        Rush Order Available
                      </h4>
                      <p className="font-body text-primary-foreground/90 text-sm mb-4">
                        Same-day delivery for urgent campaign needs
                      </p>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleQuoteClick(service?.id)}
                        className="bg-accent hover:bg-accent/90 text-primary font-headline font-headline-bold"
                      >
                        Rush Quote Now
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Service Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-6">
              Our Service Guarantee
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-success" />
                </div>
                <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">Same-Day Delivery</h4>
                <p className="font-body text-text-secondary text-sm">Rush orders delivered within 4-6 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">100% Confidential</h4>
                <p className="font-body text-text-secondary text-sm">Secure handling of sensitive materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">Premium Quality</h4>
                <p className="font-body text-text-secondary text-sm">Professional-grade materials only</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={24} className="text-secondary" />
                </div>
                <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">Best Pricing</h4>
                <p className="font-body text-text-secondary text-sm">Competitive rates with bulk discounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;