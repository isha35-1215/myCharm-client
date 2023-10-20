import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import swal from "sweetalert";

const ProductDetails = () => {
    // const {user} = useContext(AuthContext);

    const product = useLoaderData();
    console.log(product);

    const { name, image, description, price, brand, type } = product;

    const handleAddCart = () => {

        

        fetch(`http://localhost:5000/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                swal("Success", "Product added to your cart successfully!", "success");

            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
<Navbar></Navbar>
            <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto py-10" key={product._id}> {/* Don't forget to add a "key" prop */}
                <div className="w-full rounded-md bg-cover bg-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-md w-1/3 h-1/12 object-cover"
                    />
                </div>
                <div className="text-neutral-content">
                    <h1 className="pt-10 text-3xl font-bold text-fuchsia-900">
                        {product.name}
                    </h1>
                    <h1 className="pt-6 text-3xl font-semibold text-fuchsia-900">
                        Brand: {product.brand}
                    </h1>
                    <h1 className="pt-6 text-3xl font-semibold text-fuchsia-900">
                        Type: {product.type}
                    </h1>
                    <p className="pt-6 text-base font-normal text-fuchsia-500">
                        {product.description}
                    </p>
                    <div className="flex justify-between">
                        <button className="my-6 btn normal-case btn-primary bg-fuchsia-700 text-white border-none">
                            Price: {product.price}
                        </button>
                        <button onClick={handleAddCart} className="my-6 btn normal-case btn-primary bg-fuchsia-700 text-white border-none">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;