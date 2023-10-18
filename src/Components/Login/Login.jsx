import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import app from "../../../firebase";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import Navbar from "../Navbar/Navbar";


const Login = () => {

    

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
                swal("Congrats!!", "You are successfully logged in!", "success");

                navigate(location?.state ? location.state : '/');

            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('Email');
        const password = form.get('Password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                swal("Congrats!!", "Logged in Successfully!", "success")

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                swal("Oops!", "Email or password doesn't match. Please try again.", "error");
            })
    }

    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins">
            <Navbar></Navbar>
            <div className="hero py-40 bg-fuchsia-100">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-96 shadow-sm bg-fuchsia-50">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-fuchsia-700 border-fuchsia-500 normal-case text-base text-white">Login</button>
                                </div>
                                

                            </form>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary normal-case text-base font-bold bg-fuchsia-200 w-full my-2 border-fuchsia-300 text-fuchsia-900">
                                <FcGoogle className="text-xl"></FcGoogle>
                                Continue with Google
                            </button>
                            <p className="">Do not have an account? <Link className="text-fuchsia-700 font-medium" to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;