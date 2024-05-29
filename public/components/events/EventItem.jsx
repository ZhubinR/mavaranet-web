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
                        />
                        <span>{date}</span>
                    </div>
                    <div className="location">
                        <Image
                            src={`/images/contact/location.svg`}
                            width={20}
                            height={20}
                            alt="location"
                        />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventItem