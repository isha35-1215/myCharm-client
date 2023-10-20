
const Features = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-20 bg-fuchsia-300 my-20 text-base-content rounded">
            <div className="flex gap-2 px-6">
                <img className="w-20 h-20" src="https://i.ibb.co/CsvwKZb/verified-10426456.png" alt="" />
                <div className="grid items-center">
                    <h1 className="text-2xl font-semibold text-fuchsia-900">100% Authentic Products</h1>
                </div>
            </div>
            <div className="flex gap-2 px-6">
                <img className="w-20 h-20 " src="https://i.ibb.co/7nfFy4Y/medal-2956031.png" alt="" />
                <div className="grid items-center">
                    <h1 className="text-2xl font-semibold text-fuchsia-900">400+ Exclusive Brands</h1>
                </div>
            </div>
            <div className="flex gap-2 px-6">
                <img className="w-20 h-20 " src="https://i.ibb.co/WfLV7L2/app-2088495.png" alt="" />
                <div className="grid items-center">
                    <h1 className="text-2xl font-semibold text-fuchsia-900">15000+ Beauty Products</h1>
                </div>
            </div>
            <div className="flex gap-2 px-6">
                <img className="w-20 h-20 " src="https://i.ibb.co/Mk9WVFT/question-4415839.png" alt="" />
                <div className="grid items-center">
                    <h1 className="text-2xl font-semibold text-fuchsia-900">Free Beauty Consultation</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Features;