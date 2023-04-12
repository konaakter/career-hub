import React from 'react';
import { useNavigate } from 'react-router-dom';

const Featured = (props) => {
    const navigate = useNavigate()
    const {CompanyLogo, JobTitle, CompanyName, CompanyLocation, Salary, ID} = props.jobdetail
    return (
        <div>
            <div className='border border-slate-300 p-12 rounded-lg'>
            <img src={CompanyLogo} alt="" />
            <h2 className=' pt-6 text-xl font-bold'>{JobTitle}</h2>
            <p className=' pt-2 font-medium text-zinc-500'>{CompanyName}</p>
            <div className='flex gap-4 pt-2'>
                <p className='font-medium text-zinc-500'>{CompanyLocation}</p>
                <p className='font-medium text-zinc-500'>{Salary}</p>
            </div>
            <button onClick={()=>navigate(`about/${ID}`)} className='rounded-md button-primary p-3 text-white	mt-2 '>View Details</button>

          </div>


        </div>
    );
};

export default Featured;