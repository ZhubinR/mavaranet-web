import Link from "next/link"
import Image from "next/image"
import FooterContactLinks from "./footerContactLinks"


const Footer = () => {

    return (
        <footer className="footer wrapper pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 mb-5 mb-xl-0">
                        <div className="footer_contact">
                            <p className="title">
                                راه های ارتباطی
                            </p>
                            <p className="desc">
                                جهت دنبال کردن آخرین اخبار و مقالات، فعالیت های مجموعه و برقراری ارتباط با تیم مارکتینگ از راه های ارتباطی زیر استفاده کنید.
                            </p>
                            <div className="row mb-3">
                                <div className="col-sm-6">
                                    <FooterContactLinks
                                        slug={`tel:+989125441048`}
                                        iconUrl={`/images/contact/phone.svg`}
                                        text={`989125441048+`}
                                        alt={`phone icon`}
                                    />
                                </div>
                                {/* <div className="col-sm-6">
                                    <FooterContactLinks
                                        slug={`mailto:info@mavaranet.net`}
                                        iconUrl={`/images/contact/mail.svg`}
                                        text={`info@mavaranet.net`}
                                        alt={`mail icon`}
                                    />
                                </div> */}
                                <div className="col-12">
                                    <FooterContactLinks
                                        slug={``}
                                        iconUrl={`/images/contact/location.svg`}
                                        text={`تهران، خیابان آیت الله کاشانی، ساختمان راز، بلوک A، طبقه 3`}
                                        alt={`location icon`}
                                    />
                                </div>
                            </div>
                            <p className="desc">
                                ماورانت در شبکه های اجتماعی
                            </p>
                            <div className="icon-row">
                                <Link href={`https://www.instagram.com/mavaranet`} rel="nofollow noopener noreferrer" target="_blank">
                                    <Image
                                        src={`/images/contact/footerInsta.svg`}
                                        width={20}
                                        height={20}
                                        alt="Instagram"
                                    />
                                </Link>

                                <Link href={`https://www.linkedin.com/company/mavaranet?originalSubdomain=ir`} rel="nofollow noopener noreferrer" target="_blank">
                                    <Image
                                        src={`/images/contact/footerLinkedin.svg`}
                                        width={20}
                                        height={20}
                                        alt="Linkedin"
                                    />
                                </Link>

                                <Link href={`https://www.youtube.com/mavaranet`} rel="nofollow noopener noreferrer" target="_blank">
                                    <Image
                                        src={`/images/contact/footeryoutube.svg`}
                                        width={20}
                                        height={20}
                                        alt="Youtube"
                                    />
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 mb-5 mb-xl-0">
                        <div className="footer_about px-xl-3">
                            <p className="titleAbout">
                                <span>
                                    ماورانت
                                </span>
                                بزرگترین آژانس برندینگ پزشکی در ایران
                            </p>
                            <p className="desc">
                                ماورانت، به عنوان اولین و بزرگترین آژانس IT-Medical کشور، در زمینه برندینگ، با داشتن ۱۸۰ کارشناس حرفه ای، جهت دیده شدن تخصص، فلوشیپ و فوق تخصص پزشکان و همچنین خدمات مراکز درمانی فعالیت می‌کند. همکاری با ۱۳۰ استاد در حوزه‌های درمانی و زیبایی، ۸ انجمن پزشکی، ۵ مرکز تحقیقات و بیش از ۱۴۰۰ پروژه درمانی در طول ۱۵ سال فعالیت، گویای اعتماد مثال زدنی است که جامعه درمانی کشور به ماورانت دارد. تحقق نقش پررنگ و اثر گذار ما در تسهیل درمان بیماران (بخصوص بیماران VIP و IPD) به دست برترین متخصصان کشور، همیشه اصلی ترین انگیزه در مسیر چشم انداز ماورانت است.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-sm-6 mb-5 mb-lg-0">
                        <p className="title">
                            دسترسی سریع
                        </p>
                        <ul>
                            <li>
                                <Link href={`/`}>
                                    خانه
                                </Link>
                            </li>

                            <li>
                                <Link href={`/portfolio`}>
                                    نمونه کار ها
                                </Link>
                            </li>

                            {/* <li>
                                <Link href={`/team`}>
                                    تیم ما
                                </Link>
                            </li> */}

                            <li>
                                <Link href={`/about`}>
                                    درباره ما
                                </Link>
                            </li>

                            <li>
                                <Link href={`/contact`}>
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <div className="footer_copyright ">
                            <p>
                                کلیه حقوق مادی و معنوی این وبسایت، متعلق به
                                <b>
                                    ‌ماورانت‌
                                </b>
                                می باشد.
                            </p>
                        </div>
                    </div>

                    {/* <div className="col-xl-2 col-sm-6">
                        <p className="title">
                            موضوعات داغ
                        </p>
                        {data.slice(0, 6).map(post => {
                            <ul>
                                <li key={post.id}>
                                    <Link href={post.slug}>
                                        {post.title.rendered}
                                    </Link>
                                </li>

                            </ul>
                        })}
                        
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer