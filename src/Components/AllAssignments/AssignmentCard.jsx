import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AssignmentCard = ({assignment}) => {
    const {_id,tittle,mark,photo,difficulty,date,description}=assignment
    return (
        <div className="card bg-base-100 shadow-xl border-accent border">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tittle}</h2>
    <p>Mark : {mark}</p>
    <p>Difficulty : {difficulty}</p>
    <p>Due : {date}</p>
    <p>{description}</p>
    <div className="card-actions flex justify-center">
      <Link to={`/viewassignment/${_id}`}><button className="btn btn-accent btn-outline">View Assignment</button></Link>
      <button className="btn btn-accent btn-outline">Update</button>
    </div>
  </div>
</div>
    );
};

export default AssignmentCard;