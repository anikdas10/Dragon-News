import { Link, Outlet } from "react-router-dom";
import userIcon from '../assets/user.png'
import NavBar from "../components/NavBar";

const AuthLayout = () => {
    return (
         <div className="font-poppins bg-[#F3F3F3] min-h-screen">
            <header className="w-11/12 mx-auto py-8">
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>

         </div>
    );
};

export default AuthLayout;