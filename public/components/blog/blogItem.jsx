'use client'

import Link from "next/link"
import Image from "next/image"

export default function BlogItem({slug, imageUrl, title, description, updatedAt, readingTime, tag}) {
    return (
        <Link href={slug} className="blogLink">
            <div className="blog-item">
                <div className="image">
                    <Image
                        src={ imageUrl }
                        width={393}
                        height={214}
                        alt={ title }
                        loading="lazy"	
                    />
                </div>
                <div className="content">
                    <h3 className="title">
                        { title }
                    </h3>
                    <p className="desc">{ description }</p>
                </div>
                <div className="detail">

                    <div className="date">
                        <Image
                            src={`/images/calender.svg`}
                            width={20}
                            height={20}
                            alt="date"
                            loading="lazy"	
                        />
                        <span>{ updatedAt }</span>
                    </div>
                    <div className="readingTime" aria-label="reading time">
                        <Image
                            src={`/images/time.svg`}
                            width={20}
                            height={20}
                            alt="reading time"
                            loading="lazy"	
                        />
                        <span>{ readingTime }</span>
                    </div>
                    <div className="tag">{ tag }</div>
                </div>
            </div>
        </Link>
    )
}