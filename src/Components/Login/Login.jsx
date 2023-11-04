import Lottie from 'lottie-react';
import lot from '../../assets/lottie.json'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="mr-12 flex-1">
                    <Lottie animationData={lot}></Lottie>
                </div>
                <div className="card flex-shrink-0 border bg-base-100 p-4 flex-1 ">
                    <form className="card-body">
                        <h1 className="text-3xl font-bold text-center text-accent">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                    <label className="label ">
                        New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                    </label>
                    <div className="divider">continue with</div>
                    <div className="flex justify-center">
                    <div className="mb-5">
                        <button className=" btn btn-outline btn-accent ">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;