const PortfolioProjectDesc = ({title , desc}) => {
    return (
        <div className="portfolio_description_content">
            <h3 className="title">{title}</h3>
            <p className="desc">{desc}</p>
        </div>
    )
}

export default PortfolioProjectDesc