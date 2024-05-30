import Button from "../layouts/Button"
import SectionTitle from "../layouts/SectionTitle"
import EventItem from "./EventItem"

const EventSection = ({ data }) => {
    return (
        <section className="section event wrapper">
            <div className="container">
                <SectionTitle
                    title={`رویداد ها`}
                />
                <div className="row align-items-center justify-content-center">
                    {data.map(event => (
                        <div key={event.id} className="col-lg-4 col-md-6">
                            <EventItem
                                slug={event.slug}
                                title={event.acf.title}
                                date={event.acf.date}
                                location={event.acf.location}
                                imgUrl={event.acf.thumbnail_img}
                            />
                        </div>
                    ))}

                </div>
                <Button
                    text={`مشاهده بیشتر`}
                    slug={`/event`}
                />
            </div>
        </section>
    )
}

export default EventSection