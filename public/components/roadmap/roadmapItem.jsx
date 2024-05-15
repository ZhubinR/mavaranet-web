
import Image from "next/image"




const RoadmapItem = ({ icon, number, title, desc }) => {


    return (
        <div className="item">
            <div className="top-row">
                <div className="icon">
                    <Image
                        src={`/images/roadmap/${icon}`}
                        width={100}
                        height={100}
                        alt={title}
                        priority
                    />
                </div>
                <div className="number counter-count">{number}</div>
            </div>
            <div className="content">
                <p className="title">{title}</p>
                <p className="desc">
                    {desc}
                </p>
            </div>
            <span className="line"></span>
        </div>
    )
}

export default RoadmapItem

