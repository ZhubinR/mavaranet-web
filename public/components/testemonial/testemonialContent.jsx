import Image from "next/image"

const TestemonialContent = ({name, job, desc,  imageUrl}) => {
    return (
        <div className="testemonial-content">
            {/* <div className="icon">
                <Image
                    width={100}
                    height={100}
                    src={`/images/quote.png`}
                    alt="quote"
                    priority
                />
            </div> */}
            <div className="d-flex flex-column gap-3 align-items-center mb-3">
                <div className="responsive-image">
                    <Image
                        width={124}
                        height={124}
                        src={imageUrl}
                        alt={name}
                        priority
                    />
                </div>
                <div>
                    <p className="name">{name}</p>
                    <p className="job">{job}</p>
                </div>
            </div>
            <p className="desc">
                {desc}
            </p>
        </div>
    )
}

export default TestemonialContent