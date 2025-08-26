import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const ProblemSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const problems = [
    {
      icon: "AlertTriangle",
      title: "Amateur Materials Lose Elections",
      description: "Poor quality campaign materials create negative voter impressions and reduce candidate credibility by up to 67%."
    },
    {
      icon: "Clock",
      title: "Last-Minute Rush Disasters",
      description: "Campaign deadlines are non-negotiable. Delays in materials can cost crucial voter engagement opportunities."
    },
    {
      icon: "DollarSign",
      title: "Hidden Costs Destroy Budgets",
      description: "Unexpected printing costs and rush fees can consume 40% of campaign budgets without proper planning."
    },
    {
      icon: "Shield",
      title: "Confidentiality Breaches Risk Campaigns",
      description: "Sensitive campaign information leaks through unreliable vendors can sabotage entire political strategies."
    }
  ];

  const handleSliderMove = (e) => {
    if (!isDragging) return;
    
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = e?.clientX - rect?.left;
    const percentage = Math.max(0, Math.min(100, (x / rect?.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-error/10 text-error font-body font-body-semibold text-sm mb-6">
            <Icon name="AlertCircle" size={16} className="mr-2" />
            Campaign Material Crisis
          </div>
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Why Most Political Campaigns 
            <span className="text-error block mt-2">Fail Before They Start</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Don't let poor campaign materials cost you the election. See the dramatic difference professional political printing makes in voter perception and campaign success.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <div 
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-cta cursor-col-resize"
            onMouseMove={handleSliderMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Amateur DIY campaign materials with poor design and quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-error text-error-foreground px-3 py-1 rounded-full font-body font-body-semibold text-sm">
                Amateur Materials
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Professional Luna Graphics campaign materials with premium design and quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full font-body font-body-semibold text-sm">
                Luna Graphics Professional
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-cta">
                <Icon name="Move" size={16} className="text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="font-body text-text-secondary">
              <Icon name="MousePointer" size={16} className="inline mr-2" />
              Drag the slider to see the dramatic difference
            </p>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems?.map((problem, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-cta transition-smooth">
              <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={problem?.icon} size={24} className="text-error" />
              </div>
              <h3 className="font-headline font-headline-bold text-lg text-text-primary mb-3">
                {problem?.title}
              </h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {problem?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 bg-gradient-to-r from-error/5 to-warning/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-headline font-headline-bold text-2xl text-text-primary mb-4">
              The Cost of Poor Campaign Materials
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-error mb-2">67%</div>
              <div className="font-body text-text-secondary">Voter credibility loss with amateur materials</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-warning mb-2">40%</div>
              <div className="font-body text-text-secondary">Budget overrun from hidden printing costs</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-headline-bold text-3xl text-error mb-2">23%</div>
              <div className="font-body text-text-secondary">Election loss rate due to poor materials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;