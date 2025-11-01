import React from 'react';
import { IoPeople } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router';
const SingleReadList = ({ book }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='work-sans my-8 lg:flex lg:justify-around lg:items-center border rounded-4xl p-3.5 mx-6'>
            <div className='bg-[#f3f3f3] rounded-2xl lg:flex lg:justify-center lg:items-center lg:w-60 lg:h-60 lg:ml-2 flex-1'>
                <img src={image} className='w-52 mx-auto lg:p-11 p-3.5' alt="" />
            </div>
            <div className='lg:w-4/5 lg:pl-10'>
                <h1 className='playfair-heading text-3xl mt-3 mb-2.5'>{bookName}</h1>
                <h3 className='text-xl font-semibold text-[#131313cc] mb-2'>By: {author}</h3>
                <div className='mb-2 lg:flex lg:items-center lg:gap-4'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='font-bold'>Tags: </h3>
                        <div className='text-[#23be0a] bg-[#23be0a0d] border-0 rounded-4xl p-2'>#{tags[0]}</div>
                        <div className='text-[#23be0a] bg-[#23be0a0d] border-0 rounded-4xl p-2'>#{tags[1]}</div>
                    </div>
                    <div>
                        <p className='text-[#131313cc] flex items-center gap-3'><SlCalender />Year of publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className='text-[#13131399] font-semibold mb-5'>
                    <h3 className='flex items-center gap-3'> <IoPeople /> Publisher: {publisher}</h3>
                    <h3 className='flex items-center gap-3'><FaBook /> Pages: {totalPages}</h3>
                </div>
                <div className='flex flex-wrap items-center lg:justify-start justify-center gap-1.5'>
                    <div className='bg-[#328eff26] px-2 py-2 rounded-4xl text-[#328eff]'>Category: {category}</div>
                    <div className='bg-[#ffac3326] px-5 py-2 rounded-4xl text-[#328eff]'>{rating}</div>

                    <Link to={`/bookDetails/${book.bookId}`}><button className='btn rounded-4xl bg-[#23be0a] text-white p-3'>View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleReadList;