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
            </div>
            <div className="row align-items-center justify-content-center">
                {data.map(event => (
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

                <Button
                    text={``}
                    slug={``}
                />
            </div>
        </section>
    )
}

export default EventSection