
const SharedPageTitle = ({title , desc , backText}) => {
    return (
        <div className="shared_pageTitle">
            <span>{backText}</span>
            <h1 className="title">{title}</h1>
            <p className="desc">
                {desc}
            </p>
        </div>
    )
}

export default SharedPageTitle