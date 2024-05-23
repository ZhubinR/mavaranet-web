import SingleSwiper from "../layouts/SingleSwiper";
import Overlay from "../layouts/Overlay";

import MavaratebContent from "./mavaratebContent";


const MavaratebSection = () => {
    const mavaratebPics = [
        '/images/mavarateb-mockup.webp',
        '/images/mavarateb-mockup2.webp',
        '/images/mavarateb-mockup3.webp',
    ]

    return (
        <div className="section mavarateb wrapper">
      

            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 d-none d-lg-block">
                        <SingleSwiper
                            imageUrls={mavaratebPics}
                            noBack={``}
                        />
                    </div>
                    <div className="col-lg-6">
                        <MavaratebContent
                            title={`سامانه ماوراطب`}
                            subtTitle={`سامانه جامع پزشکی آنلاین`}
                            desc={`
                                مشاوره آنلاین، نوبت دهی اینترنتی، نرم افزار جامع و حرفه ای مدیریت مطب، تخصص ماوراطب است.
                                بدون نصب اپلیکیشن، در هر جا و هر زمان که بخواهید می توانید با بهترین متخصصان و فوق تخصصان پزشکی ارتباط بگیرید. 
                                ماوراطب با پزشکان متخصص و فوق تخصص خود توانسته است؛ بزرگترین انجمن پرسش و پاسخ رایگان پزشکی را ایجاد نماید.
                                خوشبختانه با ارائه خدمات با کیفیت و پشتیبانی ۲۴ ساعته سیستم توانسته ایم بیشترین میزان رضایت کاربران حوزه آنلاین را به خود اختصاص دهیم.
                            `}
                            href={`https://mavarateb.com/`}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MavaratebSection