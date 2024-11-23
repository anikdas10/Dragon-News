import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
const NavBar = () => {
    return (
        <div className="flex items-center justify-between my-5">
            <div></div>
            <div>
                <ul className="flex items-center gap-4 text-lg font-medium">
                    <li>
                        <Link  to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/career'>Career</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <img src={userIcon} alt="" />
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default NavBar;
