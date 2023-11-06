import { useLoaderData, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Swal from "sweetalert2";
const Update = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const updateAssignment = useLoaderData()
    const { id } = useParams()

    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const update = updateAssignment.find(value => value._id == id)
    const { _id, tittle, mark, photo, description } = update


    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const tittle = form.tittle.value
        const description = form.description.value
        const mark = form.mark.value
        const photo = form.photo.value
        const difficulty = form.difficulty.value
        const date = form.date.value
        const updatedAssignment = {
            tittle,
            description,
            mark,
            photo,
            difficulty,
            date
        }
        fetch(`http://localhost:5000/assignments/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire(
                    'Congratulations!',
                    'Assignment Updated',
                    'success'
                )
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto min-h-screen p-20 lg:p-40">
            <form onSubmit={handleUpdate}>
                {/* Tittle, description */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tittle</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Tittle" name="tittle" defaultValue={tittle} className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" defaultValue={description} className="input input-bordered  w-full" />
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
                            <input type="text" placeholder="Mark" name="mark" defaultValue={mark} className="w-full input input-bordered  " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered  w-full" />
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
                                required
                                selected={selectedDate}
                                onChange={handleDateChange}
                                placeholderText="Select Due Date"
                                dateFormat="MM/dd/yyyy"
                                className="w-full input input-bordered"
                            />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Update Assignment" className=" font-bold btn btn-block btn-outline btn-accent " />
            </form>
        </div>
    );
};

export default Update;