/* eslint-disable react/prop-types */
const MySub = ({ mysub }) => {
    const { drive, feedback } = mysub;
    const pdfUrl = drive; 
  
    return (
      <div>
        <h2 className="text-xl">{feedback}</h2>
  
        
        <object data={pdfUrl} type="application/pdf" width="100%" height="500px">
          <embed src={pdfUrl} type="application/pdf" width="100%" height="500px" />
        </object>
      </div>
    );
  };
  
  export default MySub;