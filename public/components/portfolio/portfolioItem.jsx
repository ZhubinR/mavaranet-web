import Link from "next/link"
import Image from 'next/image'
export default function PortfolioItem({url , imageUrl, title, imageAlt}) {
    return (
        <Link className="portfolioLink" href={url}>
            <div className="portfolio-item">
                <div className="image">
                    <Image 
                    src={imageUrl} 
                    width={620}
                    height={240}
                    alt={imageAlt} 
                    loading="lazy"	
                    />
                </div>

                <h3 className="title">
                    {title}
                </h3>
            </div>
        </Link>
    )
}