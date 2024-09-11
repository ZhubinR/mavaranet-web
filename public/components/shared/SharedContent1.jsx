const SharedContent1 = ({ title, subtitle, desc }) => {
    return (
        <div className="shared_content">
            <div className="titleWrapper">
                <h2 className="mainTitle">
                    {title}
                </h2>

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