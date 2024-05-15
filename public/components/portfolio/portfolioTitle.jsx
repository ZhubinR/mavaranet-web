const PortfolioTitle = ({ title, desc, backText, subTitle }) => {
    return (
        <div className="shared_portfolioTitle">
            <h1 className="title">{title}</h1>
            <p className="subTitle">{subTitle}</p>
            <p className="desc">
                {desc}
            </p>
            <span>{backText}</span>
        </div>
    )
}

export default PortfolioTitle