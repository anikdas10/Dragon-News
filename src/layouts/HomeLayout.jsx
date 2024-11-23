import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-componenet/LeftNavbar";
import MainContent from "../components/layout-componenet/MainContent";
import RightNavbar from "../components/layout-componenet/RightNavbar";
import NavBar from "../components/NavBar";



const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                    
                </section>
            </header>

            <nav className="w-11/12 mx-auto">
            <NavBar>
            </NavBar>
            </nav>

            {/* main */}
            <main className="w-11/12 mx-auto pt-5  grid md:grid-cols-12">
            <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
            <section className="col-span-6"><MainContent></MainContent></section>
            <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;