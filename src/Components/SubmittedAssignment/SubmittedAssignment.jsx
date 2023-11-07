import { useLoaderData } from "react-router-dom";
import AssignmentRow from "./AssignmentRow";

const SubmittedAssignment = () => {

    const submissions = useLoaderData()
    return (
        <div className="min-h-screen p-10 lg:p-40 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center">Total Submissions : {submissions.length}</h2>
        <div className="overflow-x-auto mt-6">
            <table className="table border border-accent">
                {/* head */}
                <thead>
                    <tr>
                        <th>Examinee Name</th>
                        <th>Tittle</th>
                        <th>Mark</th>
                        <th>Give Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        submissions.map(sub => <AssignmentRow key={sub._id} sub={sub} ></AssignmentRow>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default SubmittedAssignment;