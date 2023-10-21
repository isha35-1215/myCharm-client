import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "./Navbar/Navbar";

const UpdateProduct = () => {

    const { id } = useParams();
    const product = useLoaderData();
    const { image, name, brand, type, price, description, rating } = product;

    // console.log(productData);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const productData = { image, name, brand, type, price, description, rating }
        console.log(productData);


        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Success", "Your product updated successfully", "success");
                }
            })
    }




    return (
        <div className="">
            <Navbar></Navbar>
            <h2 className="text-center text-fuchsia-700 text-4xl font-bold mt-5 mb-5">Update Product Details</h2>
            <form onSubmit={handleUpdate}>
                {/* image input */}
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image of product</span>
                        </label>
                        <input type="text" name="image" placeholder="" defaultValue={image} className="input input-bordered border-fuchsia-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name of product</span>
                        </label>
                        <input type="text" name="name" placeholder="" defaultValue={name} className="input input-bordered border-fuchsia-600 w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center" >
                    {/* brand input */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        {/* <input type="text" name="brand" placeholder="" defaultValue={brand} className="input input-bordered border-fuchsia-600 w-full max-w-xs" /> */}
                        <select name="brand" defaultValue={brand} className="select select-bordered border-fuchsia-600 w-full max-w-xs">
                            <option disabled selected>Select Brand</option>
                            <option>Dior</option>
                            <option>Revlon</option>
                            <option>Avon</option>
                            <option>Chanel</option>
                            <option>Enchanteur</option>
                            <option>L'Oréal</option>
                        </select>
                    </div>
                    {/* type input */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <input type="text" name="type" placeholder="" defaultValue={type} className="input input-bordered border-fuchsia-600 w-full max-w-xs" />
                    </div>
                </div>
                {/* price input */}
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="" defaultValue={price} className="input input-bordered border-fuchsia-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating
                            </span>
                        </label>
                        <select name="rating" defaultValue={rating} className="select select-bordered border-fuchsia-600 w-full max-w-xs">
                            <option disabled selected>Select Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>                    
                    </div>
                </div>
                {/* rating input field */}
                <div className=" mb-6 flex flex-col lg:flex-row gap-4 justify-center items-center" >
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <input type="text" name="description" placeholder="" defaultValue={description} className="input input-bordered border-fuchsia-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>

                        <input type="submit" value='Update Product' className=" mt-4  btn btn-primary bg-fuchsia-700 border-fuchsia-700 text-white normal-case " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;



