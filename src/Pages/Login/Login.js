import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assets/Login.jpg';

const Login = () => {


    const handleLogin = event => {
        event.preventDefault();
    }



    return (
        <div>
            <div className="hero w-full min-h-screen ">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-8">
                    <div className="text-center lg:text-left">

                        <img src={loginImg} alt="" className=' w-full h-full' />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center mt-3 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            

                            {/* <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <p className=' ml-8'>Don't have an account? Please <Link className=' text-orange-600' to='/signup'>SignUp</Link> </p>
                        <p className=' text-center font-bold text-indigo-700'>Or Login With</p>
                        <span className=' text-center pl-48 pt-4  pb-3 cursor-pointer'> <FaGoogle /> </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;