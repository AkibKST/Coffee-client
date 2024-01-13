import bgNav from "../assets/images/more/15.jpg";

const Navbar = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgNav})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Espresso Emporium</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;