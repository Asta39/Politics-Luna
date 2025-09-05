import React, {useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PricingSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('posters');
  const [quantity, setQuantity] = useState(100);
  const [deliveryTime, setDeliveryTime] = useState('standard');
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [bulkDiscount, setBulkDiscount] = useState(0);
  const [rushFee, setRushFee] = useState(0);

  const materials = [
    { value: 'posters', label: 'Campaign Posters (A3)', basePrice: 30, unit: 'per piece' },
    { value: 'banners', label: 'Rally Banners (1m by 3m)', basePrice: 1500, unit: 'per banner' },
    { value: 'tshirts', label: 'Campaign T-shirts', basePrice: 650, unit: 'per shirt' },
    { value: 'flyers', label: 'Campaign Flyers (A5)', basePrice: 10, unit: 'per piece' },
    { value: 'stickers', label: 'Campaign Stickers (1m by 1m)', basePrice: 500, unit: 'per piece' },
    { value: 'vehicle', label: 'Vehicle Branding', basePrice: 60000, unit: 'per vehicle' }
  ];

  const deliveryOptions = [
    { value: 'standard', label: 'Standard (3-5 days)', multiplier: 1 },
    { value: 'express', label: 'Express (1-2 days)', multiplier: 1.2 },
    { value: 'rush', label: 'Rush (Same day)', multiplier: 1.5 }
  ];

  const pricingTiers = [
    {
      name: 'Starter Campaign',
      price: 'From KES 100,000',
      description: 'Perfect for MCA and local campaigns',
      features: [
        '500 A3 Posters',
        '100 Campaign T-shirts',
        '1,000 Flyers',
        'Basic design consultation',
        'Standard delivery (3-5 days)',
        'Email support'
      ],
      popular: false,
      color: 'border-border'
    },
    {
      name: 'Professional Campaign',
      price: 'From KES 300,000',
      description: 'Ideal for MP and county campaigns',
      features: [
        '2,000 A4 Posters',
        '300 Campaign T-shirts',
        '5,000 Flyers',
        '10 Large Banners',
        'Professional design service',
        'Express delivery (1-2 days)',
        'Phone & email support',
        'Bulk pricing discounts'
      ],
      popular: true,
      color: 'border-primary'
    },
    {
      name: 'Premium Campaign',
      price: 'From KES 1,000,000',
      description: 'Complete solution for major campaigns',
      features: [
        '10,000 A1 Posters',
        '1,000 Campaign T-shirts',
        '25,000 Flyers',
        '50 Large Banners',
        '5 Vehicle Wraps',
        'Complete design package',
        'Rush delivery available',
        'Dedicated account manager',
        'Maximum bulk discounts',
        'Confidential handling'
      ],
      popular: false,
      color: 'border-accent'
    }
  ];

  useEffect(() => {
    const material = materials.find(m => m.value === selectedMaterial);
    const delivery = deliveryOptions.find(d => d.value === deliveryTime);
    
    if (material && delivery) {
      let baseTotal = material.basePrice * quantity;
      
      let discount = 0;
      if (quantity >= 1000) discount = 0.3;
      else if (quantity >= 500) discount = 0.25;
      else if (quantity >= 200) discount = 0.15;
      else if (quantity >= 100) discount = 0.1;
      
      const discountAmount = baseTotal * discount;
      const discountedTotal = baseTotal - discountAmount;
      
      const rushAmount = deliveryTime === 'rush' ? discountedTotal * 0.2 : 
                        deliveryTime === 'express' ? discountedTotal * 0.1 : 0;
      
      const finalTotal = discountedTotal + rushAmount;
      
      setCalculatedPrice(finalTotal);
      setBulkDiscount(discountAmount);
      setRushFee(rushAmount);
    }
  }, [selectedMaterial, quantity, deliveryTime]);

  // Handler for sending the calculator quote via WhatsApp
  const handleCalculatorQuoteRequest = () => {
    const materialLabel = materials.find(m => m.value === selectedMaterial)?.label;
    const deliveryLabel = deliveryOptions.find(d => d.value === deliveryTime)?.label;

    let message = `*New Quote Request from Website Calculator*\n`;
    message += `---------------------------------\n\n`;
    message += `*CALCULATION DETAILS*\n`;
    message += `*- Material:* ${materialLabel}\n`;
    message += `*- Quantity:* ${quantity}\n`;
    message += `*- Delivery Timeline:* ${deliveryLabel}\n\n`;
    message += `*PRICE BREAKDOWN*\n`;
    message += `*- Bulk Discount Applied:* -KES ${bulkDiscount.toLocaleString()}\n`;
    message += `*- Rush Fee Applied:* +KES ${rushFee.toLocaleString()}\n`;
    message += `*- *Estimated Total:* KES ${calculatedPrice.toLocaleString()}*\n\n`;
    message += `Please provide a detailed quote and confirm this estimate. I am ready to proceed.`;

    const phoneNumber = "254791159618";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  // Handler for scrolling to the contact form (used by pricing tiers)
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-body font-body-semibold text-sm mb-6">
            <Icon name="Calculator" size={16} className="mr-2" />
            Transparent Pricing
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Campaign Materials Pricing
            <span className="text-primary block mt-2">That Fits Your Budget</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Get instant pricing for your campaign materials with our transparent calculator. No hidden fees, just honest pricing with bulk discounts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pricing Calculator */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-6">
              <Icon name="Calculator" size={24} className="inline mr-2 text-primary" />
              Instant Price Calculator
            </h3>

            <div className="space-y-6">
              <div>
                <Select
                  label="Campaign Material"
                  options={materials}
                  value={selectedMaterial}
                  onChange={setSelectedMaterial}
                  className="mb-4"
                />
              </div>
              <div>
                <Input
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <Select
                  label="Delivery Timeline"
                  options={deliveryOptions}
                  value={deliveryTime}
                  onChange={setDeliveryTime}
                />
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <h4 className="font-headline font-headline-bold text-lg text-text-primary">Price Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-body text-text-secondary">Base Price:</span>
                    <span className="font-body font-body-semibold">KES {(materials.find(m => m.value === selectedMaterial)?.basePrice * quantity).toLocaleString()}</span>
                  </div>
                  {bulkDiscount > 0 && (
                    <div className="flex justify-between text-success">
                      <span className="font-body">Bulk Discount:</span>
                      <span className="font-body font-body-semibold">-KES {bulkDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  {rushFee > 0 && (
                    <div className="flex justify-between text-warning">
                      <span className="font-body">Rush Fee:</span>
                      <span className="font-body font-body-semibold">+KES {rushFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-2 mt-4">
                    <div className="flex justify-between">
                      <span className="font-headline font-headline-bold text-lg text-text-primary">Total Price:</span>
                      <span className="font-headline font-headline-bold text-xl text-primary">KES {calculatedPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="default"
                  fullWidth
                  onClick={handleCalculatorQuoteRequest}
                  iconName="Send"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 font-headline font-headline-bold mt-4"
                >
                  Send Quote via WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-success/5 to-primary/5 rounded-2xl p-8">
              <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-6">
                <Icon name="Percent" size={24} className="inline mr-2 text-success" />
                Bulk Discount Tiers
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <div>
                    <div className="font-body font-body-semibold text-text-primary">100-199 pieces</div>
                    <div className="font-body text-sm text-text-secondary">Small campaign discount</div>
                  </div>
                  <div className="font-headline font-headline-bold text-lg text-success">10% OFF</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <div>
                    <div className="font-body font-body-semibold text-text-primary">200-499 pieces</div>
                    <div className="font-body text-sm text-text-secondary">Medium campaign discount</div>
                  </div>
                  <div className="font-headline font-headline-bold text-lg text-success">15% OFF</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <div>
                    <div className="font-body font-body-semibold text-text-primary">500-999 pieces</div>
                    <div className="font-body text-sm text-text-secondary">Large campaign discount</div>
                  </div>
                  <div className="font-headline font-headline-bold text-lg text-success">25% OFF</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary">
                  <div>
                    <div className="font-body font-body-semibold text-primary">1000+ pieces</div>
                    <div className="font-body text-sm text-primary/80">Maximum campaign discount</div>
                  </div>
                  <div className="font-headline font-headline-bold text-lg text-primary">30% OFF</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-warning/5 to-accent/5 rounded-2xl p-8">
              <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-6">
                <Icon name="Zap" size={24} className="inline mr-2 text-warning" />
                Rush Order Guarantee
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-success mt-1" />
                  <div>
                    <div className="font-body font-body-semibold text-text-primary">Same-Day Delivery</div>
                    <div className="font-body text-sm text-text-secondary">Orders placed before 10 AM delivered by 6 PM</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-body font-body-semibold text-text-primary">Quality Guaranteed</div>
                    <div className="font-body text-sm text-text-secondary">No compromise on quality even with rush orders</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-body font-body-semibold text-text-primary">Priority Support</div>
                    <div className="font-body text-sm text-text-secondary">Dedicated hotline for urgent campaign needs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-sm border-2 ${tier.color} ${tier.popular ? 'transform scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-body font-body-semibold text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="font-headline font-headline-bold text-xl text-text-primary mb-2">{tier.name}</h3>
                <div className="font-headline font-headline-bold text-3xl text-primary mb-2">{tier.price}</div>
                <p className="font-body text-text-secondary text-sm">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="font-body text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "default" : "outline"}
                fullWidth
                onClick={scrollToContact}
                className={`font-headline font-headline-bold ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;