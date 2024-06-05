import React from 'react'
import Image from 'next/image'

const SharedEventSingle = ({ title, imageUrl, desc, date, location }) => {
    return (
        <div className="shared_eventSingle">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="title d-flex gap-3 align-items-center">
                            <div className="logo d-flex align-items-center justify-content-center">
                                <Image
                                    src={imageUrl}
                                    width={68}
                                    height={68}
                                    alt={title}
                                />
                            </div>
                            <h1>{title}</h1>
                        </div>
                        <p className="desc">{desc}</p>
                        <div className="d-flex flex-wrap gap-4">
                            <div className="detail d-flex align-items-center gap-2">
                                <Image
                                    src={`/images/calender.svg`}
                                    width={20}
                                    height={20}
                                    alt='date'
                                />
                                <div className="d-flex flex-column">
                                    <span>تاریخ برگزاری</span>
                                    <p>{date}</p>
                                </div>
                            </div>
                            <div className="detail d-flex align-items-center gap-2">
                                <Image
                                    src={`/images/contact/location.svg`}
                                    width={20}
                                    height={20}
                                    alt='location'
                                />
                                <div className="d-flex flex-column">
                                    <span>مکان برگزاری</span>
                                    <p>{location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharedEventSingle