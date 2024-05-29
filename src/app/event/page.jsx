import { reqUrl } from "../config"
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle"
import EventItem from "../../../public/components/events/EventItem" 

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

async function getData() {
    const req = await fetch(`${reqUrl}/events?acf_format=standard&per_page=100`, { next: { revalidate: 43200 } })
    if (!req.ok) {
        throw new Error('Failed to fetch data')
    }
    return req.json()
}

const EventArchive = async () => {
    const eventData = await getData();

    return (
        <main className="pageMain">
            <div className="container">
                <InsidePageTitle
                    title={`رویداد ها`}
                    desc={`ایونت‌ ها و کنگره ‌های شرکت ماورانت با هدف تقویت دانش و مهارت‌ های شما در زمینه برندینگ و بازاریابی شکل می‌گیرند. کنگره‌ها با حضور متخصصان بین‌المللی در حوزه کسب و کار های مختلف برگزار می‌شوند و به شما امکان می‌دهند تا با آخرین روند تبلیغاتی و نوآوری‌ در صنعت آشنا شوید.`}
                    backText={`EVENTS`}
                />
                <div className="row align-items-center justify-content-center">
                    {eventData.map(event => (
                    <div key={event.id} className="col-lg-4 col-md-6">
                        <EventItem
                            slug={``}
                            title={``}
                            date={``}
                            location={``}
                            imgUrl={``}
                        />
                    </div>
                ))}
                </div>
            </div>
        </main>
    )
}

export default EventArchive