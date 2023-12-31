import img from '../../assets/user.png'
import study from '../../assets/study.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li className="lg:mr-5"><NavLink to='/'>Home</NavLink></li>
        <li className="lg:mr-5"><NavLink to='/allassignments'>All Assignments</NavLink></li>
        {
            user ? <li className="lg:mr-5"><NavLink to='/createAssignment'>Create Assignment</NavLink></li> : ''
        }
        {
            user ? <li className="lg:mr-5"><NavLink to='/allsubmissions'>Submitted Assignments</NavLink></li> : ''
        }
        {
            user ? <li className="lg:mr-5"><NavLink to='/mysubmissions'>My Submissions</NavLink></li> : ''
        }

    </>
    return (
        <div className="navbar bg-base-100 mb-10 border-b bg-gradient-to-b from-accent to-white">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to='/'><img className='w-8/12 md:w-8/12 lg:w-8/12 ' src={study} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img title={user.displayName} src={user.photoURL} alt="" /> :
                                    <img src={img} alt="" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-accent">
                        <div className="text-xl text-center">
                            {
                                user && <h1 className='border-b border-accent font-bold'>{user.displayName}</h1>
                            }
                        </div>
                        <div className="text-xl text-center">
                            {
                                user ? <button onClick={logOut}>SignOut</button> :
                                    <Link to="/login"><button className="btn btn-outline btn-accent w-full">Login</button></Link>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;