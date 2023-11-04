import Lottie from 'lottie-react';
import lot from '../../assets/lottie.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
const Register = () => {

    const {googleSignIn,createUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value
        const user = { email, password, name, image }
        console.log(user);
        if (password.length < 6) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must be 6 Characters Long!',
            })
        }
        else if (!/[A-Z]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Uppercase Letter!',
            })
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Special Character!',
            })
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            updateProfile(result.user,{
                displayName:name,
                photoURL:image
            })
            navigate(location?.state ? location?.state : '/')
            e.target.reset()
            Swal.fire({
                icon: 'success',
                title: 'Congratulations...',
                text: 'Registration Successfull',
            })
        })
        .catch(err =>{
            console.log(err);
            e.target.reset()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User Already Exist',
            })
        })
    }

    const handleGoogleButton = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate(location.state ? location.state : '/')
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
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-12 flex-1">
                <Lottie animationData={lot}></Lottie>
                </div>
                <div className="card flex-shrink-0 px-6 py-2  bg-base-100 flex-1 border">
                <h1 className="text-3xl font-bold text-center text-accent">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                        </div>
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

export default Register;