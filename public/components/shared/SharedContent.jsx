import Button from "../layouts/Button"

const SharedContent = ({ title, subtitle, desc, button, buttonSlug }) => {
    return (
        <div className="shared_content">
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

export default SharedContent
