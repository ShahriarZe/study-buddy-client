import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
    const [features,setFeatures]=useState([])
    useEffect(()=>{
        fetch('feature.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    return (
       <div>
         <h1 className='text-4xl font-extrabold mb-2 max-w-7xl mx-auto mt-20'>Features</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 max-w-5xl mx-auto mt-5 mb-20 lg:mb-40">
            {
                features.map(feature =><FeatureCard feature={feature} key={feature.id}></FeatureCard> )
            }
        </div>
       </div>
    );
};

export default Features;