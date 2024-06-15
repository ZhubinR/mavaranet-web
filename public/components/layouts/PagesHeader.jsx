import Link from "next/link"
import Image from "next/image"
import Button from "./Button"

const PagesHeader = () => {
    return (
        
            <header className="pageHeader">
                <div className="container">
                    <div className="headerWrapper">
                        <div className="logo">
                            <Link href={`/`}>
                                <Image
                                    src={`/images/mainLogo.png`}
                                    width={132}
                                    height={66}
                                    alt="main logo"
                                />
                            </Link>
                        </div>
                        <nav className="nav">
                            <ul>
                                <li>
                                    <Link href={`/`}>
                                        خانه
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/portfolio`}>
                                        نمونه کار ها
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/about`}>
                                        درباره ما
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href={`/contact`}>
                                        تماس با ما
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href={`/blog`}>
                                        مقالات
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/event`}>
                                        رویدادها
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <Button
                            text={`ارتباط با ما`}
                            slug={`/contact`}
                        />
                    </div>
                </div>
            </header>
        
    )
}

export default PagesHeader