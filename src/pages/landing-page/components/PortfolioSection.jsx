import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioSection = () => {
  // This function triggers the download of the PDF file.
  // Corrected the path based on your project structure.
  const handleDownloadClick = () => {
    // Correct path to your file in the public folder
    const fileUrl = '../assets/luna-company-profile.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileUrl;
    
    // Suggest a filename for the download
    link.setAttribute('download', 'Luna_Graphics_Company_Profile.pdf');
    
    // Append to the document, click, and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Content */}
        <div className="text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success font-body font-body-semibold text-sm mb-6">
            <Icon name="FileText" size={16} className="mr-2" />
            Our Company Profile
          </div>

          {/* Main Heading */}
          <h2 className="font-headline font-headline-bold text-3xl md:text-4xl text-text-primary mb-6">
            Get a Deeper Look into Our Capabilities
          </h2>

          {/* Descriptive Text */}
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto mb-10">
            Download our official company profile to see a comprehensive overview of our services, past projects, and our commitment to quality for your campaign's success.
          </p>
          
          {/* Centered CTA Button */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 font-headline font-headline-bold"
              onClick={handleDownloadClick}
            >
              Download Profile (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
