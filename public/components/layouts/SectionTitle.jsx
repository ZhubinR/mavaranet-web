const SectionTitle = ({title , subTitle}) => {
    return (
        <div className="sectionTitle position-relative ">
            <h3 className="mb-5 mb-md-3">{title}</h3>
            <p>{subTitle}</p>
        </div>
    )
}

export default SectionTitle