import { useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const ViewAssignment = () => {
    const details = useLoaderData()
    const {id }= useParams()
    const viewDetails = details.find(item => item._id == id)
    const [rotate,setRotate]=useState(false)
    return (
        <div className="max-w-5xl mx-auto min-h-screen mt-20 md:mt-20 lg:mt-0 lg:p-40">
               <motion.div animate={{rotate : rotate ? 360 : 0}} 
               onClick={()=>{setRotate(!rotate)}} className="card bg-base-100 shadow-xl border-accent border">
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
      <button className="btn btn-accent btn-outline">Take Assignment</button>
      <button className="btn btn-accent btn-outline">DELETE</button>
    </div>
  </div>
</motion.div>
        </div>
    );
};

export default ViewAssignment;







