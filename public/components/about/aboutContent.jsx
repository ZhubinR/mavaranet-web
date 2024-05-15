import Button from "../layouts/Button";

export default function AboutContent({title, subtitle , desc, button,buttonSlug}) {
    return (
        <div className="about_content">
            <div className="titleWrapper">
                <h3 className="mainTitle">
                    {title}
                </h3>

                <p className="subTitle ms-2">
                    {subtitle}
                </p>
            </div>
            <p className="desc">
                {desc}
            </p>
            <Button
                text={button}
                slug={buttonSlug}
            />
        </div>
    )
}