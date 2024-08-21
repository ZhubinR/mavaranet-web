"use client";
import Fslightbox from "fslightbox-react";
import { useState } from "react";
import Image from "next/image";

const PortfolioPageContent = ({ data }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
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

  return (
    <section className="portfolio_content">
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => {
            const resourceType = getResourceType(item.medi);

            return (
              <>
                {resourceType === "video" && (
                  <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                    <video
                      className="portfolio_content_video"
                      controls
                      onClick={() => openLightboxOnSlide(index)}
                    >
                      <source src={item.medi} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                {resourceType === "picture" && (
                  <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                    <Image
                      src={item.medi}
                      alt="Picture"
                      width={840}
                      height={582}
                      onClick={() => openLightboxOnSlide(index)}
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <Fslightbox
        toggler={lightboxController.toggler}
        sources={data.map((item) => item.medi)}
        slide={lightboxController.slide}
        type={data.map((item) => getResourceType(item.medi))}
      />
    </section>
  );
};

export default PortfolioPageContent;
