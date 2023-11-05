import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
// import { useState } from "react";

const AllAssignments = () => {
    // const [itemsPerPage, setItemsPerPage] = useState(3)
    // const [currentPage, setCurrentPage] = useState(0)

    const  assignments  = useLoaderData()


    // const numberOfPages = Math.ceil(assignments / itemsPerPage)
    // const pages = [...Array(numberOfPages).keys()]


    // const handleItemsPerPage = e => {
    //     const val = parseInt(e.target.value)
    //     console.log(val)
    //     setItemsPerPage(val)
    //     setCurrentPage(0)
    // }


    // const handlePrevPage = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }
    // const handleNextPage = () => {
    //     if (currentPage < pages.length - 1) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }


    return (
        <div className="min-h-screen  lg:p-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)
                }
            </div>
            {/* <div>
                <p>Current Page : {currentPage}</p>
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div> */}
        </div>
    );
};

export default AllAssignments;