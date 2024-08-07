import Image from "next/image"

const ContactItem = ({ reverseClass, imageUrl, imageAlt, slug, text, socialRes}) => {
    return (

        <div className={socialRes}>
            <a href={slug} rel="nofollow noopener noreferrer" target="_blank" className={`contact-item ${reverseClass}`}>
                <div className="icon">
                    <Image
                        src={imageUrl}
                        width={24}
                        height={24}
                        alt={imageAlt}
                        loading="lazy"	
                    />
                </div>
                <p>
                    {text}
                </p>
            </a>
        </div>
    )
}

export default ContactItem