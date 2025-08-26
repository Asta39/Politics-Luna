import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PortfolioSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      category: 'presidential',
      title: 'Presidential Campaign 2022',
      candidate: 'Hon. James Mwangi',
      result: 'Won with 58% votes',
      reach: '2.3M voters reached',
      materials: ['Posters', 'Banners', 'T-shirts', 'Vehicle wraps'],
      images: [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: `Complete presidential campaign materials package including large-format banners, weather-resistant posters, and branded merchandise that helped secure victory with strong voter recognition.`,
      testimonial: `Luna Graphics delivered exceptional quality materials that made our campaign stand out. Their same-day service was crucial during the final campaign push.`
    },
    {
      id: 2,
      category: 'gubernatorial',
      title: 'Governor Campaign Nairobi',
      candidate: 'Hon. Mary Wanjiku',
      result: 'Won with 62% votes',
      reach: '1.8M voters reached',
      materials: ['Digital assets', 'Posters', 'Banners', 'Merchandise'],
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: `Comprehensive gubernatorial campaign including digital social media assets, traditional print materials, and innovative vehicle branding that dominated Nairobi's visual landscape.`,
      testimonial: `The quality and speed of delivery exceeded our expectations. Luna Graphics understood the urgency of political campaigns and delivered consistently.`
    },
    {
      id: 3,
      category: 'parliamentary',title: 'MP Campaign Kiambu',candidate: 'Hon. Peter Kamau',result: 'Won with 54% votes',reach: '450K voters reached',
      materials: ['Posters', 'Flyers', 'T-shirts', 'Banners'],
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: `Strategic parliamentary campaign materials focusing on grassroots engagement through high-quality posters, community banners, and supporter merchandise.`,
      testimonial: `Luna Graphics helped us create a professional image that resonated with voters. Their bulk pricing made our budget go further.`
    },
    {
      id: 4,
      category: 'parliamentary',title: 'MCA Campaign Nakuru',candidate: 'Hon. Grace Njeri',result: 'Won with 67% votes',reach: '85K voters reached',
      materials: ['Posters', 'Banners', 'Flyers', 'Stickers'],
      images: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: `Local MCA campaign with focus on community-centered messaging through targeted poster campaigns and grassroots material distribution.`,
      testimonial: `As a first-time candidate, Luna Graphics guided us through the entire process. Their expertise in political campaigns was invaluable.`
    }
  ];

  const filters = [
    { id: 'all', label: 'All Campaigns', count: portfolioItems?.length },
    { id: 'presidential', label: 'Presidential', count: portfolioItems?.filter(item => item?.category === 'presidential')?.length },
    { id: 'gubernatorial', label: 'Gubernatorial', count: portfolioItems?.filter(item => item?.category === 'gubernatorial')?.length },
    { id: 'parliamentary', label: 'Parliamentary', count: portfolioItems?.filter(item => item?.category === 'parliamentary')?.length }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? portfolioItems 
    : portfolioItems?.filter(item => item?.category === selectedFilter);

  useEffect(() => {
    if (selectedProject) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          (prev + 1) % selectedProject?.images?.length
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success font-body font-body-semibold text-sm mb-6">
            <Icon name="Trophy" size={16} className="mr-2" />
            Winning Campaign Portfolio
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Campaigns That Won with 
            <span className="text-primary block mt-2">Luna Graphics Materials</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            See how our professional political campaign materials helped candidates across Kenya achieve electoral success in 2022 and prepare for 2027 victories.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setSelectedFilter(filter?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-body-semibold text-sm transition-smooth ${
                selectedFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-cta'
                  : 'bg-card text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <span>{filter?.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedFilter === filter?.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-text-secondary'
              }`}>
                {filter?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems?.map((item) => (
            <div
              key={item?.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-cta transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handleProjectClick(item)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item?.images?.[0]}
                  alt={item?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-body font-body-semibold text-sm capitalize">
                  {item?.category}
                </div>

                {/* Success Badge */}
                <div className="absolute top-4 right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full font-body font-body-semibold text-sm">
                  <Icon name="Trophy" size={14} className="inline mr-1" />
                  Won
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-headline font-headline-bold text-lg text-white mb-1">
                    {item?.candidate}
                  </h3>
                  <p className="font-body text-white/90 text-sm">
                    {item?.result}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h4 className="font-headline font-headline-bold text-xl text-text-primary mb-2">
                  {item?.title}
                </h4>
                
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-success">
                    <Icon name="Users" size={14} />
                    <span className="font-body">{item?.reach}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-primary">
                    <Icon name="Package" size={14} />
                    <span className="font-body">{item?.materials?.length} materials</span>
                  </div>
                </div>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item?.materials?.slice(0, 3)?.map((material, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-text-secondary rounded-md font-body text-xs"
                    >
                      {material}
                    </span>
                  ))}
                  {item?.materials?.length > 3 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-body text-xs">
                      +{item?.materials?.length - 3} more
                    </span>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-headline font-headline-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  iconName="Eye"
                  iconPosition="left"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mt-16 bg-gradient-to-r from-success/5 to-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-4">
              Our Track Record Speaks
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-success mb-2">94%</div>
              <div className="font-body text-text-secondary">Client win rate in 2022 elections</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-primary mb-2">847</div>
              <div className="font-body text-text-secondary">Successful campaigns served</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-accent mb-2">2.8M</div>
              <div className="font-body text-text-secondary">Campaign materials delivered</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-secondary mb-2">100%</div>
              <div className="font-body text-text-secondary">On-time delivery record</div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>

              {/* Image Carousel */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject?.images?.[currentImageIndex]}
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {selectedProject?.images?.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject?.images?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-2">
                      {selectedProject?.title}
                    </h3>
                    <p className="font-body text-lg text-text-secondary">
                      {selectedProject?.candidate}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-headline font-headline-bold text-lg text-success mb-1">
                      {selectedProject?.result}
                    </div>
                    <div className="font-body text-text-secondary">
                      {selectedProject?.reach}
                    </div>
                  </div>
                </div>

                <p className="font-body text-text-secondary leading-relaxed mb-6">
                  {selectedProject?.description}
                </p>

                {/* Materials Used */}
                <div className="mb-6">
                  <h4 className="font-headline font-headline-bold text-lg text-text-primary mb-3">
                    Materials Delivered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.materials?.map((material, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-primary/10 text-primary rounded-lg font-body font-body-semibold text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-muted rounded-xl p-6">
                  <Icon name="Quote" size={24} className="text-primary mb-4" />
                  <p className="font-body text-text-primary italic leading-relaxed">
                    "{selectedProject?.testimonial}"
                  </p>
                  <div className="mt-4 font-body font-body-semibold text-text-secondary">
                    — {selectedProject?.candidate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;