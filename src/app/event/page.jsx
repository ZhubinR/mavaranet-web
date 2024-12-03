import { reqUrl } from "../config";
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle";
import EventItem from "../../../public/components/events/EventItem";
import "@/app/styles/styles.scss";
import Overlay from "../../../public/components/layouts/Overlay";

const EventArchive = async () => {
  const req = await fetch(`${reqUrl}/events?acf_format=standard&per_page=100`,{ next: { revalidate: 3200 } })
  const eventReq = await req.json();

  return (
    <main className="pageMain">
      <section className="service_intro wrapper mb-5">
        <div className="container">
          <Overlay />
          <InsidePageTitle
            title={`رویداد های ماورانت`}
            desc={`ایونت‌ ها و کنگره ‌های شرکت ماورانت با هدف تقویت دانش و مهارت‌ های شما در زمینه برندینگ و بازاریابی شکل می‌گیرند. کنگره‌ها با حضور متخصصان بین‌المللی در حوزه کسب و کار های مختلف برگزار می‌شوند و به شما امکان می‌دهند تا با آخرین روند تبلیغاتی و نوآوری‌ در صنعت آشنا شوید.`}
            backText={`EVENTS`}
          />
        </div>
      </section>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {eventReq.map((event) => (
            <div key={event.id} className="col-lg-4 col-md-6 mb-4">
              <EventItem
                slug={`/event/${event.slug}`}
                title={event.acf.title}
                date={event.acf.date}
                location={event.acf.location}
                imgUrl={event.acf.thumbnail_img}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventArchive;
