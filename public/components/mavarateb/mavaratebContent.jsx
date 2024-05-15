
const MavaratebContent = ({title, subtTitle, desc ,href}) => {
    return (
        <div className="mavarateb-content">
            <h3 className="title">{title}</h3>
            <p className="subTitle">{subtTitle}</p>
            <p className="desc">
                {desc}
            </p>
            <div className="detail-row"></div>
            <a className="custom-btn" href={href}>
                <span>
                    سامانه ماوراطب
                </span>
            </a>
        </div>
    )
}
export default MavaratebContent
