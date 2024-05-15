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
                            subtTitle={`سامانه نوبت دهی  آنلاین و مشاوره آنلاین پزشکی`}
                            desc={`با ماوراطب، دیگر نیازی به انتظار در صفوف طولانی ندارید و می‌توانید با دسترسی آسان از خدمات پزشکی استفاده کنید.

                            پزشکان عزیز می‌توانند به عنوان اعضای این سامانه ثبت نام کرده و تقویم خود را مدیریت کنند. این امکان به آنها می‌دهد تا برنامه‌ی کاری خود را بهتر مدیریت کرده و به بیماران خود خدمات بهتری ارائه دهند.
                            
                            با استفاده از ماوراطب، کاربران می‌توانند به راحتی و با چند کلیک ساده، وقت خود را با پزشکان مورد نظر رزرو کرده و نوبت دهی کنند. این سامانه به شما امکان می‌دهد تا از زمان خود بهینه‌تر استفاده کنید و به آسانی به خدمات پزشکی مورد نیازتان دسترسی پیدا کنید.`}
                            href={`https://mavarateb.com/`}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MavaratebSection