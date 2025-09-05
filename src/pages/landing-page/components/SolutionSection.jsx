import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

// --- New QuoteModal Component ---
const QuoteModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize form data when a new service is selected
    const initialData = {
      name: '',
      phone: '',
    };
    service?.quoteFields?.forEach(field => {
      initialData[field.name] = '';
    });
    setFormData(initialData);
  }, [service]);

  if (!isOpen || !service) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    let message = `*New Quote Request: ${service.title}*\n\n`;
    message += `*Client Details:*\n`;
    message += `- Name: ${formData.name}\n`;
    message += `- Phone: ${formData.phone}\n\n`;
    message += `*Product Details:*\n`;

    service.quoteFields.forEach(field => {
      message += `- ${field.label}: ${formData[field.name]}\n`;
    });

    message += `\n-- Sent from Luna Graphics Website --`;

    const phoneNumber = "254791159618";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl shadow-xl w-full max-w-lg m-4 border border-border">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h3 className="font-headline font-headline-bold text-xl">Get a Quote for {service.title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-primary">
            <Icon name="X" size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-4">
            {/* Standard Fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-body-semibold text-text-secondary mb-1">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-input border border-border rounded-lg px-3 py-2 focus:ring-ring focus:border-ring" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-body-semibold text-text-secondary mb-1">Phone Number (WhatsApp)</label>
              <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-input border border-border rounded-lg px-3 py-2 focus:ring-ring focus:border-ring" />
            </div>

            {/* Dynamic Product-Specific Fields */}
            {service.quoteFields.map(field => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-body-semibold text-text-secondary mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 focus:ring-ring focus:border-ring"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-success hover:bg-success/90" iconName="Send" iconPosition='left'>
              Send via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- Main SolutionSection Component ---
const SolutionSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'posters A3',
      category: 'print',
      title: 'Campaign Posters',
      description: 'High-impact political posters that command attention and drive voter recognition.',
      features: ['Weather-resistant materials', 'Bulk pricing available', 'Same-day printing'],
      basePrice: 'From KES 30',
      bulkDiscount: '30% off 500+',
      icon: 'FileImage',
      image: '/assets/posters.png',
      quoteFields: [
        { name: 'quantity', label: 'Quantity of Posters', type: 'number', placeholder: 'e.g., 1000' },
        { name: 'size', label: 'Poster Size', type: 'text', placeholder: 'e.g., A2, A1' },
        { name: 'paper_type', label: 'Paper Type', type: 'text', placeholder: 'e.g., Glossy, Matte' }
      ]
    },
    {
      id: 'banners 1m by 3m',
      category: 'print',
      title: 'Rally Banners',
      description: 'Large-format banners perfect for rallies, events, and strategic positioning.',
      features: ['Multiple sizes available', 'Wind-resistant design', 'Easy installation'],
      basePrice: 'From KES 1,500',
      bulkDiscount: '25% off 50+',
      icon: 'Flag',
      image: '/assets/banners.png',
      quoteFields: [
        { name: 'quantity', label: 'Number of Banners', type: 'number', placeholder: 'e.g., 50' },
        { name: 'dimensions', label: 'Banner Dimensions (feet)', type: 'text', placeholder: 'e.g., 4ft x 8ft' },
        { name: 'material', label: 'Material', type: 'text', placeholder: 'e.g., Vinyl, Mesh' }
      ]
    },
    {
      id: 'merchandise',
      category: 'branded',
      title: 'Campaign Merchandise',
      description: 'Branded t-shirts, caps, and accessories that turn supporters into walking advertisements.',
      features: ['Premium fabric quality', 'Durable printing', 'Custom sizing'],
      basePrice: 'From KES 600',
      bulkDiscount: '40% off 200+',
      icon: 'Shirt',
      image: '/assets/merch.png',
       quoteFields: [
        { name: 'item_type', label: 'Type of Merchandise', type: 'text', placeholder: 'e.g., T-Shirts, Caps, Boda-boda jackets' },
        { name: 'quantity', label: 'Total Quantity', type: 'number', placeholder: 'e.g., 250' },
        { name: 'branding_details', label: 'Branding Details', type: 'text', placeholder: 'e.g., Logo on front, name on back' }
      ]
    },
    {
      id: 'vehicle',
      category: 'branded',
      title: 'Vehicle Branding',
      description: 'Transform vehicles into mobile campaign headquarters with professional wraps.',
      features: ['Full vehicle wraps', 'Removable materials', 'Professional installation'],
      basePrice: 'From KES 60,000',
      bulkDiscount: '20% off 5+ vehicles',
      icon: 'Car',
      image: '/assets/cars.png',
      quoteFields: [
        { name: 'vehicle_type', label: 'Type of Vehicle', type: 'text', placeholder: 'e.g., Toyota Land Cruiser, Bus' },
        { name: 'num_vehicles', label: 'Number of Vehicles', type: 'number', placeholder: 'e.g., 5' },
        { name: 'coverage', label: 'Branding Coverage', type: 'text', placeholder: 'e.g., Full wrap, partial decals' }
      ]
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
      image: '/assets/digital.png',
      quoteFields: [
        { name: 'asset_type', label: 'Assets Needed', type: 'text', placeholder: 'e.g., Facebook posts, Twitter banners' },
        { name: 'package', label: 'Design Package', type: 'text', placeholder: 'e.g., Starter Pack, Full Campaign Kit' },
        { name: 'details', label: 'Additional Details', type: 'text', placeholder: 'Any specific requirements?' }
      ]
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
      image: '/assets/station.png',
      quoteFields: [
        { name: 'item_type', label: 'Stationery Type', type: 'text', placeholder: 'e.g., Business Cards, Letterheads' },
        { name: 'quantity', label: 'Quantity', type: 'number', placeholder: 'e.g., 1000' },
        { name: 'paper_stock', label: 'Paper Stock', type: 'text', placeholder: 'e.g., 300gsm Artcard' }
      ]
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
    : services.filter(service => service.category === selectedCategory);

  const handleQuoteClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-body-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-cta'
                    : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-cta transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center">
                    <Icon name={service.icon} size={20} className="text-primary-foreground" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent text-primary px-3 py-1 rounded-full font-body font-body-semibold text-sm">
                    {service.basePrice}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline font-headline-bold text-xl text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-text-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 font-body text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="font-body font-body-semibold text-success text-sm">
                        {service.bulkDiscount}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuoteClick(service)}
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="font-headline font-headline-bold"
                    >
                      Get Quote
                    </Button>
                  </div>
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

      <QuoteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  );
};

export default SolutionSection;