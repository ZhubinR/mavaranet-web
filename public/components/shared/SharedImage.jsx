import Image from "next/image"

const SharedImage = ({imageUrl , alt}) => {
    return (
        <div className="shared_image">
            <Image
                src={imageUrl}
                width={630}
                height={630}
                loading="lazy"	
                alt={alt}
            />
        </div>
    )
}

export default SharedImage