

const SharedContent1 = ({ title, subtitle, desc }) => {
    return (
        <div className="shared_content">
            <div className="titleWrapper">
                <h1 className="mainTitle">
                    {title}
                </h1>

                <p className="subTitle ms-2">
                    {subtitle}
                </p>
            </div>
            <p className="desc">
                {desc}
            </p>
            
        </div>
    )
}

export default SharedContent1