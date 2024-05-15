const PageTitle = ({title, subTitle}) => {
    return (
        <div className="pageTitle">
            <h1 className="title">
                {title}
            </h1>
            <p className="subTitle">{subTitle}</p>
        </div>
    )
}

export default PageTitle