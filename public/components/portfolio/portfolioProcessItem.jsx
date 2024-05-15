import Image from "next/image"

const PortfolioProcessItem = ({imageUrl, processName, processText}) => {
    return (
        <div className="portfolio_process_item">
            <div className="image">
                <Image
                    src={imageUrl}
                    width={84}
                    height={84}
                    alt={processName}
                />
            </div>
            <p className="processName">{processName}</p>
            <p className="processText">{processText}</p>
        </div>
    )
}

export default PortfolioProcessItem