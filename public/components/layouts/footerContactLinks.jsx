import Image from "next/image"

const FooterContactLinks = ({slug , iconUrl, text , alt}) => {
    return (
        <>
            <a href={slug} className="footer_contactLink" rel="nofollow noopener noreferrer" target="_blank">
                <Image
                    src={iconUrl}
                    width={24}
                    height={24}
                    alt={alt}
                />
                {text}
            </a>
        </>
    )
}

export default FooterContactLinks