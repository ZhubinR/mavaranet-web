// 'use client'
// import React, { useRef, useEffect } from 'react';
import PageTitle from "./layouts/PageTitle";
import ScrollDown from "./layouts/ScrollDown";
import Overlay from "./layouts/Overlay";

const HeroSection = () => {
  return (
    <section className="section hero">
      <div className="hero_effect">
        <Overlay />

        <PageTitle
          title={`آژانس برندینگ ماورانت`}
          subTitle={`در کنارتان میمانیم`}
        />
        <ScrollDown />
      </div>
    </section>
  );
};
export default HeroSection;
