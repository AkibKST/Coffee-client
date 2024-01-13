import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div className="w-full mt-2 h-4 flex justify-around mb-3">
            <NavLink className="btn" to={"/"}>Home</NavLink>
            <NavLink className="btn" to={"/users"}>Users</NavLink>
            <NavLink className="btn" to={"/addCoffee"}>Add Coffee</NavLink>
            <NavLink className="btn" to={"/signin"}>SignIn</NavLink>
        </div>
    );
};

export default Headers;