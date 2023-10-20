import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CartItems from "./CartItems";

const MyCart = () => {
    const [products, setProducts] = useState([]); // Assuming you have the initial state of products as an empty array

    const cartItems = useLoaderData();
    // console.log(cartItems);

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10 mx-auto">
                {cartItems.map((item) => (
                    <CartItems key={item._id} item={item} products={products} setProducts={setProducts} />
                ))}
            </div>
        </div>
    );
};

export default MyCart;
