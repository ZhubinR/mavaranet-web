import React from 'react'

export async function generateMetadata() {
    // optionally access and extend (rather than replace) parent metadata

    return {
        title: `رویداد های ماورانت`,
        description: `ایونت‌ ها و کنگره ‌های شرکت ماورانت با هدف تقویت دانش و مهارت‌ های شما در زمینه برندینگ و بازاریابی شکل می‌گیرند و به شما امکان می‌دهند تا با آخرین روند تبلیغاتی و نوآوری‌ در صنعت آشنا شوید.`,
        openGraph: {
            title: `رویداد های ماورانت`,
            description: `ایونت‌ ها و کنگره ‌های شرکت ماورانت با هدف تقویت دانش و مهارت‌ های شما در زمینه برندینگ و بازاریابی شکل می‌گیرند و به شما امکان می‌دهند تا با آخرین روند تبلیغاتی و نوآوری‌ در صنعت آشنا شوید.`,
            url: `https://mavaranet.net/blog/`,
            locale: `fa_IR`,
            type: `article`,
            siteName: `ماورانت`,
            twitter: {
                card: 'summary_large_image',
            },
        },
    }
}

const EventArchive = () => {
    return (
        <main className="pageMain">
            <div className="container">
                <InsidePageTitle
                    title={`رویداد ها`}
                    desc={`ایونت‌ ها و کنگره ‌های شرکت ماورانت با هدف تقویت دانش و مهارت‌ های شما در زمینه برندینگ و بازاریابی شکل می‌گیرند. کنگره‌ها با حضور متخصصان بین‌المللی در حوزه کسب و کار های مختلف برگزار می‌شوند و به شما امکان می‌دهند تا با آخرین روند تبلیغاتی و نوآوری‌ در صنعت آشنا شوید.`}
                    backText={`EVENTS`}
                />
                <div className="row align-items-center justify-content-center">

                </div>
            </div>
        </main>
    )
}

export default EventArchive