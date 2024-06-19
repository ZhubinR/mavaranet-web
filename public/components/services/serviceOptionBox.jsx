import Image from "next/image"

const ServiceOptionBox = ({ imageUrl , text }) => {
    return (
        <div className="service_options_box_item">
            <div className="image">
                <Image
                    src={imageUrl}
                    width={32}
                    height={32}
                    alt="icons"
                />
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ServiceOptionBox