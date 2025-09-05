import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: ' Daniel Kamau',
      position: 'Campaign Manager',
      result: 'Won with 58% votes',
      image: '/assets/none.png',
      testimonial: `Luna Graphics transformed our entire campaign visual identity. Their same-day delivery service was crucial during the final campaign push. The quality of materials was exceptional - our posters stood out in every location and created the professional image we needed to win voter confidence.`,
      materials: ['10,000 A2 Posters', '500 T-shirts', '50 Banners', '5 Vehicle Wraps'],
      rating: 5,
      verified: true,
      campaignYear: '2022'
    },
    {
      id: 2,
      name: 'Olivia Nafula',
      position: 'Campaign Manager',
      result: 'Won with 62% votes',
      image: '/assets/none.png',
      testimonial: `Working with Luna Graphics was the best decision for our gubernatorial campaign. Their understanding of political campaigns and ability to deliver under pressure is unmatched. The digital assets they created for our social media campaigns reached over 2 million voters and significantly boosted our online presence.`,
      materials: ['Digital Campaign Package', '15,000 Posters', '1,000 T-shirts', '100 Banners'],
      rating: 5,
      verified: true,
      campaignYear: '2022'
    },
    {
      id: 3,
      name: 'Samuel Wanjohi',
      position: 'Campaign Manager',
      result: 'Won with 54% votes',
      image: '/assets/none.png',
      testimonial: `Luna Graphics delivered beyond our expectations. Their bulk pricing helped us maximize our campaign budget, and the quality never compromised. The confidential handling of our sensitive campaign materials gave us peace of mind. I recommend them to any serious political candidate.`,
      materials: ['8,000 A3 Posters', '300 T-shirts', '25 Banners', '50,000 Flyers'],
      rating: 5,
      verified: true,
      campaignYear: '2022'
    },
    {
      id: 4,
      name: 'Natasha Njoki',
      position: 'Campaign Manager',
      result: 'Won with 67% votes',
      image: '/assets/none.png',
      testimonial: `As a first-time candidate, Luna Graphics guided me through the entire campaign materials process. Their expertise in political campaigns was invaluable. The materials were delivered on time, within budget, and helped create the professional image that contributed to our landslide victory.`,
      materials: ['3,000 A4 Posters', '200 T-shirts', '15 Banners', '20,000 Flyers'],
      rating: 5,
      verified: true,
      campaignYear: '2022'
    },
    {
      id: 5,
      name: 'David Ochieng',
      position: 'Campaign Manager',
      result: 'Managed winning campaign',
      image: '/assets/none.png',
      testimonial: `Managing a presidential campaign requires reliable partners, and Luna Graphics proved to be exactly that. Their ability to handle massive orders while maintaining quality and confidentiality is remarkable. They understand the unique pressures of political campaigns and deliver accordingly.`,
      materials: ['50,000 Posters', '5,000 T-shirts', '500 Banners', '20 Vehicle Wraps'],
      rating: 5,
      verified: true,
      campaignYear: '2022'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const handleQuoteClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+254791159618';
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success font-body font-body-semibold text-sm mb-6">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Client Success Stories
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            What Winning Candidates Say
            <span className="text-primary block mt-2">About Luna Graphics</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Hear from successful political candidates who trusted Luna Graphics with their campaign materials and won their elections.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-cta border border-border">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Quote Icon */}
                <Icon name="Quote" size={48} className="text-primary/20 mb-6" />
                
                {/* Testimonial Text */}
                <blockquote className="font-body text-lg md:text-xl text-text-primary leading-relaxed mb-8">
                  "{current?.testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={current?.image}
                      alt={current?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {current?.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} className="text-success-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-headline font-headline-bold text-lg text-text-primary">
                      {current?.name}
                    </h4>
                    <p className="font-body text-text-secondary text-sm">
                      {current?.position}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-body font-body-semibold text-success text-sm">
                        {current?.result}
                      </span>
                      <span className="text-text-secondary">•</span>
                      <span className="font-body text-text-secondary text-sm">
                        {current?.campaignYear} Election
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(current?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                  <span className="font-body font-body-semibold text-text-secondary ml-2">
                    {current?.rating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Materials Used */}
              <div className="lg:col-span-1">
                <div className="bg-muted rounded-2xl p-6">
                  <h5 className="font-headline font-headline-bold text-lg text-text-primary mb-4">
                    Campaign Materials Used
                  </h5>
                  <ul className="space-y-3">
                    {current?.materials?.map((material, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Icon name="Package" size={16} className="text-primary flex-shrink-0" />
                        <span className="font-body text-text-secondary text-sm">{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous/Next Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Trophy" size={24} className="text-success" />
            </div>
            <div className="font-headline font-headline-bold text-2xl text-text-primary mb-2">94%</div>
            <div className="font-body text-text-secondary text-sm">Client Win Rate</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <div className="font-headline font-headline-bold text-2xl text-text-primary mb-2">847</div>
            <div className="font-body text-text-secondary text-sm">Campaigns Served</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={24} className="text-accent" />
            </div>
            <div className="font-headline font-headline-bold text-2xl text-text-primary mb-2">4.9</div>
            <div className="font-body text-text-secondary text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Repeat" size={24} className="text-secondary" />
            </div>
            <div className="font-headline font-headline-bold text-2xl text-text-primary mb-2">89%</div>
            <div className="font-body text-text-secondary text-sm">Return Clients</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="font-body text-text-secondary mb-8 max-w-2xl mx-auto">
            Let Luna Graphics help you create the professional campaign materials that will set you apart from the competition and connect with voters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 font-headline font-headline-bold"
              onClick={handleQuoteClick}
            >
              Get Your Quote Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="font-headline font-headline-bold"
              onClick={handleCallClick}
            >
              Call for Rush Orders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;