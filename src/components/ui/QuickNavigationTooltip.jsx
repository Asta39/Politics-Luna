import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const QuickNavigationTooltip = ({ children, content, position = 'top', delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [actualPosition, setActualPosition] = useState(position);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      const rect = event?.currentTarget?.getBoundingClientRect();
      const tooltipWidth = 200; // Estimated tooltip width
      const tooltipHeight = 40; // Estimated tooltip height
      const padding = 10;

      let x = rect?.left + rect?.width / 2;
      let y = rect?.top;
      let newPosition = position;

      // Adjust position based on viewport boundaries
      if (position === 'top' && rect?.top < tooltipHeight + padding) {
        newPosition = 'bottom';
        y = rect?.bottom;
      } else if (position === 'bottom' && window.innerHeight - rect?.bottom < tooltipHeight + padding) {
        newPosition = 'top';
        y = rect?.top;
      } else if (position === 'bottom') {
        y = rect?.bottom;
      }

      // Adjust horizontal position
      if (x + tooltipWidth / 2 > window.innerWidth - padding) {
        x = window.innerWidth - tooltipWidth / 2 - padding;
      } else if (x - tooltipWidth / 2 < padding) {
        x = tooltipWidth / 2 + padding;
      }

      setTooltipPosition({ x, y });
      setActualPosition(newPosition);
      setIsVisible(true);
    }, delay);

    setTimeoutId(newTimeoutId);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const tooltipContent = isVisible && (
    <div
      className="fixed z-tooltip pointer-events-none"
      style={{
        left: tooltipPosition?.x,
        top: actualPosition === 'top' ? tooltipPosition?.y - 10 : tooltipPosition?.y + 10,
        transform: 'translateX(-50%)',
      }}
    >
      <div className={`bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm font-body font-body-semibold shadow-cta max-w-xs ${
        actualPosition === 'top' ? 'mb-2' : 'mt-2'
      }`}>
        {content}
        
        {/* Arrow */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
            actualPosition === 'top' ?'top-full border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary' :'bottom-full border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-primary'
          }`}
        />
      </div>
    </div>
  );

  return (
    <>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onTouchStart={showTooltip}
        onTouchEnd={hideTooltip}
        className="relative"
      >
        {children}
      </div>
      {typeof document !== 'undefined' && createPortal(tooltipContent, document.body)}
    </>
  );
};

// Enhanced Navigation Item with Tooltip
export const NavigationItemWithTooltip = ({ 
  label, 
  description, 
  href, 
  isActive, 
  onClick,
  icon,
  className = ""
}) => {
  return (
    <QuickNavigationTooltip
      content={description || `Navigate to ${label} section`}
      position="bottom"
    >
      <button
        onClick={onClick}
        className={`flex items-center space-x-2 transition-smooth ${className} ${
          isActive 
            ? 'text-primary border-b-2 border-primary pb-1' :'text-text-primary hover:text-primary'
        }`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span className="font-body font-body-semibold text-sm">{label}</span>
      </button>
    </QuickNavigationTooltip>
  );
};

// Service Card with Tooltip
export const ServiceCardWithTooltip = ({ 
  title, 
  description, 
  features, 
  children,
  className = ""
}) => {
  const tooltipContent = (
    <div>
      <div className="font-body-semibold mb-1">{title}</div>
      <div className="text-xs opacity-90 mb-2">{description}</div>
      {features && features?.length > 0 && (
        <ul className="text-xs space-y-1">
          {features?.slice(0, 3)?.map((feature, index) => (
            <li key={index} className="flex items-center space-x-1">
              <span className="w-1 h-1 bg-primary-foreground rounded-full"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <QuickNavigationTooltip content={tooltipContent} position="top" delay={500}>
      <div className={`cursor-pointer ${className}`}>
        {children}
      </div>
    </QuickNavigationTooltip>
  );
};

// Pricing Feature with Tooltip
export const PricingFeatureWithTooltip = ({ 
  feature, 
  explanation, 
  children,
  className = ""
}) => {
  return (
    <QuickNavigationTooltip
      content={explanation || `Learn more about ${feature}`}
      position="right"
      delay={400}
    >
      <div className={`cursor-help ${className}`}>
        {children}
      </div>
    </QuickNavigationTooltip>
  );
};

export default QuickNavigationTooltip;