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
    const {JobDescription, JobResponsibilities, EducationRequirements, JobExperience, Salary, JobTitle, phone, email, Address} = details
    return (
    <div className='container mx-auto'>
                
        <div className="grid grid-cols-3 gap-8 mt-12 ">
            <div className="col-span-2">
                <p className='mt-4 text-slate-500'>
                    <samp className='font-semibold  text-slate-800'>Job Description: </samp>
                    {JobDescription}.
                </p>
                <p className='mt-4 text-slate-500'>
                    <samp className='font-semibold  text-slate-800'>Job Responsibility: </samp>
                    {JobResponsibilities}
                </p>
                <p className='mt-4 font-semibold'>
                    Educational Requirements:
                </p>
                <p className='mt-2 text-slate-500'>
                    {EducationRequirements}
                </p>
                <p className='mt-4 font-semibold'>
                    Experiences:
                </p>
                <p className='mt-2 text-slate-500'>
                    {JobExperience}
                </p>
            </div>
            <div className="">
                <div className="bg-zinc-100 p-6 rounded-md">
                    <h5 className='font-semibold mb-4 text-lg'>Job Details</h5>
                    <p className='mt-2 text-slate-500'>
                        <samp className='font-semibold text-slate-800'>Salary : </samp>
                        {Salary}
                    </p>
                    <p className='mt-2 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Job Title : </samp>
                        {JobTitle}
                    </p>
                    <h5 className='font-semibold my-4 text-lg'>Contact Information</h5>
                    <p className='mt-2 text-slate-500'>
                        <samp className='font-semibold text-base text-slate-800'>Phone : </samp>
                        {phone}
                    </p>
                    <p className='mt-2 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Email : </samp>
                       {email}
                    </p>
                    <p className='mt-2 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Address : </samp>
                        {Address}
                    </p>
                </div>
                <button className='my-4 py-2 w-full rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Apply Now</button>
            </div>
        </div>
    </div>
        

            
    );
};

export default About;