import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);

    return (
        <div className="flex items-center justify-between my-5">
            <div>{user?.email}</div>
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
                {
                    user && user?.email ?<button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>:<Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
