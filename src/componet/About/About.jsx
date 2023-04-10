import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const About = () => {
    const [details, setDetails] = useState({})
    const dynamic = useParams()
    const dynamicId = dynamic.ID
    const data = useLoaderData()
    useEffect(()=>{
        const detailsdata = data.find(dt => dt.ID == dynamicId)
        setDetails(detailsdata)
    },[])
    console.log(details)
    const {JobTitle} = details
    return (
        <div>
            <p>kona:{JobTitle}</p>


            
        </div>
    );
};

export default About;