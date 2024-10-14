import { reqUrl } from "@/app/config";
import SharedEventSingle from "../../../../public/components/shared/sharedEventSingle";
import SharedContent1 from "../../../../public/components/shared/SharedContent1";
import SharedImage from "../../../../public/components/shared/SharedImage";
export const ignoredUrls = ["هومن-عشقی", "کلینیک-مهرافروز"];

export async function generateStaticParams() {
  const events = await fetch(
    `${reqUrl}/events?_fields=slug&per_page=100`
  ).then((res) => res.json());

  if (!events) {
    console.error("Failed to fetch event data");
    return []; // Return an empty array to avoid build errors
  }

  // Filter out invalid or ignored events
  const validEvents = events.filter(
    (event) =>
      event &&
      event.slug &&
      !ignoredUrls.includes(encodeURIComponent(event.slug))
  );

  return validEvents.map((event) => ({
    slug: decodeURIComponent(event.slug),
  }));
}

export async function generateMetadata({ params }) {
  const seoEvents = await fetch(
    `${reqUrl}/events?acf_format=standard&slug=${params.slug}&_fields=yoast_head_json`
  ).then((res) => res.json());
  const seoEvent = seoEvents[0];

  return {
    title: `${seoEvent.yoast_head_json.title}`,
    description: seoEvent.yoast_head_json.description,
    openGraph: {
      title: `${seoEvent.yoast_head_json.og_title} - ماورانت`,
      description: seoEvent.yoast_head_json.og_description,
      locale: seoEvent.yoast_head_json.og_locale,
      type: seoEvent.yoast_head_json.og_type,
      siteName: seoEvent.yoast_head_json.og_site_name,
      twitter: {
        card: "summary_large_image",
      },
    },
  };
}

const eventSingle = async ({ params }) => {
  const { slug } = params;

  const req = await fetch(
    `${reqUrl}/events?acf_format=standard&slug=${slug}&_fields=acf`
  );
  const eventPosts = await req.json();
  const eventPost = eventPosts[0];

  return (
    <>
      <SharedEventSingle
        title={eventPost.acf.title}
        desc={eventPost.acf.description}
        date={eventPost.acf.date}
        location={eventPost.acf.location}
      />
      <div className="container event">
        <div className="row event_border align-items-center wrapper justify-content-center">
          <div className="col-lg-6">
            <SharedImage
              imageUrl={eventPost.acf.image1}
              alt={eventPost.acf.title}
            />
          </div>
          <div className="col-lg-6">
            <SharedContent1
              title={eventPost.acf.title1}
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
  );
};

export default eventSingle;
