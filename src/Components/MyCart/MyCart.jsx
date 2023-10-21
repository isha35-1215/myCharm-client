import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CartItems from "./CartItems";

const MyCart = () => {
    
    const cartItems = useLoaderData();
    const [products, setProducts] = useState(cartItems); 

    return (
        <div>
            <Navbar />
            <h2 className="text-center text-fuchsia-700 text-4xl font-bold mt-5 mb-5">My Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10 mx-auto">
                {products.map(item => 
                    <CartItems 
                    key={item._id} 
                    item={item} 
                    products={products} 
                    setProducts={setProducts} />
                )}
            </div>
        </div>
    );
};

export default MyCart;
