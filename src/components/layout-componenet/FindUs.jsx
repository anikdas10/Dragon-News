import { FaFacebook } from "react-icons/fa";
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">Find Us On</h2> 
            
                <div className="join join-vertical flex *:bg-white">
                    <button className="btn        join-item justify-start">
                     <FaFacebook></FaFacebook>   Facebook</button>

                    <button className="btn      join-item justify-start">
                    <img src={twitter} alt="" /> Twitter
                    </button>

                    <button className="btn      join-item justify-start">
                       <img src={instagram} alt="" /> Instagram</button>
                
            </div>
        </div>
    );
};

export default FindUs;