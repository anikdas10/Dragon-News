import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center p-2 bg-gray-200">
            <p className="text-lg font-medium text-white bg-red-600 px-4 py-1 ">Latest</p>
           <marquee pauseOnHover={true}> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus dolorem delectus, nemo nihil exercitationem sunt, magnam ad libero maiores sequi suscipit ab. Vel ad reprehenderit esse voluptate, pariatur amet.</p></marquee>
        </div>
    );
};

export default LatestNews;