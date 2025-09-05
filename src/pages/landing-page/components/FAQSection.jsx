import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      category: 'Confidentiality & Security',
      question: 'How do you ensure confidentiality of sensitive campaign materials?',
      answer: `We maintain strict confidentiality protocols for all political campaigns. Our team signs NDAs, materials are handled in secure facilities, and we have separate production lines for sensitive political content. All digital files are encrypted and stored securely, with access limited to authorized personnel only. We understand the sensitive nature of political campaigns and have served over 800 campaigns without a single confidentiality breach.`,
      caseStudy: 'Presidential Campaign 2022 - Complete confidentiality maintained',
      contactInfo: 'For confidentiality concerns: info.lunagraphics@gmail.com'
    },
    {
      category: 'Pricing & Discounts',
      question: 'What bulk pricing tiers are available for large campaign orders?',
      answer: `Our bulk pricing structure offers significant savings: 10% off for 100-199 pieces, 15% off for 200-499 pieces, 25% off for 500-999 pieces, and 30% off for 1000+ pieces. We also offer package deals for complete campaign material sets. Payment terms include 50% deposit with balance on delivery, and we accept bank transfers, mobile money, and cash payments. Special financing options available for registered political parties.`,
      caseStudy: 'Gubernatorial Campaign saved KES 450,000 with bulk pricing',
      contactInfo: 'For pricing inquiries: info.lunagraphics@gmail.com'
    },
    {
      category: 'Rush Orders & Delivery',
      question: 'Can you handle same-day delivery for urgent campaign needs?',
      answer: `Yes, we specialize in rush orders for political campaigns. Same-day delivery is available for orders placed before 10 AM, with delivery by 6 PM within Nairobi. Express delivery (1-2 days) covers major towns across Kenya. Rush orders incur a 20% premium, express orders 10% premium. We maintain emergency stock of common materials and have dedicated rush production lines. Our record: 4-hour turnaround for 5,000 posters during a campaign crisis.`,
      caseStudy: 'MP Campaign - 10,000 posters delivered in 6 hours',
      contactInfo: 'Rush orders hotline: +254 791 159 618'
    },
    {
      category: 'Design & Revisions',
      question: 'How many design revisions are included, and what if I need more?',
      answer: `All packages include 3 free design revisions. Additional revisions are charged at KES 2,000 each for major changes, KES 500 for minor adjustments. We provide initial design concepts within 24 hours, revisions within 12 hours. Our design team specializes in political campaigns and understands voter psychology, color psychology, and effective political messaging. We can work with your existing brand guidelines or create a complete visual identity.`,
      caseStudy: 'County Assembly Campaign - 7 revisions perfected winning design',
      contactInfo: 'Design team: info.lunagraphics@gmail.com'
    },
    {
      category: 'Quality & Materials',
      question: 'What materials do you use and how weather-resistant are they?',
      answer: `We use premium weather-resistant materials: 440gsm PVC for outdoor banners (5+ year lifespan), 350gsm synthetic paper for posters (waterproof, tear-resistant), UV-resistant inks that won't fade in sunlight. T-shirts use 100% cotton with screen printing or heat transfer. Vehicle wraps use 3M vinyl with 7-year outdoor durability. All materials are tested for Kenyan weather conditions including heavy rains and intense sun. We guarantee material quality for the entire campaign period.`,
      caseStudy: 'Presidential Campaign materials survived entire rainy season',contactInfo: 'Quality assurance: info.lunagraphics@gmail.com'
    },
    {
      category: 'Payment & Terms',question: 'What payment methods do you accept and what are your terms?',
      answer: `We accept multiple payment methods: Bank transfers (RTGS, EFT), M-Pesa and Airtel Money, Cash payments at our offices, Cheques from registered entities. Payment terms: 50% deposit to commence production, 50% balance on delivery. Credit terms available for established political parties and repeat clients. We provide detailed invoices and receipts for campaign finance compliance. All payments are processed securely with transaction confirmations.`,
      caseStudy: 'Flexible payment terms helped 15 MCA campaigns',contactInfo: 'Accounts department: info.lunagraphics@gmail.com'
    },
    {
      category: 'Coverage & Delivery',question: 'Which areas do you deliver to across Kenya?',
      answer: `We deliver nationwide across Kenya. Same-day delivery in Nairobi and surrounding areas, next-day delivery to major towns (Mombasa, Kisumu, Nakuru, Eldoret, Nyeri, Meru, Machakos), 2-3 days to other counties. We have partnerships with reliable courier services and local agents. Delivery costs vary by location and urgency. Free delivery for orders above KES 50,000 within Nairobi, above KES 100,000 to major towns. Special arrangements for remote constituencies.`,
      caseStudy: 'Delivered to all 47 counties for national campaign',contactInfo: 'Logistics team: info.lunagraphics@gmail.com'
    },
    {
      category: 'Campaign Strategy',question: 'Do you provide campaign strategy advice beyond printing?',answer: `While we focus on printing and materials, our team has extensive political campaign experience. We provide guidance on material placement strategies, voter psychology in design choices, optimal quantities based on constituency size, and timing of material distribution. We can recommend complementary services like digital marketing agencies, event planners, and campaign consultants from our network. Our consultation is included free with orders above KES 100,000.`,caseStudy: 'Strategic advice contributed to 15% vote increase',contactInfo: 'Campaign consultation: info.lunagraphics@gmail.com'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-body font-body-semibold text-sm mb-6">
            <Icon name="HelpCircle" size={16} className="mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Everything You Need to Know
            <span className="text-primary block mt-2">About Our Political Printing Services</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Get answers to the most common questions about our political campaign printing services, pricing, delivery, and confidentiality protocols.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-body font-body-semibold text-xs">
                      {faq?.category}
                    </span>
                  </div>
                  <h3 className="font-headline font-headline-bold text-lg text-text-primary pr-4">
                    {faq?.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={24}
                    className="text-text-secondary"
                  />
                </div>
              </button>

              {/* Answer Content */}
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-border">
                  <div className="pt-6">
                    <p className="font-body text-text-secondary leading-relaxed mb-6">
                      {faq?.answer}
                    </p>

                    {/* Case Study */}
                    <div className="bg-success/5 rounded-xl p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="FileText" size={20} className="text-success mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-body font-body-semibold text-success mb-1">
                            Case Study Example
                          </h4>
                          <p className="font-body text-text-secondary text-sm">
                            {faq?.caseStudy}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-primary/5 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Mail" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-body font-body-semibold text-primary mb-1">
                            Need More Information?
                          </h4>
                          <p className="font-body text-text-secondary text-sm">
                            {faq?.contactInfo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="font-body text-text-secondary mb-8 max-w-2xl mx-auto">
              Our political campaign printing experts are ready to help. Get personalized answers to your specific campaign material needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleContactClick}
                iconName="MessageSquare"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 font-headline font-headline-bold"
              >
                Ask Our Experts
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="font-headline font-headline-bold"
                onClick={() => window.open('tel:+254791159618', '_self')}
              >
                Call Now: +254 791 159 618
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Contact Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <Icon name="Clock" size={32} className="text-success mx-auto mb-4" />
            <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">
              Rush Orders
            </h4>
            <p className="font-body text-text-secondary text-sm mb-4">
              Same-day delivery for urgent campaign needs
            </p>
            <Button
              variant="outline"
              size="sm"
              className="font-headline font-headline-bold"
              onClick={() => window.open('tel:+254791159618', '_self')}
            >
              Rush Hotline
            </Button>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
            <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">
              Email Support
            </h4>
            <p className="font-body text-text-secondary text-sm mb-4">
              Detailed quotes and technical questions
            </p>
            <Button
              variant="outline"
              size="sm"
              className="font-headline font-headline-bold"
              onClick={() => window.open('mailto:info.lunagraphics@gmail.com', '_self')}
            >
              Send Email
            </Button>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <Icon name="MessageCircle" size={32} className="text-success mx-auto mb-4" />
            <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-2">
              WhatsApp Chat
            </h4>
            <p className="font-body text-text-secondary text-sm mb-4">
              Quick responses and file sharing
            </p>
            <Button
              variant="outline"
              size="sm"
              className="font-headline font-headline-bold"
              onClick={() => window.open('https://wa.me/254791159618', '_blank')}
            >
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;