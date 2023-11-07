/* eslint-disable react/prop-types */


const AssignmentRow = ({ sub }) => {
    console.log(sub);
    const { tittle, mark, userName, status,drive,feedback } = sub
    return (
        <tr>
            <th>{userName}</th>
            <td>{tittle}</td>
            <td>{mark}</td>
            <td>{status}</td>
            <td>
                <label htmlFor="my_modal_6" className="btn btn-outline btn-accent">Give Mark</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg">{drive}</h3>
                        <p className="py-4">{feedback}</p>
                        <button className="btn btn-outline btn-accent">Give Mark</button>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div></td>
        </tr>

    );
};

export default AssignmentRow;