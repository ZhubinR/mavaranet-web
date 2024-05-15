'use client'

import Image from "next/image"
import Link from "next/link"
import MenuOverlay from "./MenuOverlay"
import { useState } from "react"

const LayoutStatics = () => {

    const [sidemenuOpen, setSidemenuOpen] = useState(false)

    const openSidemenu = () => {
        setSidemenuOpen(true)
    }

    const closeSidemenu = () => {
        setSidemenuOpen(false)
    }

    return (
        <>

            <MenuOverlay onClick={closeSidemenu} isOpen={sidemenuOpen} />

            <header className="header-mobile">

                <svg onClick={openSidemenu} xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                    <path d="M4 0.25C3.58579 0.25 3.25 0.585786 3.25 1C3.25 1.41421 3.58579 1.75 4 1.75H18C18.4142 1.75 18.75 1.41421 18.75 1C18.75 0.585786 18.4142 0.25 18 0.25H4Z" fill="#FAFAFA" />
                    <path d="M4 6.25C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H18C18.4142 7.75 18.75 7.41421 18.75 7C18.75 6.58579 18.4142 6.25 18 6.25H4Z" fill="#FAFAFA" />
                    <path d="M4 12.25C3.58579 12.25 3.25 12.5858 3.25 13C3.25 13.4142 3.58579 13.75 4 13.75H18C18.4142 13.75 18.75 13.4142 18.75 13C18.75 12.5858 18.4142 12.25 18 12.25H4Z" fill="#FAFAFA" />
                    <path d="M2 7C2 7.55228 1.55228 8 1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6C1.55228 6 2 6.44772 2 7Z" fill="#FAFAFA" />
                    <path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1Z" fill="#FAFAFA" />
                    <path d="M2 13C2 13.5523 1.55228 14 1 14C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12C1.55228 12 2 12.4477 2 13Z" fill="#FAFAFA" />
                </svg>
                <Link href={`/`}>
                
                <Image
                    className="header_logo"
                    src="/images/logoMenu.png"
                    alt="logo responsive"
                    width={151}
                    height={54}
                    priority={true}
                />
                </Link>
            </header>

            <div className="sideBar">
                <div
                
                    className='link'
                >
                    <svg onClick={openSidemenu} xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                        <path d="M4 0.25C3.58579 0.25 3.25 0.585786 3.25 1C3.25 1.41421 3.58579 1.75 4 1.75H18C18.4142 1.75 18.75 1.41421 18.75 1C18.75 0.585786 18.4142 0.25 18 0.25H4Z" fill="#FAFAFA" />
                        <path d="M4 6.25C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H18C18.4142 7.75 18.75 7.41421 18.75 7C18.75 6.58579 18.4142 6.25 18 6.25H4Z" fill="#FAFAFA" />
                        <path d="M4 12.25C3.58579 12.25 3.25 12.5858 3.25 13C3.25 13.4142 3.58579 13.75 4 13.75H18C18.4142 13.75 18.75 13.4142 18.75 13C18.75 12.5858 18.4142 12.25 18 12.25H4Z" fill="#FAFAFA" />
                        <path d="M2 7C2 7.55228 1.55228 8 1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6C1.55228 6 2 6.44772 2 7Z" fill="#FAFAFA" />
                        <path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1Z" fill="#FAFAFA" />
                        <path d="M2 13C2 13.5523 1.55228 14 1 14C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12C1.55228 12 2 12.4477 2 13Z" fill="#FAFAFA" />
                    </svg>
                </div>
                <Link href={`/`}>
                <Image
                    className='logo'
                    src={`/images/logo2.png`}
                    width={45}
                    height={192}
                    alt='logo'
                />
                </Link>
            </div>

            <aside className={`menu ${sidemenuOpen ? 'active' : ''}`}>
                <svg onClick={closeSidemenu} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

                <Link href={`/`} className="menu_logo">
                    <Image
                        src={`/images/mainLogo.png`}
                        width={167}
                        height={84}
                        alt='menu logo'
                    />
                </Link>

                <div className="menu_list">
                    <ul>
                        <li>
                            <Link
                                href='/'
                            >
                                <Image
                                    className='ms-4'
                                    src={`../images/menu/home.svg`}
                                    width={20}
                                    height={20}
                                    alt='home icon'
                                />
                                خانه
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/portfolio'
                            >
                                <Image
                                    className='ms-4'
                                    src={`../images/menu/portfolio.svg`}
                                    width={20}
                                    height={20}
                                    alt='portfolio icon'
                                />
                                نمونه کار ها
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/about'
                            >
                                <Image
                                    className='ms-4'
                                    src={`../images/menu/about.svg`}
                                    width={20}
                                    height={20}
                                    alt='about icon'
                                />
                                درباره ما
                            </Link>
                        </li>

                        {/* <li>
                            <Link
                                href='/contact'
                            >
                                <Image
                                    className='ms-4'
                                    src={`../images/menu/contact.svg`}
                                    width={20}
                                    height={20}
                                    alt='contact icon'
                                />
                                تماس با ما
                            </Link>
                        </li> */}

                        <li>
                            <Link
                                href='/blog'
                            >
                                <Image
                                    className='ms-4'
                                    src={`../images/menu/blog.svg`}
                                    width={20}
                                    height={20}
                                    alt='blog icon'
                                />
                                اخبار و مقالات
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="menu_social">
                    <ul>
                        <li>
                            <Link
                                href={`https://www.instagram.com/mavaranet`}
                            >
                                <Image
                                    src={`../images/contact/instagram.svg`}
                                    width={24}
                                    height={24}
                                    alt='Instagram'
                                />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={`https://www.linkedin.com/company/mavaranet?originalSubdomain=ir`}
                            >
                                <Image
                                    src={`../images/contact/linkedin.svg`}
                                    width={24}
                                    height={24}
                                    alt='linkedin'
                                />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={`https://www.youtube.com/mavaranet`}
                            >
                                <Image
                                    src={`../images/contact/youtube.svg`}
                                    width={24}
                                    height={24}
                                    alt='Youtube'
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default LayoutStatics