import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const AllAssignments = () => {
    const assignments = useLoaderData()
    console.log(assignments);
    return (
        <div className="min-h-screen p-20 lg:p-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
            {
                assignments.map(assignment=><AssignmentCard 
                    key={assignment._id}
                    assignment={assignment}
                    ></AssignmentCard>)
            }
        </div>
        </div>
    );
};

export default AllAssignments;