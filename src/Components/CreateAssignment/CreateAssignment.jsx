import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CreateAssignment = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const {user} = useContext(AuthContext)
    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleCreateAssignment = e =>{
        e.preventDefault();
        const form = e.target;
        const tittle = form.tittle.value
        const description = form.description.value
        const mark = form.mark.value
        const photo = form.photo.value
        const difficulty = form.difficulty.value
        const date = form.date.value
        const userEmail = user?.email
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
        axios.post('http://localhost:5000/assignments',newAssignment)
        .then(res =>{
            console.log(res.data)
            Swal.fire({
                icon: 'success',
                title: 'Congratulations...',
                text: 'Assignment Added Seccessfully !!',
            })
        })

    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen p-20 lg:p-40">
            <form onSubmit={handleCreateAssignment}>
                {/* Tittle, description */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tittle</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Tittle" name="tittle" className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered  w-full" />
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
                            <input type="text" placeholder="Mark" name="mark" className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered  w-full" />
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