
const SharedPageTitle = ({title , desc , backText}) => {
    return (
        <div className="shared_pageTitle">
            <h1 className="title">{title}</h1>
            <p className="desc">
                {desc}
            </p>
            <span>{backText}</span>
        </div>
    )
}

export default SharedPageTitle