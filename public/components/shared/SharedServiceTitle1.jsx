const SharedServiceTitle1 = ({title, tagline, eng}) => {
    return (
        <div className="shared_serviceTitle">
            <span>{eng.toUpperCase()}</span>
            <h3 className="title">{title}</h3>
            <p className="desc">
                {tagline}
            </p>
        </div>
    )
}

export default SharedServiceTitle1