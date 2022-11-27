import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/Login.jpg';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {

    const {createUser, updateUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name ,email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            toast.success('Register Successfully!')
            const userInfo = {
                displayName: event.name
            }
            updateUser(userInfo)
                .then(() => {
                    userInfo();
                })
                .catch(err => console.log(err));
            console.log(user);

            form.reset();
        })
        .catch( error => console.error(error));
    }


    return (
        <div className="hero w-full min-h-screen ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={loginImg} alt="" className=' w-full h-full' />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center mt-3 font-bold">SignUp now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input type="text" name='name' placeholder="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Your Role:</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option  selected>User</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="SignUp" />
                        </div>
                    </form>
                    <p className=' ml-8 mb-5'>Already have an account? Please <Link className=' text-orange-600' to='/login'>Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;