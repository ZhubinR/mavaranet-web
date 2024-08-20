'use client'
import React, { useEffect, useState } from 'react';

const Fullpage = ({ children, footer }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [fullpageInitialized, setFullpageInitialized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen && !fullpageInitialized) {
      const initializeFullpage = async () => {
        const fullpage = (await import('fullpage.js')).default;
        new fullpage('#fullpage', {
          // Your fullpage.js configuration
          credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
          horizontal: true,
          vertical: false,
          autoScrolling: true,
          scrollOverflow: true,
          normalScrollElements: '#roadmap-wrapper, .roadmap-wrapper',
          normalScrollElements: '#portfolio, .roadmap-wrapper',
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          touchSensitivity: 10,
          fitToSectionDelay: 300,
          licenseKey: 'gplv3-license',
          credits: false,
          css3: true,
          navigation: true,
          // responsiveHeight: 480,
          controlArrows: false,
          menu: '#menu',
          navigationPosition: 'bottom',
          showActiveTooltip: true,
        });
        setFullpageInitialized(true);
      };
      initializeFullpage();
    }
  }, [isSmallScreen]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.fullpage_api) {
        window.fullpage_api.destroy('all');
      }
    };
  }, []);

  return (
    <div id={isSmallScreen ? '' : 'fullpage'}>
      {children}
      {isSmallScreen && (
      <div className={` ${isSmallScreen? 'd-block' : 'd-none'}`}>
        {footer}
      </div>
      )}
    </div>
  );
};

export default Fullpage;