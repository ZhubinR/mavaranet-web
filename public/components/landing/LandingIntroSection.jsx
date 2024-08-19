'use client'
import { useEffect , useRef } from "react";
import SharedServiceTitle from "../shared/SharedServiceTitle";
import Countdown from "../shared/Countdown";
import SharedContent1 from "../shared/SharedContent1";
import Image from "next/image";

const LandingIntroSection = ({dateInfo}) => {

  const elementRef = useRef(null);

  useEffect(() => {
    console.log('useEffect running');
    if (elementRef.current) {
      console.log('Element found:', elementRef.current);
      elementRef.current.classList.add('active');
    } else {
      console.log('Element not found');
    }
  }, []);

  return (

    <section ref={elementRef} className="nationaDoctorsDay_intro wrapper mb-5 pt-0">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 ">
            <SharedServiceTitle
              eng={`Mavara Net`}
              title={`روز پزشک مبارک `}
              tagline={`پزشکان ، پیام‌آوران سلامتی و امید که با مهارت و محبت ، زندگی‌ها را روشن می‌کنند.`}
            />
          </div>

          <div className="col-lg-6">
            <div className="nationaDoctorsDay_intro_img">
              <Image
                src={`/images/national-dr-day.webp`}
                width={630}
                quality={100}
                height={630}
                alt="mavaranet"
              />
            </div>
          </div>

          <div className="col-lg-3 four">
            <div className="nationaDoctorsDay_intro_countdown">
              <p className="title">روز شمار تا روز پزشک ...</p>
              <Countdown date={dateInfo} />
            </div>
          </div>

          <div className="col-lg-10">
            <SharedContent1
              desc={`روز پزشک که مصادف با اول شهریور ماه و سالروز تولد بوعلی سینا، بزرگ‌ترین پزشک و دانشمند ایرانی است، فرصتی است برای تجلیل از خدمات ارزنده‌ی پزشکان و تقدیر از تلاش‌های بی‌وقفه‌ی آنان در راستای حفظ و ارتقاء سلامت جامعه. این روز یادآور تلاش‌های ارزشمند پزشکانی است که با دانش، اخلاق و انسان‌دوستی، درد و رنج بیماران را التیام می‌بخشند و امید به زندگی را در دل‌ها زنده می‌کنند.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntroSection;
