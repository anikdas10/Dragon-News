import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
            <aside className="col-span-3">Left nav bar</aside>
            <section className="col-span-6">Main content</section>
            <aside className="col-span-3">Right navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;