import Image from "next/image";
import ContactItem from "./ContactItem";


export default function ContactSection() {
    return (
        <section className="section contact wrapper ">    
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col order-3 order-lg-1 right">
                        
                        <ContactItem
                            socialRes={`boxIcon`}
                            reverseClass={`reverse`}
                            imageUrl={`/images/contact/linkedin.svg`}
                            imageAlt={`لینکدین`}
                            slug={`https://www.linkedin.com/company/mavaranet?originalSubdomain=ir`}
                            text={`صفحه لینکدین`}
                        />
                        <ContactItem
                            socialRes={`boxIcon`}
                            reverseClass={`normal reverse`}
                            imageUrl={`../images/contact/youtube.svg`}
                            imageAlt={`یوتیوب`}
                            slug={`https://www.youtube.com/mavaranet`}
                            text={`صفحه یوتیوب`}
                        />
                        <ContactItem
                            socialRes={`boxIcon`}
                            reverseClass={`reverse mb-0`}
                            imageUrl={`../images/contact/instagram.svg`}
                            imageAlt={`اینستاگرام`}
                            slug={`https://www.instagram.com/mavaranet`}
                            text={`صفحه اینستاگرام`}
                        />
                    </div>
                    <div className="col-xl-5 order-2 d-flex align-items-center justify-content-center">
                        <Image
                            className="contactGlobe"
                            src="/images/gold-globe.webp"
                            alt="globe"
                            width={550}
                            height={550}
                            loading="lazy"	
                        />

                    </div>
                    <div className="col left order-1 order-lg-3">
                        <ContactItem
                            reverseClass={``}
                            imageUrl={`../images/contact/phone.svg`}
                            imageAlt={`تلفن`}
                            slug={`tel:+989125441048`}
                            text={`09125441048`}
                        />
                        <ContactItem
                            reverseClass={`normal`}
                            imageUrl={`../images/contact/mail.svg`}
                            imageAlt={`ایمیل`}
                            slug={`mailto:info@mavaranet.net`}
                            text={`info@mavaranet.net`}
                        />
                        <ContactItem
                            reverseClass={`mb-0`}
                            imageUrl={`../images/contact/location.svg`}
                            imageAlt={`آدرس`}
                            slug={`https://maps.app.goo.gl/xCmMNMLzty9FRKwi9`}
                            text={`تهران، آیت الله کاشانی، ساختمان راز بلوک A`}
                        />
                    </div>
                </div>
            </div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </section>
    )
}