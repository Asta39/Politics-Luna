import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campaignType: '',
    constituency: '',
    materials: [],
    quantity: '',
    deliveryDate: '',
    budget: '',
    message: '',
    rushOrder: false,
    confidential: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const campaignTypes = [
    { value: 'presidential', label: 'Presidential Campaign' },
    { value: 'gubernatorial', label: 'Gubernatorial Campaign' },
    { value: 'senatorial', label: 'Senatorial Campaign' },
    { value: 'parliamentary', label: 'Parliamentary (MP) Campaign' },
    { value: 'county-assembly', label: 'County Assembly (MCA) Campaign' },
    { value: 'party', label: 'Political Party Campaign' },
    { value: 'other', label: 'Other Political Campaign' }
  ];

  const materialTypes = [
    { value: 'posters', label: 'Campaign Posters' },
    { value: 'banners', label: 'Rally Banners' },
    { value: 'tshirts', label: 'Campaign T-shirts' },
    { value: 'flyers', label: 'Campaign Flyers' },
    { value: 'stickers', label: 'Campaign Stickers' },
    { value: 'vehicle', label: 'Vehicle Branding' },
    { value: 'digital', label: 'Digital Assets' },
    { value: 'merchandise', label: 'Campaign Merchandise' },
    { value: 'stationery', label: 'Campaign Stationery' }
  ];

  const budgetRanges = [
    { value: 'under-50k', label: 'Under KES 50,000' },
    { value: '50k-100k', label: 'KES 50,000 - 100,000' },
    { value: '100k-250k', label: 'KES 100,000 - 250,000' },
    { value: '250k-500k', label: 'KES 250,000 - 500,000' },
    { value: '500k-1m', label: 'KES 500,000 - 1,000,000' },
    { value: 'over-1m', label: 'Over KES 1,000,000' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMaterialChange = (materialValue, checked) => {
    setFormData(prev => ({
      ...prev,
      materials: checked 
        ? [...prev?.materials, materialValue]
        : prev?.materials?.filter(m => m !== materialValue)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Helper to get label from value for cleaner message
    const getLabel = (arr, value) => arr.find(item => item.value === value)?.label || value;

    // Construct the corporate-styled WhatsApp message
    let message = `*New Campaign Quote Request - Luna Graphics*\n`;
    message += `---------------------------------\n\n`;
    message += `*CLIENT DETAILS*\n`;
    message += `*- Name:* ${formData.name}\n`;
    message += `*- Email:* ${formData.email}\n`;
    message += `*- Phone:* ${formData.phone}\n\n`;
    message += `*CAMPAIGN DETAILS*\n`;
    message += `*- Campaign Type:* ${getLabel(campaignTypes, formData.campaignType)}\n`;
    message += `*- Constituency/Area:* ${formData.constituency}\n\n`;
    message += `*MATERIAL REQUIREMENTS*\n`;
    message += `*- Materials Needed:* ${formData.materials.map(m => getLabel(materialTypes, m)).join(', ')}\n`;
    message += `*- Estimated Quantity:* ${formData.quantity || 'Not specified'}\n`;
    message += `*- Required Delivery Date:* ${formData.deliveryDate || 'Not specified'}\n`;
    message += `*- Budget Range:* ${getLabel(budgetRanges, formData.budget) || 'Not specified'}\n\n`;
    message += `*SPECIAL OPTIONS*\n`;
    message += `*- Rush Order (24hrs):* ${formData.rushOrder ? 'YES' : 'NO'}\n`;
    message += `*- Confidential Handling:* ${formData.confidential ? 'YES' : 'NO'}\n\n`;
    
    if (formData.message) {
      message += `*ADDITIONAL MESSAGE*\n`;
      message += `${formData.message}\n\n`;
    }
    
    const requestID = `LG${Date.now().toString().slice(-6)}`;
    message += `-- Request ID: #${requestID} --`;

    const phoneNumber = "254791159618";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message and reset the form
    setSubmitStatus({ status: 'success', id: requestID });
    setIsSubmitting(false);
    setFormData({
      name: '', email: '', phone: '', campaignType: '', constituency: '',
      materials: [], quantity: '', deliveryDate: '', budget: '', message: '',
      rushOrder: false, confidential: false
    });
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Rush Order Hotline',
      description: 'For urgent campaign material needs',
      contact: '+254 791 159 618',
      action: () => window.open('tel:+254791159618', '_self'),
      available: '24/7 During Campaign Season'
    },
    {
      icon: 'Mail',
      title: 'Email Quotes',
      description: 'Detailed quotes and consultations',
      contact: 'info.lunagraphics@gmail.com',
      action: () => window.open('mailto:info.lunagraphics@gmail.com', '_self'),
      available: 'Response within 2 hours'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp Business',
      description: 'Quick quotes and file sharing',
      contact: '+254 791 159 618',
      action: () => window.open('https://wa.me/254791159618?text=Hi! I need a quote for political campaign materials.', '_blank'),
      available: 'Instant messaging'
    },
    {
      icon: 'MapPin',
      title: 'Visit Our Office',
      description: 'See samples and discuss in person',
      contact: 'Nairobi CBD, Kweria Road, Kenya',
      action: () => window.open('https://maps.google.com?q=-1.2800970245344157,36.82274805944331', '_blank'),
      available: 'Mon-Sat: 8AM-6PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-body font-body-semibold text-sm mb-6">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Get Your Campaign Quote
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Ready to Win Your 2027 Campaign?
            <span className="text-primary block mt-2">Let's Create Your Materials</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Get a personalized quote for your political campaign materials. Our experts will help you choose the right materials and quantities for your campaign success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-6">
                Request Your Campaign Quote
              </h3>

              {submitStatus?.status === 'success' && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <div>
                      <h4 className="font-body font-body-semibold text-success">Quote Request Sent!</h4>
                      <p className="font-body text-success/80 text-sm">
                        Please confirm by sending the pre-filled message on WhatsApp. Ref: #{submitStatus.id}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus?.status === 'error' && (
                <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" size={20} className="text-error" />
                    <div>
                      <h4 className="font-body font-body-semibold text-error">Submission Failed</h4>
                      <p className="font-body text-error/80 text-sm">
                        Please try again or contact us directly at +254 791 159 618
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Full Name" type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Enter your full name" required />
                  <Input label="Email Address" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="your.email@example.com" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Phone Number (WhatsApp)" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="+254 791 159 618" required />
                  <Select label="Campaign Type" options={campaignTypes} value={formData.campaignType} onChange={(value) => handleInputChange('campaignType', value)} placeholder="Select campaign type" required />
                </div>
                <Input label="Constituency/Area" type="text" value={formData.constituency} onChange={(e) => handleInputChange('constituency', e.target.value)} placeholder="e.g., Kiambu East, Nairobi County" required />
                <div>
                  <label className="block font-body font-body-semibold text-text-primary mb-3">Campaign Materials Needed *</label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {materialTypes.map((material) => (
                      <Checkbox key={material.value} label={material.label} checked={formData.materials.includes(material.value)} onChange={(e) => handleMaterialChange(material.value, e.target.checked)} />
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Estimated Quantity" type="text" value={formData.quantity} onChange={(e) => handleInputChange('quantity', e.target.value)} placeholder="e.g., 5000 posters, 500 t-shirts" />
                  <Input label="Required Delivery Date" type="date" value={formData.deliveryDate} onChange={(e) => handleInputChange('deliveryDate', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                </div>
                <Select label="Budget Range" options={budgetRanges} value={formData.budget} onChange={(value) => handleInputChange('budget', value)} placeholder="Select your budget range" />
                <div>
                  <label className="block font-body font-body-semibold text-text-primary mb-2">Additional Requirements</label>
                  <textarea value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Tell us about your specific requirements, design preferences, or any special needs..." rows={4} className="w-full px-4 py-3 border border-border rounded-lg font-body text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" />
                </div>
                <div className="space-y-3">
                  <Checkbox label="This is a rush order (needed within 24 hours)" checked={formData.rushOrder} onChange={(e) => handleInputChange('rushOrder', e.target.checked)} />
                  <Checkbox label="This campaign requires confidential handling" checked={formData.confidential} onChange={(e) => handleInputChange('confidential', e.target.checked)} />
                </div>
                <Button type="submit" variant="default" size="lg" fullWidth loading={isSubmitting} iconName="Send" iconPosition="left" className="bg-primary hover:bg-primary/90 font-headline font-headline-bold">
                  {isSubmitting ? 'Preparing Your Message...' : 'Get Quote via WhatsApp'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="font-headline font-headline-bold text-xl text-text-primary mb-6">Contact Us Directly</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer" onClick={method.action}>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={method.icon} size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-body font-body-semibold text-text-primary mb-1">{method.title}</h4>
                        <p className="font-body text-text-secondary text-sm mb-2">{method.description}</p>
                        <p className="font-body font-body-semibold text-primary text-sm mb-1">{method.contact}</p>
                        <p className="font-body text-text-secondary text-xs">{method.available}</p>
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-text-secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="font-headline font-headline-bold text-xl text-text-primary mb-4">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="h-48 rounded-xl overflow-hidden">
                  <iframe width="100%" height="100%" loading="lazy" title="Luna Graphics Office Location" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=-1.2800970245344157,36.82274805944331&z=15&output=embed`} className="border-0" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3"><Icon name="MapPin" size={16} className="text-primary" /><span className="font-body text-text-secondary text-sm">Luna Graphics Office, Nairobi CBD, Kenya</span></div>
                  <div className="flex items-center space-x-3"><Icon name="Clock" size={16} className="text-primary" /><span className="font-body text-text-secondary text-sm">Mon-Sat: 8:00 AM - 6:00 PM</span></div>
                  <div className="flex items-center space-x-3"><Icon name="Car" size={16} className="text-primary" /><span className="font-body text-text-secondary text-sm">Free parking available</span></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-warning/10 to-error/10 rounded-2xl p-6 border border-warning/20">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="AlertTriangle" size={24} className="text-warning" />
                <h3 className="font-headline font-headline-bold text-lg text-text-primary">Campaign Emergency?</h3>
              </div>
              <p className="font-body text-text-secondary text-sm mb-4">Need materials urgently? Our emergency hotline is available 24/7 during campaign season for critical printing needs.</p>
              <Button variant="default" size="sm" fullWidth iconName="Phone" iconPosition="left" className="bg-warning hover:bg-warning/90 text-primary font-headline font-headline-bold" onClick={() => window.open('tel:+254791159618', '_self')}>
                Emergency Hotline: +254 791 159 618
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;