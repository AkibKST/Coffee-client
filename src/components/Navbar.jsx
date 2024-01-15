import { Link, NavLink } from "react-router-dom";
import bgNav from "../assets/images/more/15.jpg";
import logo1 from "../assets/images/more/logo1.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    // Context theke user ke anbo
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
        .then(()=> console.log('user logged in'))
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero max-h-16" style={{ backgroundImage: `url(${bgNav})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex">
                        <img className="h-[24px] w-[36px] mt-2" src={logo1} alt="" />
                        <h1 className="text-4xl mb-3 font-bold">Espresso Emporium</h1>
                    </div>
                </div>
            </div>
            <div className="w-full mt-2 h-4 flex justify-around mb-3">
                <NavLink className="hover:btn" to={"/"}>Home</NavLink>
                <NavLink className="hover:btn" to={"/users"}>Users</NavLink>
                <NavLink className="hover:btn" to={"/addCoffee"}>Add Coffee</NavLink>
                <NavLink className="hover:btn" to={"/mycart"}>My Cart</NavLink>
                <NavLink className="hover:btn" to={"/signup"}>Register</NavLink>
                {
                    user ? <>
                    <span>{user?.email}</span>
                    <button onClick={handleLogOut} className="btn">Logout</button>
                    </> 
                    : <Link to="/signin"> 
                    <button className="btn btn-sm">Login</button>
                    </Link>
                }
               
                

            </div>
        </div>
    );
};

export default Navbar;