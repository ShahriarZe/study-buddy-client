import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
// import { loadSlim } from "tsparticles-slim";
// import Particles from "react-particles";

const ViewAssignment = () => {


  // --- Particles ---
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
    
//     await loadSlim(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);



  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const details = useLoaderData()
  const { id } = useParams()
  const viewDetails = details.find(item => item._id == id)
  const [rotate, setRotate] = useState(false)
  const { _id } = viewDetails

  const handleDelete = _id => {
    console.log(_id);
    if (user.email === viewDetails.userEmail) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/assignments/${_id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Assignment has been Deleted.',
                  'success'
                )
              }navigate(location?.state ? location.state : '/')
            })
        }
      })
    } else {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not Creator!',
      });
    }

  }
  return (
    <div className="max-w-5xl mx-auto min-h-screen mt-20 md:mt-20 lg:mt-0 lg:p-40">

      {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "bubble",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                      color: "#000000",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}

      <motion.div animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => { setRotate(!rotate) }} className="card bg-base-100 shadow-xl border-accent border">
        <figure className="px-10 pt-10">
          <img src={viewDetails.photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-xl">
          <h2 className="card-title text-2xl">{viewDetails.tittle}</h2>
          <p>Mark : {viewDetails.mark}</p>
          <p>Difficulty : {viewDetails.difficulty}</p>
          <p>Due : {viewDetails.date}</p>
          <p>{viewDetails.description}</p>
          <div className="card-actions flex justify-center">
            <Link to={`/submit/${_id}`}><button className="btn btn-accent btn-outline">Take Assignment</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-accent btn-outline">DELETE</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewAssignment;







