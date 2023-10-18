import { useEffect, useState } from "react";

const Card = () => {

    const handleAddBrand = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandData = { image, name }
        fetch("http://localhost:5000/brands", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brandData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Use the correct path to your JSON file.
        fetch("http://localhost:5000/brands")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);
    return (
        <div className="bg-fuchsia-100 bg-opacity-30 py-10">
            {/* <form onSubmit={handleAddBrand}>
         <input type="text" name="image" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
         <input type="text" name="name" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
         <div className="form-control w-full max-w-xs ">
        <label className="label">
                    <span className="label-text"></span>
              </label>

            <input type="submit" value='Add Product' className=" mt-4  btn btn-primary bg-rose-500 border-rose-500 text-white normal-case "/>
        </div>
        </form>    */}
            <h3 className="py-4 text-4xl text-center text-fuchsia-900 font-extrabold">Choose Brand</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-12 my-6 px-12 md:px-20 lg:px-24">
                {cards.map((cart) => (
                    <div key={cart.id} className="card w-72 md:w-96 bg-fuchsia-200 shadow-xl">
                        <figure className="px-6 pt-6">
                            <img src={cart.image} alt={cart.name} className="h-72 w-80 rounded-xl" />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">{cart.name}</h2>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;