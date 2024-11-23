import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold text-lg mb-3">Dragon News Home</h2>

            <div className="">
                {news.length == 0 && <h2 className="text-center font-bold text-xl">No News Available</h2>}
                {
                    news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;