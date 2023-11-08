
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MySub from "./MySub";
import axios from "axios";

const MySubmission = () => {

    const { user } = useContext(AuthContext)
    const [mySubmission, setMySubmission] = useState([])
    const url = `https://studdy-buddy-server.vercel.app/singlesubmission?userEmail=${user.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMySubmission(res.data)
            })
    }, [url])

    return (
        <div className="min-h-screen max-w-7xl mx-auto lg:p-40">
            <h2 className="text-2xl font-bold mb-6">Assignment Submitted By : {user.displayName}</h2>
            {
                mySubmission.map(mysub => <MySub key={mysub._id} mysub={mysub}></MySub>)
            }
        </div>
    );
};

export default MySubmission;