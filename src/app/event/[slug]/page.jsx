import { reqUrl } from "@/app/config"
import SharedEventSingle from "../../../../public/components/shared/sharedEventSingle"
import moment from "jalali-moment"
import SharedContent1 from "../../../../public/components/shared/SharedContent1"
import SharedImage from "../../../../public/components/shared/SharedImage"
import { fetchWithRetry } from "../../../../public/components/lib/fetchWithRetry"


// export async function generateMetadata({ params }) {
//     // fetch data
//     const seoEvents = await fetch(`${reqUrl}/events?acf_format=standard&slug=${params.slug}`).then((res) => res.json())
//     const seoEvent = seoEvents[0]

//     // optionally access and extend (rather than replace) parent metadata

//     return {
//         title: seoEvent.yoast_head_json.title,
//         description: seoEvent.yoast_head_json.description,
//         openGraph: {
//             title: seoEvent.yoast_head_json.og_title,
//             description: seoEvent.yoast_head_json.og_description,
//             images: [
//                 {
//                     url: seoEvent.yoast_head_json.og_image.url, // Must be an absolute URL
//                     width: seoEvent.yoast_head_json.og_image.width,
//                     height: seoEvent.yoast_head_json.og_image.height,
//                 },
//             ],
//             url: `https://mavaranet.net/event/${seoEvent.slug}`,
//             locale: seoEvent.yoast_head_json.og_locale,
//             type: seoEvent.yoast_head_json.og_type,
//             siteName: seoEvent.yoast_head_json.og_site_name,
//             twitter: {
//                 card: 'summary_large_image',
//             },
//         },
//     }
// }


const eventSingle = async ({ params }) => {

    const { slug } = params

    const req = await fetch(`${reqUrl}/events?acf_format=standard&slug=${slug}`, { next: { revalidate: 3200 } })
    const eventPosts = await req.json()
    const eventPost = eventPosts[0]

    const gregorianDate = eventPost.date
    const jalaliDate = moment(gregorianDate, 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')

    return (
        <>
            <SharedEventSingle
                imageUrl={eventPost.acf.thumbnail_img}
                title={eventPost.acf.title}
                desc={eventPost.acf.description}
                date={eventPost.acf.date}
                location={eventPost.acf.location}
            />
            <div className="container event">

                <div className="row align-items-center wrapper justify-content-center">
                   
                    <div className="col-lg-6">
                        <SharedImage
                            imageUrl={eventPost.acf.image1} 
                            alt={eventPost.acf.title}
                        />
                    </div>
                    <div className="col-lg-6">
                        <SharedContent1
                            title={``}
                            desc={eventPost.acf.desc1}
                        />
                    </div>
                </div>
                <div className="row align-items-center wrapper justify-content-center">
                    
                    <div className="col-lg-6">

                        <SharedContent1
                            title={eventPost.acf.title2}
                            desc={eventPost.acf.desc2}
                        />
                    </div>
                    <div className="col-lg-6">
                        <SharedImage
                            imageUrl={eventPost.acf.image2}
                            alt={eventPost.acf.title2}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function generateStaticParams() {

    const events = await fetchWithRetry(`${reqUrl}/events?_fields=slug&per_page=100`);

    if (!events) {
        console.error('Failed to fetch portfolio data');
        return []; // Return an empty array to avoid build errors
    }

    // Filter out invalid or ignored portfolios
    const validEvents = events.filter(post => post && post.slug)

    return validEvents.map((post) => ({
        slug: decodeURIComponent(post.slug),
    }));
}


export default eventSingle