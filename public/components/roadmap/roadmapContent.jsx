const RoadmapContent = ({title, goldTitle, desc}) => {
    return (
        <div className="roadmap_content">

            <h3 className="mainTitle">
                {title}
                <span>{goldTitle}</span>
            </h3>

            <p className="desc">
                {desc}
            </p>
        </div>
    )
}

export default RoadmapContent