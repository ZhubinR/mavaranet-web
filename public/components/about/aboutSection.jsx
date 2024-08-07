"use client";
import { useEffect, useRef } from "react";
import AboutContent from "./aboutContent";
const AboutSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
    videoElement.addEventListener("ended", () => {
      videoElement.currentTime = 0;
      videoElement.play();
    });
  }, []);
  return (
    <section className="section about wrapper">
      <video
        id="aboutVideo"
        className="aboutVideo"
        ref={videoRef}
        style={{ mixBlendMode: "lighten" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/about.webm" type="video/webm" />
      </video>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <AboutContent
              title={`آژانس برندینگ ماورانت`}
              subtitle={`در کنارتان می مانیم ...`}
              desc={`
                ماورانت اولین و بزرگترین آژانس IT-Medical در سطح خاورمیانه برای برندینگ پزشکان و آشنایی بیشتر  با خدمات پزشکی و مراکز درمانی با بیش از 180 کارشناس حرفه ای در حال فعالیت است. آژانس برندینگ ماورانت با 15 سال سابقه فعالیت، تاکنون با 130 استاد در حوزه درمانی، 10 انجمن پزشکی، ده ها بیمارستان و مراکز تحقیقات پزشکی و  1400 پروژه درمانی همکاری داشته و در جامعه درمانی کشور گویای اعتماد و اعتبار است. نقش پررنگ و اثرگذار در تسهیل روند درمان بیماران بخصوص بیماران VIPو IPD با بهترین متخصصین کشور و در برندینگ منحصر به فرد آنلاین اصلی ترین انگیزه در چشم انداز مسیر ماورانت است.
              `}
              button={`درباره ما`}
              buttonSlug={`/about`}
            />
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
