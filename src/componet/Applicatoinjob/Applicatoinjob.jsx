import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const Applicatoinjob = (props) => {
    console.log(props)
    const {CompanyLogo, JobTitle, CompanyName, CompanyLocation, Salary, ID, Remote, FullTime} = props.applyjob
    return (
        <div>
            <div className='flex border border-slate-300 p-12 rounded-lg justify-between mt-6 w-9/12 mx-auto'>
                <img className='w-2/12 h-16'  src= {CompanyLogo} alt="" />
            <div>
                <h2 className='  text-xl font-bold'>{JobTitle}</h2>
                <p>{CompanyName}</p>
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

            </div>
            <button className='rounded-md button-primary p-2  text-white mt-2 '>View Details</button>
            </div>

        </div>    
    );
};

export default Applicatoinjob;


