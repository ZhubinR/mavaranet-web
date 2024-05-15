import Image from "next/image"
import Link from "next/link"

const PortfolioArchiveItem = ({ slug, imageUrl, name }) => {
    return (
        <Link href={slug}>
            <div className="portfolio_archiveItem">
                <Image
                    src={imageUrl}
                    width={395}
                    height={276}
                    alt={name}
                />
                <div className="detail">
                    
                    <p className="name">{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioArchiveItem