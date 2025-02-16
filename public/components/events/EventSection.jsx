import Button from "../layouts/Button"
import SectionTitle from "../layouts/SectionTitle"
import EventItem from "./EventItem"

const EventSection = ({ data }) => {
    return (
        <section className="section event wrapper">
            <div className="container-flouid px-4 px-lg-5">
                <SectionTitle
                    title={`رویداد ها`}
                />
                <div className="row align-items-center justify-content-center mb-4">
                    {data.map(event => (
                        <div key={event.id} className="col-xl-3 col-lg-4 col-sm-6">
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
                <div className="d-flex align-items-center justify-content-center">
                    <Button
                        text={`مشاهده بیشتر`}
                        slug={`/event`}
                    />
                </div>
            </div>
        </section>
    )
}

export default EventSection