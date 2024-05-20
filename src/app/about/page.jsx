
import DefaultLayout from "../../../public/components/layouts/DefaultLayout"
import RatingItem from "../../../public/components/rating/ratingItem"
import SharedContent from "../../../public/components/shared/SharedContent"
import '@/app/styles/styles.scss'
import Image from "next/image"
import SharedSectionTitle from "../../../public/components/shared/SharedSectionTitle"
import Managers from "../../../public/components/about/managers"
import SharedContent1 from "../../../public/components/shared/SharedContent1"
import SharedImage from "../../../public/components/shared/SharedImage"


export const metadata = {
    // optionally access and extend (rather than replace) parent metadata
    title: `درباره ما`,
    description: `ماورانت، اولین آژانس برندینگ پزشکی در ایران`,
    openGraph: {
        title: `درباره ما`,
        description: `ماورانت، اولین آژانس برندینگ پزشکی در ایران`,

        url: `https://mavaranet.net/about`,
        locale: `fa_IR`,
        type: `article`,
        siteName: `ماورانت`,
        twitter: {
            card: 'summary_large_image',
        },
    },
}

const About = () => {
    const certi = [
        '/images/about/1.webp',
        '/images/about/2.webp',
        '/images/about/3.webp',
        '/images/about/4.webp',
        '/images/about/5.webp',
        '/images/about/6.webp',
        '/images/about/7.webp',
        '/images/about/8.webp',
    ]
    return (
      
            <DefaultLayout>
                <main className="pageMain " style={{ backgroundColor: '#010c16' }}>
                    <section className="about_description wrapper section about">
                        <video id="aboutVideo" className="aboutVideo" autoPlay muted loop playsInline >
                            <source src="/videos/about.webm" type="video/webm" />
                        </video>
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <SharedContent1
                                        title={`آژانس برندینگ ماورانت`}
                                        subtitle={`در کنارتان می مانیم ...`}
                                        desc={`ماورانت اولین و بزرگترین آژانس IT-Medical در سطح خاورمیانه برای برندینگ پزشکان و آشنایی بیشتر  با خدمات پزشکی و مراکز درمانی با بیش از 180 کارشناس حرفه ای در حال فعالیت است. آژانس برندینگ ماورانت با 15 سال سابقه فعالیت، تاکنون با 130 استاد در حوزه درمانی، 10 انجمن پزشکی، ده ها بیمارستان و مراکز تحقیقات پزشکی و  1400 پروژه درمانی همکاری داشته و در جامعه درمانی کشور گویای اعتماد و اعتبار است. نقش پررنگ و اثرگذار در تسهیل روند درمان بیماران بخصوص بیماران VIPو IPD با بهترین متخصصین کشور و در برندینگ منحصر به فرد آنلاین اصلی ترین انگیزه در چشم انداز مسیر ماورانت است.`}
                                        
                                    />
                                </div>
                                <div className="col-lg-6">
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about_rating wrapper">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">

                                <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <RatingItem
                                        url={`/images/rating/project.svg`}
                                        name={`تعداد پروژه ها `}
                                        number={`+2000`}
                                    />
                                </div>

                                <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <RatingItem
                                        url={`/images/rating/workExp.svg`}
                                        name={`سابقه کار`}
                                        number={`+15 سال`}
                                    />
                                </div>

                                <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <RatingItem
                                        url={`/images/rating/employee.svg`}
                                        name={`پرسنل متخصص`}
                                        number={`160+  نفر`}
                                    />
                                </div>

                                <div className="col-lg-3 col-md-6 mb-lg-0">
                                    <RatingItem
                                        url={`/images/rating/sections.svg`}
                                        name={`واحد های تخصصی `}
                                        number={`9 واحد`}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about_ceo pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-8 col-xl-7 col-lg-6 mb-4 mb-lg-0">
                                    <div className="about_ceo_pic">

                                    </div>
                                </div>
                            <div className="col-xxl-4 col-xl-5 col-lg-6 txt">
                                    <div className="about_ceo_text">
                                        <div className="text">
                                            <p>دکتر کیارش سپهری</p>
                                            <span>مدیرعامل و بنیانگذار</span>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                        </div>
                    </section>

                    <section className="about_managers wrapper">
                        <SharedSectionTitle
                            title={`مدیران ماورانت`}
                        />
                        <div className="container">
                            <div className="row pt-4">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/madadi.jpg`}
                                        name={`مرتضی مددی`}
                                        job={`مدیر بازرگانی`}
                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/mirzaie.jpg`}
                                        name={`فاطمه میرزایی`}
                                        job={`مدیر بخش طراحی وب`}
                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/nadimi.jpg`}
                                        name={`سولماز ندیمی`}
                                        job={`مدیر بخش محتوا`}
                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/shekarkalam.jpg`}
                                        name={`مریم شکرکلام`}
                                        job={`مدیر بخش طراحی گرافیک`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/khani.jpg`}
                                        name={`علیرضا خانی`}
                                        job={`مدیر فنی و توسعه`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/namei.jpg`}
                                        name={`بهار نامه ای`}
                                        job={`مدیر بخش`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/tabrizi.jpg`}
                                        name={`نسترن تبریزی`}
                                        job={`مدیر مالی و امور قراردادها`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/fereshteMirzaie.jpg`}
                                        name={`فرشته میرزایی`}
                                        job={`مدیر بخش ماوراطب`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/honarvar.jpg`}
                                        name={`رضوان هنرور`}
                                        job={`مدیر بخش دیجیتال مارکتینگ`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/sadeghi.jpg`}
                                        name={`کیانا صادقی`}
                                        job={`مدیر بخش`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/khodadadi.jpg`}
                                        name={`پیمان خدادادی`}
                                        job={`مدیر بخش`}

                                    />

                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/pirayadi.jpg`}
                                        name={`پریسا پیرعیادی`}
                                        job={`مدیر بخش سوشال مدیا`}

                                    />

                                </div>
                                
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-4">
                                    <Managers
                                        imageUrl={`/images/managers/mousavi.jpg`}
                                        name={`سپیده موسوی`}
                                        job={`مدیر بخش`}

                                    />

                                </div>


                            </div>
                        </div>
                    </section> 

                    <section className="about_history wrapper">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 mb-4">
                                    <SharedContent1
                                        title={`تاریخچه ماورانت`}
                                        subtitle={`آغاز توانمندی‌ها و پیشرفت ماورانت`}
                                        desc={`
                                        آژانس برندینگ ماورانت با ماموریت ارتقاء و تقویت برند و شناخت آن در عرصه پزشکی آغاز به کار کرد. این آژانس در سال 2009 تأسیس شد و از آن زمان به طراحی و اجرای استراتژی‌های برندینگ برای مراکز پزشکی، بیمارستان‌ها، داروخانه‌ها، پزشکان متخصص و انجمن های پزشکی پرداخته است. اعتبار و تجربه‌ای که این آژانس در این زمینه به دست آورده، آن را به یکی از پیشروهای حوزه برندینگ پزشکی تبدیل کرده است. تیم متخصص و خلاق این آژانس، همواره در تلاش است تا با استفاده از روش‌های نوین و ابتکاری، برندهای پزشکی را در بازار تقویت و تسلط بیشتری به دست آورند.
                                        `}
                                    />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <SharedImage
                                    imageUrl={`/images/history.png`}
                                    alt={`history`}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about_certificate wrapper">
                        <div className="container">
                        <SharedSectionTitle
                            title={`افتخارات و گواهینامه ها`}
                        />
                            <div className="row align-items-center justify-content-center">
                                {certi.map((url , index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
                                        <Image
                                            className="image"
                                            src={url}
                                            width={220}
                                            height={311}
                                            alt="certificates"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </DefaultLayout>
     

    )
}

export default About