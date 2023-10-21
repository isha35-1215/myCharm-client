import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };
    // const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-fuchsia-700 text-lg font-bold underline" : ""
        }>Home</NavLink></li>
        <li><NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-fuchsia-700 text-lg font-bold underline" : ""
        }>AddProduct</NavLink></li>
        <li><NavLink to="/myCart" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-fuchsia-700 text-lg font-bold underline" : ""
        }>MyCart</NavLink></li>
    </>


    return (

        <div className={`bg-base-100 my-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins`} data-theme={theme}>
        <div className="navbar justify-between rounded-xl mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] pl-0 shadow bg-base-100 rounded-box w-52 gap-2">
                        {links}
                    </ul>
                </div>

                <a className="btn btn-ghost normal-case invisible lg:visible  text-fuchsia-800  text-3xl font-bold">
                    <img className='w-[40px] h-[40px] rounded-full' src="https://i.ibb.co/Y74xqWX/mycharm.png" alt="icon1" border="0" />MyCharm</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1 text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 ">

                <p>{user?.displayName}</p>
                <div>{user ?
                    <img className='rounded-full w-12 h-12 ' src={user?.photoURL} alt="" />
                    :
                    <FaUserCircle className='text-4xl'></FaUserCircle>
                }


                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className='btn btn-primary text-white bg-fuchsia-700 border-fuchsia-700 normal-case'>LogOut</button>
                        :
                        <button className='btn btn-primary text-white bg-fuchsia-700 border-fuchsia-600 normal-case'>
                            <Link to='/login'>Login</Link>
                        </button>
                }
                <button onClick={toggleTheme} className="btn btn-outline text-fuchsia-500 border-fuchsia-700 normal-case">
                {theme === "light" ? "Dark" : "Light"}
            </button>
            </div>
        </div>
        </div>
    );
};

export default Navbar;