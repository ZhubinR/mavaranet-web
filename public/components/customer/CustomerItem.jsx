import Image from 'next/image'

const CustomerItem = ({ logoUrl, name, desc }) => {
    return (
        <div className="customer_item">
            <div className="image">
                <Image
                    src={logoUrl}
                    width={86}
                    height={86}
                    alt={name}
                    loading="lazy"	
                />
            </div>
            <div className="text">
                <p className="name">{name}</p>
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default CustomerItem