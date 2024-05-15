import Image from "next/image"
import BackgroundSlide from "./bgSlide"
import RatingItem from "./ratingItem"

const RatingSection = () => {

    return (
        <div className="section rating wrapper">
            <span className="shadow"></span>
            <Image
                className="rating-bg"
                src={`/images/globe-rating.png`}
                width={700}
                height={700}
                priority
            />

            <BackgroundSlide
                rightClass={null}
            />
            <BackgroundSlide
                rightClass={`right`}
            />

   
            <div className="container">
                <span className="line"></span>
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
                <span className="line "></span>
            </div>
        </div>
    )
}

export default RatingSection