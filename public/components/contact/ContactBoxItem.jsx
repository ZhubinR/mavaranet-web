import Image from "next/image"
import Link from "next/link"

const ContactBoxItem = ({ imageUrl, content, title, slug , last }) => {
    return (
        <Link href={slug} rel="nofollow noopener noreferrer" targer='_blank'>
            <div className={`contactPage_item ${last}`}>
                <div className="icon">
                    <Image
                        src={imageUrl}
                        width={36}
                        height={36}
                        alt={title}
                    />
                </div>
                <p className="title">
                    {title}
                </p>
                <p className="details">
                    {content}
                </p>
            </div>
        </Link>
    )
}

export default ContactBoxItem