'use client'
import { useState } from "react";
import PageTitle from "./layouts/PageTitle";
import ScrollDown from "./layouts/ScrollDown";
import Image from "next/image";

const HeroSection = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScrollDown = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    if (isTransitioning) {
      scrollToNextSection();
    }
  };

  const scrollToNextSection = () => {
    // Implement scrolling logic here
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section
      behavior: "smooth",
    });
  };
  return (
    <section className={`section hero ${isTransitioning ? 'active' : ''}`} >
      <div className="hero_effect">
        <Image className="hero_image" src={`/images/scrollEffect.webp`} width={1920} height={1080} alt="scroll"/>
        <PageTitle
          title={`آژانس برندینگ ماورانت`}
          subTitle={`در کنارتان میمانیم`}
        />
        <ScrollDown onClick={handleScrollDown}/>
      </div>
    </section>
  );
};
export default HeroSection;
