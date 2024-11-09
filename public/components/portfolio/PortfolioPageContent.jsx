"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PortfolioPageContent = ({ portfolio }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightboxOnSlide = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const images = portfolio?.acf?.files || [];
  const videos = portfolio?.acf?.videos || [];

  const slides = images.map((item) => ({ src: item.medi }));

  return (
    <section className="portfolio_content">
      <div className="container">
        <div className="row justify-content-center">
          {images.length > 0 &&
            images.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <Image
                    src={item.medi}
                    alt="Picture"
                    width={840}
                    height={582}
                    onClick={() => openLightboxOnSlide(index)}
                  />
                </div>
              );
            })}
          {videos.length > 0 &&
            videos.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <video
                    width="100%"
                    height="100%"
                    loading="lazy"
                    preload="none"
                    controls
                    poster={item.cover}
                    onClick={(e) => {
                      if (e.target) {
                        e.target.play();
                      } else {
                        e.target.pause();
                      }
                    }}
                  >
                    <source src={item.video} type="video/webm" />
                  </video>
                </div>
              );
            })}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
      />
    </section>
  );
};

export default PortfolioPageContent;
