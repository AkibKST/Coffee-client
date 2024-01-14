import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="font-rancho max-w-6xl mx-auto">
            <Helmet>
                <title>Espresso Emporium</title>
            </Helmet>
            <Navbar></Navbar>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;