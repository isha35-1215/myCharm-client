import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-fuchsia-50">
            <div className='text-center'>
            <h1 className='text-9xl font-extrabold text-fuchsia-950'>404</h1>
            <h2 className='text-4xl font-bold text-fuchsia-800 my-10'>Page Not Found</h2>
            <Link to="/"><button className="px-4 py-2 my-6 shadow-2xl rounded-xl text-xl font-medium text-fuchsia-700 bg-fuchsia-200 block mx-auto">Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;