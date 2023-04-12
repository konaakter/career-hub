import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import logo from '../../All Images/Vector-1.png'
import logo1 from '../../All Images/Vector.png'

const About = () => {
    const [details, setDetails] = useState({})
    const dynamic = useParams()
    const dynamicId = dynamic.ID
    const data = useLoaderData()

    const handleapplyjob = (id) =>{
       const previousjob = JSON.parse(localStorage.getItem("jobapply"));
       let jobapply = [];
       const setappleidjob = {id};
       if(previousjob) {
        const isblogapplyjob = previousjob.find(jl => jl.id == id);
        if (isblogapplyjob) {
            alert("Allready applird")
            
        }
        else{
            jobapply = [...previousjob, setappleidjob]
            localStorage.setItem("jobapply", JSON.stringify(jobapply));

        }
       }
       else{
            jobapply.push(setappleidjob);
            localStorage.setItem("jobapply", JSON.stringify(jobapply));

       }

    }
    useEffect(()=>{
        const detailsdata = data.find(dt => dt.ID == dynamicId)
        setDetails(detailsdata)
    },[])
    console.log(details)
    const {JobDescription, JobResponsibilities, EducationRequirements, JobExperience, Salary, JobTitle, phone, email, CompanyLocation, ID} = details
    return (
    <div className='container mx-auto mb-12'>
       <div className='flex justify-between top-8'>
                <img className='-mt-12  h-full' src={logo1} alt="" />
                <h1 className='text-4xl mt-16 font-semibold'>Applied Jobs</h1>
                <img className='-mt-24  h-full'src={logo} alt="" />
            </div>
                
        <div className="grid grid-cols-3 gap-8 mt-12 ">
            <div className="col-span-2">
                <p className='mt-4 text-slate-500'>
                    <samp className='text-black text-xl font-bold'>Job Description: </samp>
                    {JobDescription}.
                </p>
                <p className='mt-4 text-slate-500'>
                    <samp className=' text-black text-xl font-bold'>Job Responsibility: </samp>
                    {JobResponsibilities}
                </p>
                <p className='mt-4 text-xl font-bold '>
                    Educational Requirements:
                </p>
                <p className='mt-2 text-slate-500'>
                    {EducationRequirements}
                </p>
                <p className='mt-4 text-xl font-bold '>
                    Experiences:
                </p>
                <p className='mt-2 text-slate-500'>
                    {JobExperience}
                </p>
            </div>
            <div className="">
                <div className="bg-zinc-100 p-6 rounded-md">
                    <h5 className='font-semibold mb-4 text-lg'>Job Details</h5>
                    <hr></hr>
                    <p className='mt-2 text-slate-500 flex'>
                        <CurrencyDollarIcon className='h-6 w-6'></CurrencyDollarIcon>

                        <samp className='font-semibold text-slate-800 text-xl'>Salary: </samp>
                        {Salary}
                    </p>
                    <p className='mt-2 text-slate-500 flex'>
                        <CalendarDaysIcon className='w-6 h-6'></CalendarDaysIcon>
                        <samp className='font-semibold  text-slate-800 text-xl'>Job Title: </samp>
                        {JobTitle}
                    </p>
                    <h5 className='font-semibold my-4 text-lg'>Contact Information</h5>
                    <hr />
                    <p className='mt-2 text-slate-500 flex'>
                        <PhoneIcon className='w-6 h-6'></PhoneIcon>
                        <samp className='font-semibold  text-slate-800 text-xl'>Phone: </samp>
                        {phone}
                    </p>
                    <p className='mt-2 text-slate-500 flex'>
                        <EnvelopeIcon className='w-6 h-6'></EnvelopeIcon>
                        <samp className='font-semibold  text-slate-800 text-xl'>Email: </samp>
                       {email}
                    </p>
                    <p className='mt-2 text-slate-500 flex'>
                    <MapPinIcon className='h-6 w-6'></MapPinIcon>
                        <samp className='font-semibold  text-slate-800 text-xl'>Address: </samp>
                        {CompanyLocation}
                    </p>
                </div>
                <button onClick={ () => handleapplyjob(ID)} className='my-4 py-2 w-full rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Apply Now</button>
            </div>
        </div>
    </div>
        

            
    );
};

export default About;