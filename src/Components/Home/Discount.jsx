
const Discount = () => {
    return (
        <div className="bg-fuchsia-100 mt-20 p-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center">
                <img className="w-8/12" src="https://i.ibb.co/C970gPy/undraw-shopping-app-flsj.png" alt="" />
            </div>
            <div className="grid place-items-center h-full">
                <h2 className="pt-10 text-2xl text-fuchsia-700 text-center">Purchase From MyCharm</h2>
                <h1 className="justify-center text-center text-5xl font-bold text-fuchsia-900">Get Extra Discount</h1>
                <div className="justify-center text-center pb-10">
                    <button className="btn btn-primary  bg-fuchsia-800 text-white text-lg normal-case border-fuchsia-700">Download App</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;