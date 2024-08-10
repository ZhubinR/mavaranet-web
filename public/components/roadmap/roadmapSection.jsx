import RoadmapContent from "./roadmapContent";
import RoadmapItem from "./roadmapItem";

const RoadmapSection = () => {
  return (
    <section className="section wrapper roadmap">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xxl-5 col-lg-6  order-md-1">
            <div className="roadmap-wrapper" id="roadmap-wrapper">
              <RoadmapItem
                icon={`roadmap1.svg`}
                number={1}
                title="جلسه بررسی نیاز های مشتری"
                desc="جلسه بررسی نیازهای مشتری یک ارتباط اساسی در فرآیند مارکتینگ دیجیتال است. در این جلسه گسترده، ما با دقت به نیازها، اهداف، و انتظارات مشتری گوش می‌دهیم. این فرآیند ارتباطی ما را قادر می‌سازد تا یک درک دقیق از کسب و کار، محصولات، و هدف مشتری ایجاد کنیم."
              />

              <RoadmapItem
                icon={`roadmap2.svg`}
                number={2}
                title="ارسال پلن و پروپوزال"
                desc="پس از جلسه بررسی نیازها، ما یک پلن بازاریابی جامع و یک پروپوزال دقیق ارائه می‌دهیم. این پلن به‌صورت دقیق، جزئیات استراتژی‌های بازاریابی را عنوان می‌کند و نحوه اجرا و پیشرفت هر مرحله از فرآیند را شرح می‌دهد. پروپوزال نیز به مشتری اطلاعاتی در مورد مزایا، نتایج و برنامه زمانی ارائه می‌دهد تا مشتری بتواند تصمیم بهتری بگیرد."
              />

              <RoadmapItem
                icon={`roadmap3.svg`}
                number={3}
                title="عقد قرارداد"
                desc="مسئولیت‌ها، و تعهدات هر دو طرف به‌طور دقیق در قرارداد ثبت شده است. این اطمینان را می‌دهد که هر دو طرف با مفاد قانونی و مالی قرارداد آشنا هستند و به تعهدات مشخص شده پایبند خواهند بود."
              />

              <RoadmapItem
                icon={`roadmap4.svg`}
                number={4}
                title="برگزاری جلسه اولیه با کارشناسان ما"
                desc="در این جلسه اولیه، کارشناسان ما از تخصص‌های مختلف خود استفاده کرده و جزئیات اجرایی هر مرحله را بررسی می‌کنند. هماهنگی موثر تیم در این مرحله اطمینان از پیشرفت یکپارچه و موفقیت بهترین اجراها را فراهم می‌کند."
              />

              <RoadmapItem
                icon={`roadmap5.svg`}
                number={5}
                title="طراحی هویت بصری"
                desc="در این مرحله، هویت بصری کسب و کار با توجه به ارزش‌ها و ماموریت شناخته می‌شود. طراحی شامل لوگو، رنگها، و الگوها است که برند را تمثیل می‌کند و تشخیص برند را در بازار تقویت می‌کند."
              />

              <RoadmapItem
                icon={`roadmap6.svg`}
                number={6}
                title="راه اندازی سوشال مدیا"
                desc="حضور فعال در شبکه‌های اجتماعی از اهمیت بالایی برخوردار است. با ایجاد و مدیریت حساب‌های فعال، ما حضور مشتری در این شبکه‌ها را تقویت کرده و ارتباط با مخاطبان را این طریق تسهیل می کنیم"
              />

              <RoadmapItem
                icon={`roadmap7.svg`}
                number={7}
                title="هماهنگی جهت تهیه مدیا های اولیه"
                desc="در این مرحله به هماهنگی با تولیدکنندگان محتوا اختصاص دارد. ما با همکاری موثر، تصاویر، ویدئوها و محتواهای دیگری را تولید کرده و برای استفاده در کمپین‌ها و وب‌سایت آماده می کنیم"
              />

              <RoadmapItem
                icon={`roadmap8.svg`}
                number={8}
                title="طراحی رابط کاربری وبسایت و پیاده سازی"
                desc="طراحی رابط کاربری موثر و پیاده‌سازی آن بر روی وبسایت باعث ایجاد تجربه کاربری بی‌نظیری می‌شود.در این مرحله از تکنولوژی‌های نوین برای ایجاد وبسایتی با کیفیت و جذاب استفاده خواهد شد تا خدمات و محصولات به صورت ایده آل پرزنت شوند."
              />

              <RoadmapItem
                icon={`roadmap9.svg`}
                number={9}
                title="ارائه تقویم محتوایی سایت"
                desc="تقویم محتوا، زمانبندی انتشار محتواهای جذاب و ارتقاء تعامل با مخاطبان برنامه‌ریزی می‌شود. این تقویم به مشتری باعث می شود که هماهنگی ها بیشتر شده و محتوای سایت به روز نگه داشته شود تا از طریق در موتور جست و جو ها رتبه بهتری داشته باشیم"
              />

              <RoadmapItem
                icon={`roadmap10.svg`}
                number={10}
                title="راه اندازی پروفایل نوبت دهی آنلاین"
                desc="با ایجاد سیستم نوبت‌دهی آنلاین ساده و کارآمد، مشتریان برای دریافت خدمات با سهولت و سرعت می‌توانند وقت خود را مدیریت کنند. این ابزار به مشتریان امکان می‌دهد به راحتی و بدون نیاز به تماس تلفنی، وقت مناسبی را برای خدمات انتخاب کنند."
              />

              <RoadmapItem
                icon={`roadmap11.svg`}
                number={11}
                title="ارائه کمپین های تبلیغاتی"
                desc="با اجرای کمپین‌های تبلیغاتی هوشمندانه، توجه مخاطبان به برند افزایش یافته و ورودی های وب سایت و شبکه های اجتماعی افزایش می‌یابد. این کمپین‌ها بر اساس استراتژی بازاریابی و با هدف افزایش نرخ تبدیل و تسهیل دسترسی به مخاطبان تدوین می‌شوند."
              />
            </div>
          </div>
          <div className="col-lg-6 text">
            <RoadmapContent
              title={`نــــقــــشــــه  راه  مــــشـــتـــریــان`}
              goldTitle={`مـاورانـت`}
              desc={`ماورانت با افتخار،  شما مشتریان عزیز را در راه رسیدن به برند و مارکتینگ شخصی موفق، همراهی می‌کند. هدف و انتظارات شما را با راهکارهای ایده‌آل، محقق خواهیم ساخت. با همکاری فعال شما، از طریق تولید محتوا جذاب و استراتژی مارکتینگ متناسب، به نقطه عطفی منحصر به فرد و برندی قدرتمند دست خواهیم یافت. با امکانات گسترده و پشتیبانی فوق‌العاده در این مسیر، کنار شما خواهیم ماند.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadmapSection;
