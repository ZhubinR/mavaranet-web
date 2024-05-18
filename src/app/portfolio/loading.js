import LoaderPortfolio from "../../../public/components/loader/loaderPortfolio";
import LoaderTitle from "../../../public/components/loader/loaderTitle";


const Loading = () => {
    return (
        <div className="container">
            
            <LoaderTitle/>
            <LoaderPortfolio/>
            
        </div>
    );
};

export default Loading;