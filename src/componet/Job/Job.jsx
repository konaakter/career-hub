import React from 'react';

const Job = (props) => {
    console.log(props.product)
    const {Categorylogo, CategoryName, Jobsavailable} = props.product

    return (
        <div>
          <div className='bg-slate-100 mt-10 mb-20 p-16 rounded-lg'>
            <img src={Categorylogo} alt="" />
            <h3 className='pt-5 text-xl font-bold'>{CategoryName}</h3>
            <p>{Jobsavailable}</p>
           </div>
        </div>
    );
};

export default Job;