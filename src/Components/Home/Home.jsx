import Navbar from "../Navbar/Navbar";
import Card from "./Card";
import Discount from "./Discount";
import Features from "./Features";
import Header from "./Header";

const Home = () => {
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Header></Header>
            <Card></Card>
            <Discount></Discount>
            <Features></Features>
        </div>
    );
};

export default Home;