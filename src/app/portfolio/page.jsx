"use client";
import { useState, useEffect } from "react";
import "@/app/styles/styles.scss";
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle";
import PortfolioArchiveItem from "../../../public/components/portfolio/portfolioArchiveItem";
import { reqUrl } from "../config";
import Overlay from "../../../public/components/layouts/Overlay";

const PortfolioArchive = () => {
    // Data fetching
    const [portfolioData, setPortfolioData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        GetData();
    }, []);

    const GetData = async () => {
        try {

            const res = await fetch(`${reqUrl}/portfolios?acf_format=standard&_fields=id,title,slug,acf`, { next: { revalidate: 604800 } })
            const portfoliosRes = await res.json()
            setPortfolioData(portfoliosRes)
            setFilteredData(portfoliosRes)

        } catch (error) {

            console.error('Error fetching portfoliosRes:', error);

        }
    }

    const Filter = (category) => {
        if (category === selectedCategory) {
            // If the same category is clicked again, reset the filter
            setSelectedCategory(null)
            setFilteredData(portfolioData)
        } else {
            // Filter the data based on the selected category
            const filtered = portfolioData.filter(item => item.acf.catergory.name === category)
            setSelectedCategory(category)
            setFilteredData(filtered)
        }
    }

    const handleShowAll = () => {
        setSelectedCategory(null);
        setFilteredData(portfolioData);
    };


    return (
        <main className="pageMain">
            <section className="service_intro wrapper mb-5">
                <div className="container">
                    <Overlay />
                    <InsidePageTitle
                        title={`نمونه کار های ماورانت`}
                        desc={`ویترینی از نمونه کارهای مختلف ماوارنت، نمایان کننده ی اعتماد اشخاص، کسب و کارها، انجمن های پزشکی و.. به تجربه درازمدت ماورانت`}
                        backText={`PORTFOLIO`}
                    />
                </div>
            </section>
            <div className="container mt-0">
                
                <div className="filter-row py-3">
                    <button className={`filter-btn ${!selectedCategory ? 'active' : ''}`} onClick={handleShowAll}>
                        همه
                    </button>

                    <button className={`filter-btn ${selectedCategory === 'طراحی سایت' ? 'active' : ''}`} onClick={() => Filter('طراحی سایت')}>
                        طراحی سایت
                    </button>

                    <button className={`filter-btn ${selectedCategory === 'گرافیک' ? 'active' : ''}`} onClick={() => Filter('گرافیک')}>
                        گرافیک
                    </button>

                    <button className={`filter-btn ${selectedCategory === 'سئو و محتوا' ? 'active' : ''}`} onClick={() => Filter('سئو و محتوا')}>
                        سئو و محتوا
                    </button>

                    <button className={`filter-btn ${selectedCategory === 'تدوین' ? 'active' : ''}`} onClick={() => Filter('تدوین')}>
                        تدوین
                    </button>


                </div>

                <div className="row align-item-center justify-content-center mb-4">
                    {filteredData.map((portfolio) => (
                        <div key={portfolio.id} className="col-lg-4 col-md-6 mb-4">
                            <PortfolioArchiveItem
                                slug={`/portfolio/${portfolio.slug}`}
                                imageUrl={portfolio.acf.portfolio_thumbnail}
                                name={portfolio.title.rendered}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PortfolioArchive;
