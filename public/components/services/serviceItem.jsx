import Image from "next/image"
import Button from "../layouts/Button";

const ServiceItem = ({ imageUrl , title , desc , slug}) => {
    return (
        <div className="service-item">
                <Image
                  src={imageUrl}
                  width={392}
                  height={536}
                  alt={title}
                  loading="lazy"
                />
                <div className="content">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  {/* <Button text={`مشاهده`} slug={`service/${slug}`} /> */}
                </div>
              </div>
    )
}


export default ServiceItem;
