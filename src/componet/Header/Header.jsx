import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex h-20 flex justify-between items-center md:mx-0 mx-6'>
            <div>
              <h3 className='text-3xl font-bold items-center'>Joblink</h3> 
            </div>
            <ul className='md:flex md:space-x-8 items-center mt-3'>
            <li className=' font-medium text-zinc-500'><Link to="/">Home</Link></li>  
             <li className=' font-medium text-zinc-500'><Link to="/Statistics">Statistics</Link></li>
             <li className=' font-medium text-zinc-500'><Link to="/appliedJobs">Applied Jobs</Link></li>
             <li className='font-medium text-zinc-500'><Link to="/Blog">Blog</Link></li> 
            </ul> 
            <div className='items-center'>
                <button className='rounded-md button-primary p-3 text-white	'>Star Applying</button>
            </div>
        </div>
    );
};
export default Header;