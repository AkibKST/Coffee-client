import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div className="font-rancho max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;