const SharedServiceTitle = ({title, tagline, eng}) => {
    return (
        <div className="shared_serviceTitle">
            <span>{eng}</span>
            <h1 className="title">{title}</h1>
            <p className="desc">
                {tagline}
            </p>
        </div>
    )
}

export default SharedServiceTitle