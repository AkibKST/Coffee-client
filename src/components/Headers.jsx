import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div className="w-full h-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/signup"}>SignUp</NavLink>
            <NavLink to={"/signin"}>SignIn</NavLink>
        </div>
    );
};

export default Headers;