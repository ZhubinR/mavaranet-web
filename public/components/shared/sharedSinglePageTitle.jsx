import Image from 'next/image'
import '@/app/styles/styles.scss'


const SharedSinglePageTitle = ({ title, tag, date }) => {
    return (
        <div className="shared_singlePageTitle">
            <div className="overlay"></div>
            <div className="container">
                <h1 className="title">{title}</h1>
                <div className="detail">
                    <div className="tag">
                        <span>{tag}</span>
                    </div>
                    <p className="date mb-0">
                        <Image
                            src={`/images/time.svg`}
                            width={24}
                            height={24}
                            alt="date"
                        />
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SharedSinglePageTitle