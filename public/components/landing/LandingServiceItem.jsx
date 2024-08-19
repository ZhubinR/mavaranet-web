import Image from "next/image";
const LandingServiceItem = ({img , name , desc}) => {
  return (
    <div className="nationaDoctorsDay_service_item">
      <div className="d-flex align-items-end justify-content-center mb-4">
        <h3 className="title">{name}</h3>
        <Image
          src={img}
          width={64}
          height={64}
          alt={name}
        />
      </div>
      <p className="desc">{desc}</p>
    </div>
  )
}

export default LandingServiceItem;
