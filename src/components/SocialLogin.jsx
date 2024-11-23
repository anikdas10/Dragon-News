import { FaGoogle,FaGithubSquare } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">Login With</h2>
            <div className="w-full space-y-2 flex
            flex-col">
                <button className="btn text-blue-500 bg-white "><FaGoogle />Login with Google</button>
                <button className="btn bg-white"><FaGithubSquare />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;