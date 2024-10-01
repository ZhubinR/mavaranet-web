import Image from "next/image";
const ServiceFeatureItem = ({imgUrl , text}) => {
    return (
        <div className="service_feature_item">
           <Image
            src={imgUrl}
            width={68}
            height={68}
            alt={text}
           />
           <div className="line"></div>
           <p>{text}</p>
        </div>
    );
}

export default ServiceFeatureItem;
