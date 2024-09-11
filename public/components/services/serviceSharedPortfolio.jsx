import SharedServiceTitle from "../shared/SharedServiceTitle";
import PortfolioArchiveItem from "../portfolio/portfolioArchiveItem";
import Image from "next/image";

const ServiceSharedPortfolio = ({ data, titleData }) => {
  return (
    <section className="shared_otherPortfolio service wrapper">
      <Image
        className="bg"
        src={`/images/globe-rating.png`}
        width={720}
        height={720}
        alt="bg globe"
      />
      <div className="container">
        <SharedServiceTitle
          title={`نمونه کار های ${titleData.title.rendered}`}
          eng={`portfolio`}
        />
        <div className="row align-items-center justify-content-center">
          {data.slice(0, 3).map((portfolioArchive) => (
            <div key={portfolioArchive.id} className="col-lg-4 col-md-6 mb-4">
              <PortfolioArchiveItem
                slug={`/portfolio/${portfolioArchive.slug}`}
                imageUrl={portfolioArchive.acf.portfolio_thumbnail}
                name={portfolioArchive.title.rendered}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSharedPortfolio;
