import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";


const Submit = () => {

    const toSubmit = useLoaderData()
    const { id } = useParams()
    const clickedAssignment = toSubmit.find(item => item._id == id)
    const {tittle,mark}=clickedAssignment

    const {user}=useContext(AuthContext)
    const submitForm = e =>{
        e.preventDefault()
        const form = e.target;
        const drive = form.drive.value
        const feedback = form.feedback.value
        const userEmail = user.email
        const userName = user.displayName
        const submission = {
            drive,
            feedback,
            userEmail,
            userName,
            tittle,
            mark
        }
        console.log(submission);
    }
    return (
      <div className="min-h-[80vh] p-10 lg:p-40">
        <h2 className='lg:text-4xl font-extrabold max-w-5xl mx-auto mb-6'>Tittle : {tittle}</h2>
        <h1 className='lg:text-2xl font-extrabold max-w-5xl mx-auto mb-4'>Submission Form</h1>
          <div className="max-w-5xl mx-auto">
          <form onSubmit={submitForm}>
         
          <div className="form-control md:w-1/2">
          <label htmlFor="pdfFile">Upload Drive Link: </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Google Drive" name="drive"  className="w-full input border border-accent " />
                        </label>
                    </div>
            <div>
                <label htmlFor="feedback">Feedback: </label>
                <textarea className="border border-accent w-full rounded-xl"
                    id="feedback"
                    name="feedback"
                    rows="4"
                    cols="50"
                />
            </div>
            <div className="form-control mt-2">
                            <input className="btn btn-accent btn-outline" type="submit" value="Submit" />
                        </div>
          </form>
        </div>
      </div>
    );
};

export default Submit;