import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Featured = (props) => {
    const navigate = useNavigate()
    const {CompanyLogo, JobTitle, CompanyName, CompanyLocation, Salary, ID, Remote, FullTime} = props.jobdatas
    return (
        <div>
            <div className='border border-slate-300 p-12 rounded-lg'>
            <img src={CompanyLogo} alt="" />
            <h2 className=' pt-6 text-xl font-bold'>{JobTitle}</h2>
            <p className=' pt-2 font-medium text-zinc-500'>{CompanyName}</p>
            <div className='flex gap-4 pt-2'>
                <p className='border border-slate-300 p-2 text-zinc-500'>{Remote}</p>
                <p className='border border-slate-300 p-2 text-zinc-500'>{FullTime}</p>

            </div>
            <div className='flex gap-4 pt-2'>
                <p className='flex  text-slate-500'>
                <MapPinIcon className='h-6 w-6'></MapPinIcon>
                <span className='font-medium text-zinc-500'>{CompanyLocation}</span> 
                </p>
                <p className='flex  text-slate-500'>
                    <CurrencyDollarIcon className='h-6 w-6 '></CurrencyDollarIcon>

                <span className='font-medium text-zinc-500'>{Salary}</span>

                </p>
            </div>
            <button onClick={()=>navigate(`about/${ID}`)} className='rounded-md button-primary p-3 text-white	mt-2 '>View Details</button>

          </div>


        </div>
    );
};

export default Featured;