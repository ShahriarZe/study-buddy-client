import Lottie from 'lottie-react';
import lot from '../../assets/lottie.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [errorText,setErrorText]=useState('')

    const {googleSignIn,signInUser} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
       const user = {email,password}
        console.log(user);

        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
            navigate(location?.state ? location?.state : '/')
            Swal.fire({
                icon: 'success',
                title: 'Congratulations...',
                text: 'Login Successfull',
            })
        })
        .catch(err =>{
            setErrorText(err.message)
            console.log(err);
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Information!',
            })
        })
    }

    const handleGoogleButton =() =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
            Swal.fire({
                icon: 'success',
                title: 'Congratulations...',
                text: 'Login Successfull',
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="mr-12 flex-1">
                    <Lottie animationData={lot}></Lottie>
                </div>
                <div className="card flex-shrink-0 border bg-base-100 p-4 flex-1 ">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center text-accent">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                        <div>
                            {
                                errorText && <p className='text-red-600'>{errorText}</p>
                            }
                        </div>
                    </form>
                    <label className="label ">
                        New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                    </label>
                    <div className="divider">continue with</div>
                    <div className="flex justify-center">
                    <div className="mb-5">
                        <button onClick={handleGoogleButton} className=" btn btn-outline btn-accent ">
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