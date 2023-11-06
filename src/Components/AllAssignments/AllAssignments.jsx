import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const AllAssignments = () => {
    const assignments = useLoaderData();
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("all");

    const filteredAssignments = assignments.filter(assignment => {
        if (filter === "all") {
            return true;
        } else {
            return assignment.difficulty === filter;
        }
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAssignments = filteredAssignments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredAssignments.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="min-h-screen lg:p-40">
            <div className="mb-4 flex justify-center border border-accent max-w-xl mx-auto p-2 text-xl font-semibold rounded-xl">
                <label htmlFor="filter" className="mr-2">Filter by Difficulty:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
                {currentAssignments.map(assignment => (
                    <AssignmentCard key={assignment._id} assignment={assignment} />
                ))}
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={handlePrevPage}
                    className="mx-2 py-2 px-4 rounded mt-4 bg-gray-300"
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`mx-2 py-2 px-4 rounded mt-4 ${
                            currentPage === pageNumber ? "bg-accent text-white" : "bg-gray-300"
                        }`}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    className="mx-2 py-2 px-4 rounded mt-4 bg-gray-300"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllAssignments;





// Prev Code 

// import { useLoaderData } from "react-router-dom";
// import AssignmentCard from "./AssignmentCard";
// import { useState } from "react";


// const  assignments  = useLoaderData()

// const [filter, setFilter] = useState("all");

// const filteredAssignments = assignments.filter(assignment => {
//     if (filter === "all") {
//         return true; 
//     } else {
//         return assignment.difficulty === filter;
//     }
// });


// return (
//     <div className="min-h-screen  lg:p-40">
//         <div className="mb-4 flex justify-center border border-accent max-w-xl mx-auto p-2 text-xl font-semibold rounded-xl">
//             <label htmlFor="filter" className="mr-2">Filter by Difficulty:</label>
//             <select
//                 id="filter"
//                 value={filter}
//                 onChange={e => setFilter(e.target.value)}
//             >
//                 <option value="all">All</option>
//                 <option value="easy">Easy</option>
//                 <option value="medium">Medium</option>
//                 <option value="hard">Hard</option>
//             </select>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
//             {
//                 filteredAssignments.map(assignment => <AssignmentCard
//                     key={assignment._id}
//                     assignment={assignment}
//                 ></AssignmentCard>)
//             }
//         </div>
//     </div>
// );
// };

// export default AllAssignments;