"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PortfolioPageContent = ({ data, videoData }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightboxOnSlide = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const getResourceType = (url) => {
    if (/\.(mp4|webm)$/.test(url)) {
      return "video";
    } else if (/\.(jpg|jpeg|png|webp)$/.test(url)) {
      return "picture";
    } else {
      return "picture";
    }
  };

  const slides = data
    .filter((item) => getResourceType(item.medi) === "picture")
    .map((item) => {
      return {
        type: "picture",
        src: item.medi,
      };
    });

  return (
    <section className="portfolio_content">
      <div className="container">
        <div className="row justify-content-center">
          {data.length > 0 &&
            data.map((item, index) => {
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
          {videoData.length > 0 &&
            videoData.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <video
                    width="100%"
                    height="100%"
                    loading="lazy"
                    controls
                    poster={item.cover}
                  >
                    <source src={item.video} type="video/mp4" />
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
        slides={slides.map((slide, index) => ({
          src: slide.src,
          key: index,
        }))}
      />
    </section>
  );
};

export default PortfolioPageContent;
