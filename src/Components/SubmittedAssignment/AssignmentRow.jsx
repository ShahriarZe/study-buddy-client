/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";


const AssignmentRow = ({ sub }) => {
  const { _id, tittle, mark, userName, status, drive, feedback } = sub;
  const [submission, setSubmission] = useState([])
  const handleOpenModal = () => {
    document.getElementById(`my_modal_${sub._id}`).showModal();
  };

  const handleMark = _id => {
    fetch(`https://studdy-buddy-server.vercel.app/submissions/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'Completed' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire('Mark Given!')
          const updatedSubmissions = submission.map((sub) => {
            if (sub._id === _id) {
              return { ...sub, status: "Completed" };
            }
            return sub;
          });
          setSubmission(updatedSubmissions);
          window.location.reload();
        }
      })
  }

  return (
    <tr>
      <th>{userName}</th>
      <td>{tittle}</td>
      <td>{mark}</td>
      <td>{status === 'Completed' ? 'Completed' : 'Pending'}</td>
      <td>
        <button className="btn btn-outline btn-accent" onClick={handleOpenModal}>Give Mark</button>
        <dialog id={`my_modal_${sub._id}`} className="modal">
          <div className="modal-box">
            <h3>{drive}</h3>
            <p className="py-4">{feedback}</p>
            <button onClick={() => handleMark(_id)} className="btn btn-outline btn-accent">Give Mark</button>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </td>
    </tr>
  );
};


export default AssignmentRow;