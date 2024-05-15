import Image from "next/image"

const ServiceDetailItem = ({ imageUrl, title, desc }) => {
    return (
        <div className="service_details_item">

            <div className="image">
                <Image
                    src={imageUrl}
                    width={64}
                    height={64}
                    alt={title}
                />
            </div>
            <div className="content">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}

export default ServiceDetailItem