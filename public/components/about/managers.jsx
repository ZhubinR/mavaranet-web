import Image from "next/image"

const Managers = ({imageUrl , name , job }) => {
    return (
        <div className="managers-wrapper">
            <Image
                src={imageUrl}
                width={200}
                height={240}
                alt={name}
                priority
            />
            <div className="text">
                <p>{name}</p>
                 <span>{job}</span> 
            </div>
        </div>
    )
}

export default Managers