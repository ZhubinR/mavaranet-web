import Image from "next/image"

const TestemonialImage = ({imageUrl, alt}) => {
    return (
        <div className="testemonial-image">
            <Image
                className="doc-image"
                src={imageUrl}
                width={351}
                height={508}
                alt={alt}
            />
        </div>
    )
}
export default TestemonialImage