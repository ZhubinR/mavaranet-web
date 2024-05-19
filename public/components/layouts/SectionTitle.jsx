const SectionTitle = ({title , subTitle}) => {
    return (
        <div className="sectionTitle position-relative ">
            <h3 className="mb-4 mb-md-2">{title}</h3>
            <p>{subTitle}</p>
        </div>
    )
}

export default SectionTitle