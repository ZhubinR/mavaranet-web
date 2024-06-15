import SharedSectionTitle from '../../../public/components/shared/SharedSectionTitle'
import ServiceDetailItem from '../../../public/components/services/serviceDetailItem'
import PortfolioArchiveItem from '../../../public/components/portfolio/portfolioArchiveItem'
import { reqUrl } from '../config'
import '@/app/styles/styles.scss'
import SharedServiceTitle from '../../../public/components/shared/SharedServiceTitle'
import SharedImage from '../../../public/components/shared/SharedImage'
import SharedContent1 from '../../../public/components/shared/SharedContent1'

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

    const Preq = await fetch(`${reqUrl}/portfolios?acf_format=standard&per_page=100`);
    const portfolios = await Preq.json();

    const serviceData = await fetch(`${reqUrl}/services?acf_format=standard`).then((res) => res.json())
    const service = serviceData[0]
   
    return (

        <main>
            <section className="service_intro wrapper">
                <SharedServiceTitle
                    title={service.acf.title}
                    tagline={service.acf.tagline}
                    eng={service.acf.title_eng}
                />
            </section>

            <section className="service_description wrapper pt-0">
                <div className="container">
                    <div className="row justify-content-center align-items-center wrapper">
                        <div className="col-lg-7">
                            <SharedContent1
                                desc={service.acf.description}
                            />
                        </div>
                        <div className="col-lg-5">
                            <SharedImage
                                imageUrl={`/images/services/seo.png`}
                                alt={`طراحی سایت`}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 mb-4">
                            <ServiceDetailItem
                                imageUrl={`/images/services/numb1.svg`}
                                title={service.acf.mytitle1}
                                desc={`با تمرکز بر رابط کاربری اختصاصی، ما در ماورانت به ارائه خدمات طراحی سایتی متمایز و شگفت‌انگیز می‌پردازیم. هدف ما ایجاد یک تجربه استثنایی برای کاربران است، که همچنین باعث افزایش تعامل و رضایت آن‌ها می‌شود.`}
                            />
                        </div>
                        <div className="col-xl-6 mb-4">
                            <ServiceDetailItem
                                imageUrl={`/images/services/numb2.svg`}
                                title={`استاندارد سئو در طراحی سایت`}
                                desc={`با بهره‌گیری از بهینه‌سازی محتوا، ساختار سایت، استفاده از کلمات کلیدی مناسب و بهبود سرعت بارگیری، ماورانت به شما کمک می‌کند تا رتبه بالاتری در نتایج جستجو کسب کنید و بر جذب ترافیک کاربران متمرکز شوید.`}
                            />
                        </div>
                        <div className="col-12 mb-4">
                            <ServiceDetailItem
                                imageUrl={`/images/services/numb3.svg`}
                                title={`طراحی سایت با کدنویسی اختصاصی`}
                                desc={`با استفاده از کدنویسی اختصاصی، ما قادر به ارائه طراحی‌های سفارشی، انعطاف‌پذیر و دقیق هستیم که کاملاً با نیازها و محتوای شما هماهنگ می‌شوند. این رویکرد به ما امکان می‌دهد تا بهترین راهکارها را برای شما ارائه دهیم و وبسایتی را ایجاد کنیم که علاوه بر جذابیت بصری، در نتایج جستجو نیز موثر و قابل مشاهده باشد.`}
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <ServiceDetailItem
                                imageUrl={`/images/services/numb4.svg`}
                                title={`طراحی سایت با نسخه واکنشگرا`}
                                desc={` با استفاده از تکنولوژی‌های مدرن و رویکردهای طراحی نوین، وبسایت‌های واکنشگرا را به شکلی زیبا، کارآمد و سریع ارائه می‌دهیم تا کاربران شما از تجربه یکنواخت و لذت‌بخشی برخوردار شوند. از طراحی واکنشگرا در ماورانت استفاده کنید و به وبسایت خود یک نگاه تازه و جذاب ببخشید.`}
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <ServiceDetailItem
                                imageUrl={`/images/services/numb5.svg`}
                                title={`طراحی قالب اختصاصی وردپرس`}
                                desc={`با استفاده از آخرین تکنولوژی‌ها و بهینه‌سازی‌های مدرن، قالب‌های اختصاصی وردپرس را به شکلی منحصر به فرد و جذاب طراحی می‌کنیم که به نیازهای شما و توانایی‌های وبسایتتان واکنش نشان می‌دهد.`}
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <ServiceDetailItem
                                imageUrl={`/images/services/numb6.svg`}
                                title={`طراحی سایت با بارگذاری سریع`}
                                desc={`در ماورانت، ما به طراحی سایت‌های با بارگذاری سریع و عملکرد بی‌نظیر اهمیت می‌دهیم. با بهره‌گیری از بهترین روش‌های بهینه‌سازی و بهبود کارایی، وبسایت‌هایی را طراحی می‌کنیم که به سرعت بالا، زمان بارگذاری کمتر، و تجربه کاربری بهتری دست می‌دهند. `}
                            />
                        </div>
                    </div>
                </div>
            </section>

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
    )
}

export default serviceSingle