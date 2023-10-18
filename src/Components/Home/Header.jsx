import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div data-aos="zoom-in" className="hero min-h-screen mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/7Cjf4WV/mycharm.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="text-4xl text-fuchsia-900 font-bold">Glow Up with Glamour:</h1>
                    <h2 className="mb-5 text-fuchsia-900 text-4xl font-bold">  Your Ultimate Beauty Destination</h2>
                    <p className="mb-5 text-fuchsia-800 text-lg">Discover Radiance Within Reach!.</p>
                    <button className="btn btn-primary bg-fuchsia-800 text-white text-lg normal-case border-fuchsia-700">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;