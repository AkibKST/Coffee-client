import bgNav from "../assets/images/more/15.jpg";
import logo1 from "../assets/images/more/logo1.png";


const Navbar = () => {

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
        </div>
    );
};

export default Navbar;