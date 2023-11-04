import Lottie from 'lottie-react';
import lot from '../../assets/lottie.json'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-12 flex-1">
                <Lottie animationData={lot}></Lottie>
                </div>
                <div className="card flex-shrink-0 px-6 py-2  bg-base-100 flex-1 border">
                <h1 className="text-3xl font-bold text-center text-accent">Register now!</h1>
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input className="btn btn-accent" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <label className="label ">
                        Have an Account? <Link to="/login" className="label-text-alt link link-hover">Login Here</Link>
                    </label>
                    <div className="divider">continue with</div>
                    <div className="flex justify-center">
                        <div className="mb-3">
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

export default Register;