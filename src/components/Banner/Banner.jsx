import React from 'react';
import bookImg from '../../assets/book.png'
const Banner = () => {
    return (
        <div className='w-full'>
           <div className="hero bg-base-200 min-h-screen w-full rounded-3xl lg:mt-12 lg:mb-12">
            <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around">
                <div className='lg:w-1/2 m-auto lg:flex lg:justify-center'>
                   <img
                    src={bookImg}
                    className="max-w-sm lg:w-96 w-3xs rounded-lg"
                /> 
                </div>
                <div className='lg:w-1/2 m-auto lg:pl-34 lg:leading-6'>
                    <h1 className="font-bold playfair-heading text-4xl lg:text-6xl">Books to freshen up your bookshelf</h1>
                    <br />
                    <button className="btn work-sans font-black bg-amber-600 text-white p-6 lg:text-xs">View The List</button>
                </div>
            </div>
        </div> 
        </div>
        
    );
};

export default Banner;