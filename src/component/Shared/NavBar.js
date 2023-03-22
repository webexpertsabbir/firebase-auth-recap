import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }


    const menuItem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">Blogs</Link></li>
        <li><Link to="">Dashboard</Link></li>
        {
            user?.uid ?
                <>
                    <li><p className='text-primary'>{user?.displayName}</p></li>
                    <li><button onClick={handelLogOut}>Log Out</button></li>
                </>
                :
                <li><Link to="/login">Login</Link></li>
        }

    </React.Fragment>
  return (
    <div className="navbar bg-base-100 py-5 max-w-[1280px] mx-auto flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <p>Moon Night</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
  );
};

export default NavBar;
