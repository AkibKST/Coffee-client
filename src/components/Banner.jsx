import bgBanner from '../assets/images/more/3.png';
const Banner = () => {
    return (
        <div>
            <div className="hero w-full min-h-[80vh]" style={{ backgroundImage: `url(${bgBanner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-row">
                        <div className='flex-1'>
                            
                        </div>
                        <div>
                            <h1 className="mb-5 text-4xl font-bold flex-1">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;