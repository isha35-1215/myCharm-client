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
