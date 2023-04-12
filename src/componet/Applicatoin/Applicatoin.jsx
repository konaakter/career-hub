import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Applicatoinjob from '../Applicatoinjob/Applicatoinjob';

import logo from '../../All Images/Vector-1.png'
import logo1 from '../../All Images/Vector.png'

const Applicatoin = () => {
    const [applyjobs, setapplyjob] = useState([])
    const jobs = useLoaderData();
    const [filterjobs, setfilterjobs] = useState();
    console.log(jobs)
    useEffect(() =>{
        const getaaplicable = JSON.parse(localStorage.getItem("jobapply"));
        let savejob = [];
        for (let id of getaaplicable) {
            let addedjob = jobs.find(job => job.ID == id.id);
            savejob = [...savejob, addedjob]
        }
        setfilterjobs(savejob);
        setapplyjob(savejob);


    },[])
    console.log(applyjobs)
    const filterjob = (Remote) =>{
        if (Remote) {
            const filterdedjob = filterjobs.filter(jb => jb.Remote == Remote)
            setapplyjob(filterdedjob)
        }

    }
    return (
        <div className='mb-20'>
            <div className='flex justify-between top-8'>
                <img className='-mt-12  h-full' src={logo1} alt="" />
                <h1 className='text-4xl mt-16 font-semibold'>Applied Jobs</h1>
                <img className='-mt-24  h-full'src={logo} alt="" />
            </div>
            <div className=' '>
            <button onClick={() => filterjob('Remote')} className=' ms-60 border border-slate-300 p-2 text-zinc-500'>remote</button>
            <button onClick={() => filterjob('Onsite')} className='border border-slate-300 p-2 text-zinc-500'>Onsite</button>
            </div>
            {
              applyjobs.map(applyjob => <Applicatoinjob
              applyjob={applyjob}
              
              ></Applicatoinjob>)  
            }
            
        </div>
    );
};

export default Applicatoin;