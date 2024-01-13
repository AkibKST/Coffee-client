import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

const Main = () => {
    return (
        <div className="font-rancho">
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;