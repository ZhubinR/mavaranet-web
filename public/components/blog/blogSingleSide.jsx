import Image from "next/image"
import Link from "next/link"

const BlogSingleSide = () => {
    return (
        <div className="blogSingle_stickySide">
            <div className="blogSingle_stickySide_category">
                <div className="thumb">
                    <Image
                        src={`/images/portfolio/logocards.png`}
                        width={32}
                        height={42}
                        alt="mavaranet logo"
                    />
                    <p className="title">
                        دسترسی سریع
                    </p>
                </div>
                <ul>
                    <li>
                        <Link href={``}>
                            طراحی سایت
                        </Link>
                    </li>
                    <li>
                        <Link href={``}>
                            سوشال مدیا
                        </Link>
                    </li>
                    <li>
                        <Link href={``}>
                            طراحی گرافیک
                        </Link>
                    </li>
                    <li>
                        <Link href={``}>
                            عکاسی
                        </Link>
                    </li>
                    <li>
                        <Link href={``}>
                            مولتی مدیا
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default BlogSingleSide