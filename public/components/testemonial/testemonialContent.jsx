import Image from "next/image"

const TestemonialContent = ({name, job, desc,  imageUrl}) => {
    return (
        <div className="testemonial-content">
           
            <div className="d-flex flex-column gap-3 align-items-center mb-3">
                <div className="responsive-image">
                    <Image
                        width={124}
                        height={124}
                        src={imageUrl}
                        alt={name}
                        loading="lazy"	
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