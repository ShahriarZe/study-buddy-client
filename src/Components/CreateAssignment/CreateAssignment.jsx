import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";


const CreateAssignment = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const { user } = useContext(AuthContext)
    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleCreateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const tittle = form.tittle.value
        const description = form.description.value
        const mark = form.mark.value
        const photo = form.photo.value
        const difficulty = form.difficulty.value
        const date = form.date.value
        const userEmail = user?.email
        if (!tittle || !description || !mark || !photo) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all the fields!',
            });
        }
        const newAssignment = {
            tittle,
            description,
            mark,
            photo,
            difficulty,
            date,
            userEmail
        }
        console.log(newAssignment);
        axios.post('http://localhost:5000/assignments', newAssignment)
            .then(res => {
                console.log(res.data)
                e.target.reset()
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations...',
                    text: 'Assignment Added Seccessfully !!',
                })
            })

    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen p-20 lg:p-40">


            <Particles
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
                            value: 10,
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
            />



            <form onSubmit={handleCreateAssignment}>
                {/* Tittle, description */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tittle</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Tittle" name="tittle"  className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description"  className="input input-bordered  w-full" />
                        </label>
                    </div>

                </div>
                {/* Mark,Photo URL */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Mark</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Mark" name="mark"  className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL"  className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                {/* Difficulty, Due Date */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Difficulty</span>
                        </label>
                        <div className="input-group">
                            <select
                                value={selectedDifficulty}
                                onChange={handleDifficultyChange}
                                name="difficulty"
                                className="w-full input input-bordered"
                            >
                                <option value="hard">Hard</option>
                                <option value="medium">Medium</option>
                                <option value="easy">Easy</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control lg:ml-4">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <div className="input-group">
                            <DatePicker
                                name="date"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                placeholderText="Select Due Date"
                                dateFormat="MM/dd/yyyy"
                                className="w-full input input-bordered"
                            />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Create Assignment" className=" font-bold btn btn-block btn-outline btn-accent " />
            </form>
        </div>
    );
};

export default CreateAssignment;