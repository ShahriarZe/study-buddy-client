/* eslint-disable react/prop-types */
const FeatureCard = ({feature}) => {
    const {name,image}=feature
    return (
        <div className="card image-full" data-aos="flip-left">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title">{name}</h2>
  </div>
</div>
    );
};

export default FeatureCard;



// const FeatureCard = ({feature}) => {
//     const {name,image}=feature
//     return (
//         <div className="card  bg-base-100 shadow-xl image-full">
//   <figure><img src={image} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">{name}</h2>
//   </div>
// </div>
//     );
// };

// export default FeatureCard;