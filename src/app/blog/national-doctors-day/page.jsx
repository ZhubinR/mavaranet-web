import { reqUrl } from "@/app/config";
import Image from "next/image";
import SharedContent1 from "../../../../public/components/shared/SharedContent1";
import SharedImage from "../../../../public/components/shared/SharedImage";
import RatingItem from "../../../../public/components/rating/ratingItem";
import LandingServiceSection from "../../../../public/components/landing/LandingServiceSection";
import LandingTestemonialSection from "../../../../public/components/landing/LandingTestemonialSection";
import LandingIntroSection from "../../../../public/components/landing/LandingIntroSection";
import SharedServiceTitle from "../../../../public/components/shared/SharedServiceTitle";

const NationaDoctorsDay = async () => {
  const date = new Date("2024-08-23T00:00:00.000Z")
  const services = [
    {
      id: 1,
      title: "طراحی سایت",
      description:
        "در بخش طراحی سایت ماورانت، تمرکز اصلی بر ایجاد تجربه‌های دیجیتالی منحصر به فرد است که نیازهای خاص هر مشتری را برآورده می‌کند. ماورانت با استفاده از آخرین تکنولوژی‌ها و استانداردهای روز دنیا، وب‌سایت‌هایی با طراحی مدرن، واکنش‌گرا و بهینه‌سازی شده برای موتورهای جستجو را ایجاد می‌کند که به رشد و موفقیت کسب‌وکارها کمک می‌کند.",
      imageUrl: "/images/web.svg",
    },
    {
      id: 2,
      title: "سئو و بهینه سازی سایت",
      description:
        "در بخش سئو و بهینه‌سازی سایت ماورانت، تیم متخصص ما با بهره‌گیری از استراتژی‌های پیشرفته و تکنیک‌های روز دنیا، به بهبود رتبه و دیده‌شدن وب‌سایت‌ها در موتورهای جستجو می‌پردازد. ماورانت با تحلیل دقیق کلمات کلیدی، بهینه‌سازی محتوا، و بهبود ساختار سایت، تضمین می‌کند که وب‌سایت شما نه تنها در صدر نتایج جستجو قرار بگیرد، بلکه تجربه کاربری بهتری نیز ارائه دهد.",
      imageUrl: "/images/seo.svg",
    },
    {
      id: 3,
      title: "تولید محتوا",
      description:
        "بخش تولید محتوای ماورانت به صورت تخصصی در زمینه تولید محتوای متنی فعالیت می‌کند. تیم ما با استفاده از دانش و تجربه‌ خود، متون خلاقانه و جذابی را برای مخاطبان فراهم می‌کند. این بخش با تمرکز بر کیفیت و به‌روز بودن، سعی دارد تا نیازهای متنوع مشتریان را در زمینه‌های مختلف پوشش دهد.",
      imageUrl: "/images/content.svg",
    },
    {
      id: 4,
      title: "طراحی گرافیک",
      description:
        "بخش طراحی گرافیک ماورانت با خلاقیت و دقت بالا به طراحی‌های بصری جذاب و حرفه‌ای می‌پردازد. این بخش با ترکیب هنر و فناوری، طرح‌هایی منحصربه‌فرد ایجاد می‌کند که تأثیرگذاری و ارتباط مؤثری با مخاطبان دارد. هدف ماورانت در این بخش، ارتقای کیفیت بصری پروژه‌ها و ایجاد تجربه‌های دیداری ماندگار است.",
      imageUrl: "/images/graphic.svg",
    },
    {
      id: 5,
      title: "سوشال مدیا",
      description:
        "بخش سوشال مدیا ماورانت به مدیریت و توسعه حضور آنلاین برندها در شبکه‌های اجتماعی می‌پردازد. این بخش با استفاده از استراتژی‌های هدفمند و محتوای خلاقانه، به افزایش تعامل با مخاطبان و تقویت هویت دیجیتال برند کمک می‌کند. هدف ماورانت در این بخش، ایجاد ارتباطی مؤثر و پایدار میان پزشکان و جامعه آنلاین است.",
      imageUrl: "/images/social.svg",
    },
    {
      id: 6,
      title: "مارکتینگ",
      description:
        "بخش مارکتینگ ماورانت با استفاده از استراتژی‌های خلاقانه و تحلیل‌های دقیق، به تقویت جایگاه برندها در بازار کمک می‌کند. این بخش با طراحی کمپین‌های مؤثر و هدفمند، به جذب مخاطبان جدید و افزایش وفاداری مشتریان می‌پردازد. هدف ماورانت در این بخش، ایجاد رشد پایدار و موفقیت تجاری برای مشتریان است.",
      imageUrl: "/images/marketing.svg",
    },
    {
      id: 7,
      title: "تدوین",
      description:
        "بخش تدوین ماورانت با دقت و خلاقیت، ویدئوهای حرفه‌ای و تاثیرگذاری را برای مشتریان تولید می‌کند. این بخش با استفاده از تکنیک‌های پیشرفته و نرم‌افزارهای به‌روز، محتواهایی را خلق می‌کند که پیام برند را به بهترین شکل ممکن به مخاطب منتقل می‌کند. هدف ماورانت در این بخش، ارائه‌ ویدئوهایی با کیفیت بالا و تأثیرگذار است.",
      imageUrl: "/images/tadvin.svg",
    },
    {
      id: 8,
      title: "عکاسی و فیلمبرداری",
      description:
        "بخش عکاسی و فیلمبرداری ماورانت به‌صورت تخصصی در زمینه پزشکی فعالیت می‌کند. این بخش با استفاده از تجهیزات پیشرفته و تیمی مجرب، تصاویر و ویدئوهایی با کیفیت بالا از فرآیندها، تجهیزات و محیط‌های پزشکی ثبت می‌کند. هدف ماورانت در این بخش، ارائه محتوای بصری دقیق و حرفه‌ای برای ارتقای ارتباطات و آموزش در حوزه پزشکی است.",
      imageUrl: "/images/axe.svg",
    },
  ]
  const testemonial = await fetch(
    `${reqUrl}/user_testimonial?acf_format=standard`, { keepalive: true }
  ).then((res) => res.json())
  return (
    <main className="pageMain">
      {/* <section className="nationaDoctorsDay_intro wrapper mb-5 pt-0">
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
                <Countdown date={date} />
              </div>
            </div>

            <div className="col-lg-10">
              <SharedContent1
                desc={`روز پزشک که مصادف با اول شهریور ماه و سالروز تولد بوعلی سینا، بزرگ‌ترین پزشک و دانشمند ایرانی است، فرصتی است برای تجلیل از خدمات ارزنده‌ی پزشکان و تقدیر از تلاش‌های بی‌وقفه‌ی آنان در راستای حفظ و ارتقاء سلامت جامعه. این روز یادآور تلاش‌های ارزشمند پزشکانی است که با دانش، اخلاق و انسان‌دوستی، درد و رنج بیماران را التیام می‌بخشند و امید به زندگی را در دل‌ها زنده می‌کنند.`}
              />
            </div>
          </div>
        </div>
      </section> */}
      <LandingIntroSection dateInfo={date}/>

      <section className="nationaDoctorsDay_history wrapper pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="nationaDoctorsDay_history_img">
                <Image
                  src={`/images/ebnesina.webp`}
                  width={391}
                  height={464}
                  alt="ebnesina"
                  quality={100}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <SharedContent1
                subtitle={`تاریخچه`}
                title={`روز  پزشک `}
                desc={`بوعلی سینا، با آثارش در زمینه پزشکی، به ویژه کتاب «قانون»، نقش مهمی در پیشرفت علم پزشکی داشت و آثارش به مدت قرن‌ها به عنوان منبع اصلی آموزش پزشکی شناخته می‌شد. روز پزشک که مصادف با اول شهریور ماه و سالروز تولد بوعلی سینا، بزرگ‌ترین پزشک و دانشمند ایرانی است، این روز فرصتی است برای قدردانی از فداکاری و تعهد پزشکان در ارتقاء سلامت و بهبودی بیماران. `}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="nationaDoctorsDay_video wrapper">
        <div className="container">
          <SharedServiceTitle
            title={`روز پزشک مبارک `}
            eng={`Happy doctor's day`}
          />
          <div className="row align-items-center justify-content-center">
            
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="nationaDoctorsDay_video_vid">
                <video className="video" controls width="556" height="336">
                  <source src="/videos/dr-day-1.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nationaDoctorsDay_video_vid">
                <video className="video" controls width="556" height="336">
                  <source src="/videos/dr-day-2.webm" type="video/webm" />
                </video>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="nationaDoctorsDay_about wrapper">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="nationaDoctorsDay_about_content">
                <SharedContent1
                  title={`پزشکان گرامی `}
                  desc={`
                  در این روز باشکوه، شرکت "ماورانت" اولین و تنها آژانس مدیکال مارکتینگ در ایران که با افتخار در زمینه برندسازی پزشکی فعالیت می‌کند، از شما که با فداکاری و تلاش بی‌وقفه، به بهبود سلامت جامعه کمک می‌کنید، صمیمانه تقدیر و تشکر می‌کند. شما که با دستان شفابخش خود، جان‌ها را نجات می‌دهید و با قلبی پر از مهر و محبت، به بیماران امید می‌بخشید. هر لحظه از حضور شما، نشانه‌ای از عشق به انسان‌ها و تعهد به اصول اخلاقی و علمی است.
                  "ماورانت" به عنوان یک همراه و پشتیبان در مسیر برندسازی پزشکی، به افتخار و تلاش‌های شما ارج می‌گذارد و امیدوار است که با ارائه خدمات حرفه‌ای در حوزه برندسازی، بتواند نقش موثری در ارتقاء جایگاه و اعتبار شما عزیزان در جامعه ایفا کند.
                  `}
                />
                <p className="subtitle">روز پزشک بر شما مبارک باد.</p>
              </div>
            </div>
            <div className="col-lg-6 img">
              <div className="nationaDoctorsDay_about_image">
                <SharedImage
                  imageUrl={`/images/nationalAbout.webp`}
                  alt={`mavaranet about image`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingServiceSection services={services}/>

      <section className="section rating nationaDoctorsDay_rating active wrapper">
        <Image
          className="rating-bg"
          src={`/images/globe-rating.png`}
          width={720}
          height={720}
          loading="lazy"
          alt="rating bg"
        />
        <div className="container">
          <div className="titleWrapper">
            <h3 className="title">
              گوشه ای از آمار ارزشمند خدمات
              <span>ماورانت</span>
            </h3>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <RatingItem
                url={`/images/rating/project.svg`}
                name={`تعداد پروژه ها `}
                number={`+2000`}
                count={``}
              />
            </div>

            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <RatingItem
                url={`/images/rating/workExp.svg`}
                name={`سابقه کار`}
                number={`+15 سال`}
                count={`one`}
              />
            </div>

            <div className="col-lg-3 col-6 mb-lg-0">
              <RatingItem
                url={`/images/rating/employee.svg`}
                name={`پرسنل متخصص`}
                number={`+160  نفر`}
                count={`two`}
              />
            </div>

            <div className="col-lg-3 col-6 mb-lg-0">
              <RatingItem
                url={`/images/rating/sections.svg`}
                name={`واحد های تخصصی `}
                number={`9 واحد`}
                count={`three`}
              />
            </div>
          </div>
        </div>
      </section>

      <LandingTestemonialSection data={testemonial}/>
    </main>
  );
};

export default NationaDoctorsDay;
