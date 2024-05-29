"use client";
import { useState, useEffect } from "react";
//import DefaultLayout from "../../../public/components/layouts/DefaultLayout"
import "@/app/styles/styles.scss";
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle";
import PortfolioArchiveItem from "../../../public/components/portfolio/portfolioArchiveItem";
import { reqUrl } from "../config";

// export const metadata = {
//     title: 'نمونه کار های ماورانت',
//     description: 'نمونه کارهای ما در ماورانت، به عنوان نماینده‌ای از تنوع و کیفیت بالا در زمینه تبلیغات و برندینگ شناخته می‌شوند.',
//     openGraph: {
//         title: 'نمونه کار های ماورانت',
//         description: 'نمونه کارهای ما در ماورانت، به عنوان نماینده‌ای از تنوع و کیفیت بالا در زمینه تبلیغات و برندینگ شناخته می‌شوند.',
//         locale: 'fa_IR',
//         type: 'archive',
//         url: 'https://mavaranet.net/portfolio',
//         siteName: 'ماورانت'

//     },
// }
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

            const res = await fetch(`${reqUrl}/portfolios?acf_format=standard&_fields=id,title,slug,acf`, { next: { revalidate: 1800 } })
            const portfoliosRes = await res.json()
            setPortfolioData(portfoliosRes)
            setFilteredData(portfoliosRes)

        } catch (error) {

            console.error('Error fetching portfoliosRes:', error);

        }
    }

    // Handeling category Filter 
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
        // <DefaultLayout></DefaultLayout>
        <main className="pageMain">
            <div className="container mt-0">
                <InsidePageTitle
                    title={`نمونه کار های ماورانت`}
                    desc={`ویترینی از نمونه کارهای مختلف ماوارنت، نمایان کننده ی اعتماد اشخاص، کسب و کارها، انجمن های پزشکی و.. به تجربه درازمدت ماورانت`}
                    backText={`PORTFOLIO`}
                />

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
