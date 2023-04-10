import React, { useEffect, useState } from 'react';
import logo from '../../All Images/P3OLGJ1 copy 1.png';

const Home = () => {

    const [job, setjob] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))

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
                    <img className='w-full	' src={logo} alt="" />


                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;