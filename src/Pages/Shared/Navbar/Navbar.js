import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';


const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('LogOut successfully!')
            })
            .catch(error => console.log(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {
            user?.uid ?
                <>
                    <li><button className=' cursor-pointer font-semibold' onClick={handleLogOut}>Log out</button></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl "><span className=' text-primary text-3xl '>UsedGoods</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end p-0">

                    {user?.photoURL ?
                        <img
                            src={user?.photoURL}
                            alt=""
                            className=' rounded-full w-10 cursor-pointer'
                            title={user?.displayName}

                        />
                        : <FaUser></FaUser>
                    }

                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;