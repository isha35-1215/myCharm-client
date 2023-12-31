import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import swal from "sweetalert";

const ProductDetails = () => {
    // const {user} = useContext(AuthContext);

    const product = useLoaderData();
    console.log(product);

    const { name, image, description, price, brand, type } = product;

    const handleAddCart = () => {

        

        fetch(`https://b8a10-brandshop-server-side-isha35-1215.vercel.app/cart`, {
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
            <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-12 lg:mx-auto py-10" key={product._id}> 
                <div className="w-full rounded-md bg-cover bg-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-md w-1/2 lg:w-1/3 h-1/6 lg:h-1/12 object-cover"
                    />
                </div>
                <div className="text-neutral-content">
                    <h1 className="pt-10 text-3xl font-bold text-fuchsia-900">
                        {product.name}
                    </h1>
                    <h1 className="pt-6 text-2xl font-semibold text-fuchsia-900">
                        Brand: {product.brand}
                    </h1>
                    <h1 className="pt-6 text-2xl font-semibold text-fuchsia-900">
                        Type: {product.type}
                    </h1>
                    <h1 className="pt-6 text-2xl font-normal text-fuchsia-900">
                        Price: ${product.price}
                    </h1>
                    <p className="pt-6 text-base font-normal text-fuchsia-500">
                        {product.description}
                    </p>
                    <div className="flex justify-center">
                        
                        <button onClick={handleAddCart} className="my-6 px-20 text-xl btn normal-case btn-primary bg-fuchsia-700 text-white border-none">
                            Add to Cart
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