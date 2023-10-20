import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider";

const Products = () => {

    const allProducts = useLoaderData();
    console.log(allProducts);



    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10 mx-auto">
                {allProducts.length === 0 ? (
                    <div className="ml-8 lg:ml-96">
                        <p className=" w-96 shadow-xl px-16 py-10 text-5xl text-fuchsia-700 font-medium  text-center">No products available of this brand</p>
                    </div>
                ) :
                    allProducts.map(oneProduct => <ProductCard key={oneProduct._id} oneProduct={oneProduct}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;