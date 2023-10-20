/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ oneProduct }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="card w-72 md:w-96 bg-fuchsia-200 shadow-xl">
          <img className=" w-full h-72 rounded-t-xl" src={oneProduct.image} alt="" />
          <div className="text-center">
            <h1 className="text-2xl text-fuchsia-800 m-4 font-bold">{oneProduct.name}</h1>
            <h1 className="text-xl text-fuchsia-700 font-bold">Brand: {oneProduct.brand}</h1>
            <h1 className="text-fuchsia-700 text-lg font-bold">Type: {oneProduct.type}</h1>
            <h1 className="text-fuchsia-700 text-lg font-bold">Price: {oneProduct.price}</h1>
            <div className="flex justify-center">
              <span className="text-fuchsia-700 text-lg font-bold">Rating: </span>
              {Array.from({ length: 5 }).map((_, index) => {
                if (index < Math.floor(oneProduct.rating)) {
                  return (
                    <span key={index} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  );
                } else if (
                  index === Math.floor(oneProduct.rating) &&
                  oneProduct.rating % 1 !== 0
                ) {
                  return (
                    <span key={index} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="text-gray-400 text-2xl">
                      ☆
                    </span>
                  );
                }
              })}
            </div>
          </div>
          <div className="flex justify-between mx-10 py-4 items-center">
            <Link to={`/productDetails/${oneProduct._id}`}>
              <button className="btn btn-secondary px-4 lg:px-10 normal-case text-base">
                Details
              </button>
            </Link>
            <Link to={`/updateProduct/${oneProduct._id}`}>
              <button className="btn btn-secondary px-4 lg:px-10 normal-case text-base">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
