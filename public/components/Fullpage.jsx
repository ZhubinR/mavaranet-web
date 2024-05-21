import React, { useEffect } from 'react'


const Fullpage = ({ children }) => {
    useEffect(() => {
        // Function to initialize fullpage.js if conditions are met
        const initializeFullpage = async () => {
          if (typeof window !== 'undefined' && window.innerWidth > 700) {
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
            //   afterLoad: function (destination) {
            //       if (destination.index === 0) {
            //           introVid.play();
            //           aboutVid.play();
            //       }
            //   },
            //   onLeave: function () {
            //       if (origin.index === 0) {
            //           introVid.play();
            //           aboutVid.play();
            //       }
            //   },
            //   afterSlideLoad: function (section, destination) {
            //       if (section.index === 0 && destination.index === 0) {
            //           introVid.currentTime = 0;
            //           introVid.play();
            //           aboutVid.currentTime = 0;
            //           aboutVid.play();
            //       }
            //   },
            });
          }
        };
    
        initializeFullpage();
    
        // Clean up fullpage.js when the component unmounts
        return () => {
          if (typeof window !== 'undefined' && window.fp_destroy) {
            window.fp_destroy();
          }
        };
      }, []);

    // useEffect(() => {
    //     const introVid = document.getElementById('introVideo')
    //     const aboutVid = document.getElementById('aboutVideo')
    //     if (typeof window !== 'undefined' && window.innerWidth > 700) {
    //         const fullpage = (await import('fullpage.js')).default;
    //         new fullpage('#fullpage', {
    //           // Your fullpage.js configuration
    //           credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
    //                 horizontal: true,
    //                 vertical: false,
    //                 autoScrolling: true,
    //                 scrollOverflow: true,
    //                 normalScrollElements: '#roadmap-wrapper, .roadmap-wrapper',
    //                 normalScrollElements: '#portfolio, .roadmap-wrapper',
    //                 easing: 'easeInOutCubic',
    //                 easingcss3: 'ease',
    //                 touchSensitivity: 10,
    //                 fitToSectionDelay: 300,
    //                 licenseKey: 'gplv3-license',
    //                 credits: false,
    //                 css3: true,
    //                 navigation: true,
    //                 // responsiveHeight: 480,
    //                 controlArrows: false,
    //                 menu: '#menu',
    //                 navigationPosition: 'bottom',
    //                 showActiveTooltip: true,
    //                 afterLoad: function (destination) {
    //                     if (destination.index === 0) {
    //                         introVid.play();
    //                         aboutVid.play();
    //                     }
    //                 },
    //                 onLeave: function () {
    //                     if (origin.index === 0) {
    //                         introVid.play();
    //                         aboutVid.play();
    //                     }
    //                 },
    //                 afterSlideLoad: function (section, destination) {
    //                     if (section.index === 0 && destination.index === 0) {
    //                         introVid.currentTime = 0;
    //                         introVid.play();
    //                         aboutVid.currentTime = 0;
    //                         aboutVid.play();
    //                     }
    //                 },
    //         });
    //     // if (window.innerWidth > 700) {
    //     //     import('fullpage.js').then((fullpage) => {
    //     //         new fullpage.default('#fullpage', {
    //     //             credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
    //     //             horizontal: true,
    //     //             vertical: false,
    //     //             autoScrolling: true,
    //     //             scrollOverflow: true,
    //     //             normalScrollElements: '#roadmap-wrapper, .roadmap-wrapper',
    //     //             normalScrollElements: '#portfolio, .roadmap-wrapper',
    //     //             easing: 'easeInOutCubic',
    //     //             easingcss3: 'ease',
    //     //             touchSensitivity: 10,
    //     //             fitToSectionDelay: 300,
    //     //             licenseKey: 'gplv3-license',
    //     //             credits: false,
    //     //             css3: true,
    //     //             navigation: true,
    //     //             // responsiveHeight: 480,
    //     //             controlArrows: false,
    //     //             menu: '#menu',
    //     //             navigationPosition: 'bottom',
    //     //             showActiveTooltip: true,
    //     //             afterLoad: function (destination) {
    //     //                 if (destination.index === 0) {
    //     //                     introVid.play();
    //     //                     aboutVid.play();
    //     //                 }
    //     //             },
    //     //             onLeave: function () {
    //     //                 if (origin.index === 0) {
    //     //                     introVid.play();
    //     //                     aboutVid.play();
    //     //                 }
    //     //             },
    //     //             afterSlideLoad: function (section, destination) {
    //     //                 if (section.index === 0 && destination.index === 0) {
    //     //                     introVid.currentTime = 0;
    //     //                     introVid.play();
    //     //                     aboutVid.currentTime = 0;
    //     //                     aboutVid.play();
    //     //                 }
    //     //             },
    //     //         })
    //     //     }
    //     //     )
    //     // }
    //     initializeFullpage();

    //     // Clean up fullpage.js when the component unmounts
    //     return () => {
    //       if (typeof window !== 'undefined' && window.fp_destroy) {
    //         window.fp_destroy();
    //       }
    //     };
    //   }, []);


    return (
        <div id='fullpage'>
            {children}
        </div>

    )
}

export default Fullpage