'use client'
import Link from "next/link"
import Image from "next/image"

const EventItem = ({ slug, title, date, location, imgUrl}) => {
    return (
        <Link href={slug} className="event_item">
            <div className="image">
                <Image
                    src={ imgUrl}
                    width={470}
                    height={300}
                    alt={title}
                    loading="lazy"	
                />
            </div>
            <div className="text">
                <h3 className="title">
                    {title}
                </h3>
                <div className="details">
                    
                    <div className="date">
                        <Image
                            src={`/images/calender.svg`}
                            width={20}
                            height={20}
                            alt="date"
                            loading="lazy"	
                        />
                        <span>{date}</span>
                    </div>
                    <div className="location">
                        <Image
                            src={`/images/location-white.svg`}
                            width={20}
                            height={20}
                            alt="location"
                            loading="lazy"	
                        />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventItem