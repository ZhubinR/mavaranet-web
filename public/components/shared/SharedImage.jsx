import Image from "next/image"

const SharedImage = ({imageUrl , alt}) => {
    return (
        <div className="shared_image">
            <Image
                src={imageUrl}
                width={480}
                height={480}
                
                alt={alt}
            />
        </div>
    )
}

export default SharedImage