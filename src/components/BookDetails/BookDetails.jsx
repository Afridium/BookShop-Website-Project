import React from 'react';
import { useParams, useLoaderData } from 'react-router';
import { addToStoredDB } from '../../utilities/addToDB';
import { addToStoredDBasWishlist } from '../../utilities/addToDBasWishlist';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const BookDetails = () => {
    
    const { id } = useParams();
    const bookid = parseInt(id);
    const bookDetails = useLoaderData();
    const verify = bookDetails.find(book => book.bookId === bookid);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = verify;

    const handleMarkAsRead = id => {
        Swal.fire({
        title: "Added Succesfully",
        icon: "success",
        draggable: true
    });
        addToStoredDB(id);
    }

    const handleWishlist = id => {
        Swal.fire({
        title: "Added Succesfully",
        icon: "success",
        draggable: true
    });
        addToStoredDBasWishlist(id);
    }
    return (
        <div className='lg:flex lg:gap-10 lg:items-center mb-3 lg:mt-10'>
            <div className='bg-[#f3f3f3] py-5 mb-3.5 lg:w-1/2'>
                <img src={image} className='w-32 lg:w-96 mx-auto' alt="" />
            </div>
            <div className='text-center lg:text-left work-sans lg:w-1/2'>
                <h1 className='playfair-heading text-3xl lg:text-5xl mb-3.5'>{bookName}</h1>
                <h3 className='text-[#131313cc] mb-1.5 font-semibold'>By: {author}</h3>
                <hr className='border-[#13131326] w-3/4 mx-auto lg:mx-0' />
                <h5 className='mb-1.5 mt-1.5 font-semibold'>{category}</h5>
                <hr className='border-[#13131326] mb-1.5 w-3/4 mx-auto lg:mx-0' />
                <p className='text-left'><b>Review: </b>{review}</p>
                <div className='flex justify-start gap-1 items-center'>
                    <h3 className='font-bold'>Tags: </h3>
                    <div className='text-[#23be0a] bg-[#23be0a0d] border-0 rounded-4xl p-2'>#{tags[0]}</div>
                    <div className='text-[#23be0a] bg-[#23be0a0d] border-0 rounded-4xl p-2'>#{tags[1]}</div>
                </div>

                <hr className='border-[#13131326] mb-1.5 mt-4 w-3/4 mx-auto lg:mx-0' />
                <div className=' flex justify-center lg:justify-start'>
                    <table className='border-separate border-spacing-x-10 lg:-ml-10'>
                        <tbody className='text-left'>
                            <tr>
                                <td className='text-[#131313b3]'>Number of pages: </td>
                                <td className='font-bold'>{totalPages}</td>
                            </tr>
                            <tr>
                                <td className='text-[#131313b3]'>Publisher: </td>
                                <td className='font-bold'>{publisher}</td>
                            </tr>
                            <tr>
                                <td className='text-[#131313b3]'>Year of Publishing: </td>
                                <td className='font-bold'>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className='text-[#131313b3]'>Rating: </td>
                                <td className='font-bold'>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className='flex justify-center lg:justify-start mt-9 lg:mt-5 gap-2.5 mb-4'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn p-2 px-6'>Read</button>
                    <button onClick={() => handleWishlist(id)} className='btn bg-[#50b1c9] text-white p-2'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;