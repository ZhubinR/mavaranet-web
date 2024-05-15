import Link from "next/link"
import Image from "next/image"

const Cta = ({slug , imgUrl}) => {
  return (
    <Link href={slug} className="cta">
        <Image
            src={imgUrl}
            width={32}
            height={32}
            alt="cta"
        />
    </Link>    
  )
}

export default Cta