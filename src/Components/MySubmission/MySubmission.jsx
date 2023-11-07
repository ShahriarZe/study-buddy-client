
import { useLoaderData } from "react-router-dom";

const MySubmission = () => {

    const mysubmissions = useLoaderData()

    return (
        <div>
            <h2>Total : {mysubmissions.length}</h2>
        </div>
    );
};

export default MySubmission;