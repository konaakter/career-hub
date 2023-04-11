import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-14'>
            <h1 className=' text-6xl text-center mb-14'>Answer the questoin</h1>
            <div>
            <h1 className=' text-4xl font-semibold mb-4'>When should you use context API?</h1>
            <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:</p>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold mb-4'>What is a custom hook?</h1>
                <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:</p>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold mb-4'>What is useRef?</h1>
                <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:</p>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold mb-4'>What is useMemo?</h1>
                <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:</p>
            </div>

        </div>
    );
};

export default Blog;