import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-14'>
            <h1 className=' text-6xl text-center mb-14'>Answer the questoin</h1>
            <div>
            <h1 className=' text-4xl font-semibold mb-4'>When should you use context API?</h1>
            <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:Even if only b changes ComponentA will re-render  for no reason, it will render the same content. This is called an extra or unnecessary re-render. For that reason, it is bad practice to have a single, huge state provided by a context.</p>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold mb-4'>What is a custom hook?</h1>
                <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:The main reason to write a custom hook is for code reusability.  of writing the same code across multiple components that use the same common stateful logic say a setState or localStorage logic, you can put that code inside a custom hook and reuse it.</p>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold mb-4'>What is useRef?</h1>
                <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:The useRef Hook allows you to persist values between renders.
                It can be used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.

</p>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold mb-4'>What is useMemo?</h1>
                <p className='text-lg text-gray-500 mb-9 font-medium'>Answer:React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
            </div>

        </div>
    );
};

export default Blog;