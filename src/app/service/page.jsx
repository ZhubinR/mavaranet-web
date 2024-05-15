import DefaultLayout from '../../../public/components/layouts/DefaultLayout'
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle"
import SharedContent from '../../../public/components/shared/SharedContent'
import SharedSectionTitle from '../../../public/components/shared/SharedSectionTitle'
import ServiceDetailItem from '../../../public/components/services/serviceDetailItem'
import PortfolioArchiveItem from '../../../public/components/portfolio/portfolioArchiveItem'
import SharedImage from '../../../public/components/shared/SharedImage'
import Overlay from '../../../public/components/layouts/Overlay'
import Image from 'next/image'
import { reqUrl } from '../config'
import '@/app/styles/styles.scss'

export const metadata = {
    // optionally access and extend (rather than replace) parent metadata
    title: `خدمات ما`,
    description: `ما با تیمی مجرب و متخصص در زمینه‌های طراحی سایت، سوشال مدیا، سئو، تدوین، مارکتینگ، گرافیک و تولید محتوا آماده‌ایم تا به شما کمک کنیم برند قدرتمندی را ایجاد کنید.`,
    openGraph: {
        title: `خدمات ما`,
        description: `ما با تیمی مجرب و متخصص در زمینه‌های طراحی سایت، سوشال مدیا، سئو، تدوین، مارکتینگ، گرافیک و تولید محتوا آماده‌ایم تا به شما کمک کنیم برند قدرتمندی را ایجاد کنید.`,
        
        url: `https://mavaranet.net/service/`,
        locale: `fa_IR`,
        type: `article`,
        siteName: `ماورانت`,
        twitter: {
            card: 'summary_large_image',
        },
    },
}

const serviceSingle = async () => {

    const req = await fetch(`${reqUrl}/portfolios?acf_format=standard&per_page=100`);
    const portfolios = await req.json();
    
    return (
        <html lang="fa" dir="rtl">
            <DefaultLayout>
                <main>
                    <section className="service_intro wrapper">
                        <Overlay />

                        <InsidePageTitle
                            title={`خدمات ماورانت`}
                            desc={`خوش‌آمدید به ماورانت، مرکز برندینگ شما. ما با تیمی مجرب و متخصص در زمینه‌های طراحی سایت، سوشال مدیا، سئو، تدوین، مارکتینگ، گرافیک و تولید محتوا آماده‌ایم تا به شما کمک کنیم برند قدرتمندی را ایجاد کنید. همراه ما به دنیایی از امکانات و خلاقیت خوش‌آمدید.`}
                            backText={`SERVICES`}
                        />

                    </section>

                    <section className="service_description wrapper">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <SharedContent
                                        title={`طراحی سایت در ماورانت`}
                                        subtitle={`با خیال راحت سایت خود را به متخصصین بسپارید`}
                                        desc={`
                                    با ماورانت، طراحی سایت شما به یک تجربه منحصر به فرد تبدیل می‌شود. تیم متخصص ما با رویکردی تخصصی و اختصاصی، به طراحی سایت شما می‌پردازد تا برند شما به شکوه وجود بیاورد. با انعطاف پذیری در طراحی، هدف ما ایجاد یک تجربه کاربری بی‌نظیر و به یادماندنی برای بازدیدکنندگان است. به ماورانت بپیوندید و برند خود را به ما بسپارید.`}
                                        button={`دریافت مشاوره`}
                                        buttonSlug={`tel:+989125441048`}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <SharedImage
                                        imageUrl={`/images/services/service-1.webp`}
                                        alt={`web design`}
                                    />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <Image
                                    className="dash"
                                    src={`/images/dash.png`}
                                    width={1200}
                                    height={80}
                                    priority
                                    alt='dash'
                                />

                            </div>

                            <div className="row justify-content-center">
                                <div className="col-xl-6 mb-4">
                                    <ServiceDetailItem
                                        imageUrl={`/images/services/ui-design-icon.svg`}
                                        title={`طراحی سایت با رابط کاربری اختصاصی`}
                                        desc={`با تمرکز بر رابط کاربری اختصاصی، ما در ماورانت به ارائه خدمات طراحی سایتی متمایز و شگفت‌انگیز می‌پردازیم. هدف ما ایجاد یک تجربه استثنایی برای کاربران است، که همچنین باعث افزایش تعامل و رضایت آن‌ها می‌شود.`}
                                    />
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <ServiceDetailItem
                                        imageUrl={`/images/services/seo-friendly.svg`}
                                        title={`استاندارد سئو در طراحی سایت`}
                                        desc={`با بهره‌گیری از بهینه‌سازی محتوا، ساختار سایت، استفاده از کلمات کلیدی مناسب و بهبود سرعت بارگیری، ماورانت به شما کمک می‌کند تا رتبه بالاتری در نتایج جستجو کسب کنید و بر جذب ترافیک کاربران متمرکز شوید.`}
                                    />
                                </div>
                                <div className="col-12 mb-4">
                                    <ServiceDetailItem
                                        imageUrl={`/images/services/code.svg`}
                                        title={`طراحی سایت با کدنویسی اختصاصی`}
                                        desc={`با استفاده از کدنویسی اختصاصی، ما قادر به ارائه طراحی‌های سفارشی، انعطاف‌پذیر و دقیق هستیم که کاملاً با نیازها و محتوای شما هماهنگ می‌شوند. این رویکرد به ما امکان می‌دهد تا بهترین راهکارها را برای شما ارائه دهیم و وبسایتی را ایجاد کنیم که علاوه بر جذابیت بصری، در نتایج جستجو نیز موثر و قابل مشاهده باشد.`}
                                    />
                                </div>
                                <div className="col-xl-4 col-lg-6 mb-4">
                                    <ServiceDetailItem
                                        imageUrl={`/images/services/responsive.svg`}
                                        title={`طراحی سایت با نسخه واکنشگرا`}
                                        desc={` با استفاده از تکنولوژی‌های مدرن و رویکردهای طراحی نوین، وبسایت‌های واکنشگرا را به شکلی زیبا، کارآمد و سریع ارائه می‌دهیم تا کاربران شما از تجربه یکنواخت و لذت‌بخشی برخوردار شوند. از طراحی واکنشگرا در ماورانت استفاده کنید و به وبسایت خود یک نگاه تازه و جذاب ببخشید.`}
                                    />
                                </div>
                                <div className="col-xl-4 col-lg-6 mb-4">
                                    <ServiceDetailItem
                                        imageUrl={`/images/services/wordpress.svg`}
                                        title={`طراحی قالب اختصاصی وردپرس`}
                                        desc={`با استفاده از آخرین تکنولوژی‌ها و بهینه‌سازی‌های مدرن، قالب‌های اختصاصی وردپرس را به شکلی منحصر به فرد و جذاب طراحی می‌کنیم که به نیازهای شما و توانایی‌های وبسایتتان واکنش نشان می‌دهد.`}
                                    />
                                </div>
                                <div className="col-xl-4 col-lg-6 mb-4">
                                    <ServiceDetailItem
                                        imageUrl={`/images/services/speed.svg`}
                                        title={`طراحی سایت با بارگذاری سریع`}
                                        desc={`در ماورانت، ما به طراحی سایت‌های با بارگذاری سریع و عملکرد بی‌نظیر اهمیت می‌دهیم. با بهره‌گیری از بهترین روش‌های بهینه‌سازی و بهبود کارایی، وبسایت‌هایی را طراحی می‌کنیم که به سرعت بالا، زمان بارگذاری کمتر، و تجربه کاربری بهتری دست می‌دهند. `}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="service_details wrapper">
                    <div className="container">
                        <SharedSectionTitle
                            title={`سایت حرفه ای با ماورانت`}
                            subTitle={`چرا طراحی سایت در ماورانت بهترین گذینه برای حرفه ای ها است`}
                        />
                        <div className="row align-items-center justify-content-center pb-4">
                            <div className="col-lg-3 col-md-6">
                                <ServiceDetailItem
                                    imageUrl={`/images/services/ui-design-icon.svg`}
                                    title={`طراحی رابط کاربری`}
                                    desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.`}
                                />
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <ServiceDetailItem
                                    imageUrl={`/images/services/ui-design-icon.svg`}
                                    title={`طراحی رابط کاربری`}
                                    desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.`}
                                />
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <ServiceDetailItem
                                    imageUrl={`/images/services/ui-design-icon.svg`}
                                    title={`طراحی رابط کاربری`}
                                    desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.`}
                                />
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <ServiceDetailItem
                                    imageUrl={`/images/services/ui-design-icon.svg`}
                                    title={`طراحی رابط کاربری`}
                                    desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.`}
                                />
                            </div>
                        </div>
                    </div>
                </section> */}

                    <section className="shared_otherPortfolio wrapper">
                        <div className="container">
                            <SharedSectionTitle
                                title={`نمونه کار های طراحی سایت`}
                                subTitle={`شما میتوانید نمونه کار های طراحی سایت ماورانت را مشاهده کنید`}
                            />
                            <div className="row align-items-center justify-content-center">
                                {portfolios.slice(0, 3).map(portfolioArchive => (
                                    <div key={portfolioArchive.id} className="col-lg-4 col-md-6 mb-md-4">
                                        <PortfolioArchiveItem
                                            slug={`/portfolio/${portfolioArchive.slug}`}
                                            imageUrl={portfolioArchive.acf.portfolio_thumbnail}
                                            name={portfolioArchive.title.rendered}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </DefaultLayout>
        </html>
    )
}

export default serviceSingle