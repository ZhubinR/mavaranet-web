import Link from "next/link"

const Button = ({text, customclass , slug}) => {
    return (
        <Link href={slug} target="_blank" className={`${customclass} btn custom-btn`}>
            <span>{text}</span>
        </Link>
    )
}

export default Button