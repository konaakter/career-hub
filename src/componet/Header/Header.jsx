import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex h-20 container mx-auto flex justify-between items-center'>
            <div>
              <h3 className='text-3xl font-bold items-center'>Joblink</h3> 
            </div>
            <ul className='md:flex space-x-8 items-center'>
             <li className=' font-medium text-zinc-500'><Link to="/Statistics">Statistics</Link></li>
             <li className=' font-medium text-zinc-500'><Link to="/Applied Jobs">Applied Jobs</Link></li>
             <li className='font-medium text-zinc-500'><Link to="/Blog">Blog</Link></li> 
            </ul> 
            <div className='items-center'>
                <button className='rounded-md button-primary p-3 text-white	'>Star Applying</button>
            </div>
        </div>
    );
};
export default Header;