/* eslint-disable react/prop-types */


const AssignmentRow = ({sub}) => {
    const {tittle,mark, userName}=sub
    return (
            <tr>
                <th>{userName}</th>
                <td>{tittle}</td>
                <td>{mark}</td>
                <td><button className="btn btn-accent btn-outline">Give Mark</button></td>
            </tr>
       
    );
};

export default AssignmentRow;