import React, { useEffect, useState } from 'react';
import logo from '../../All Images/P3OLGJ1 copy 1.png';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';

const Home = () => {

    const [products, setproructs] = useState([]);
    const [showall, setshowall] = useState(false);
    const handlebutton = () => {
          
        setshowall(true)

    }

    const jobdetails = useLoaderData();
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproructs(data))

    },[])

    return (
        <div className='container mx-auto'>
            <div className='md:flex'>
                <div className='mt-24'>
                   <h1 className='text-7xl font-extrabold '>One Step <br /> Closer To Your <span className='text-violet-600'>Dream Job</span> </h1>
                   <p className='text-zinc-500 pt-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                   <button className='rounded-md button-primary p-3 mt-5 text-white	'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={logo} alt="" />


                </div>
            </div>
            <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold'>Job Category List</h1>
            <p className='font-medium text-zinc-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-4 gap-4'>
            {
                products.map(product => <Job
                product={product}
                ></Job>)
            }

            </div>


            <div>
                <div className='text-center'>
                   <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                   <p className='font-medium text-zinc-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-3 gap-4 mt-16'>
                     {
                      jobdetails.map(jobdetail => <Featured
                        jobdetail={jobdetail}
                    ></Featured>)  
                    }
                </div>
            </div>
            <p onClick={handlebutton} className='text-center'>
                <button className='rounded-md button-primary p-3 text-white'>See All Jobs</button>
            </p>
        </div>
    );
};

export default Home;
