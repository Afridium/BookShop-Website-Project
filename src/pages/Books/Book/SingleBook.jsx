import React from 'react';
import { CiStar } from "react-icons/ci";
const SingleBook = ({ book }) => {
    console.log(book);
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-96 shadow-sm border border-[#13131326]">
                <figure className="px-10 py-4 bg-[#f3f3f3] border-18 rounded-4xl border-[white]">
                    <img
                        src={book.image}
                        alt="Book"
                        className="rounded-xl h-[166px]" />
                </figure>
                <div className="card-body items-left text-left">
                    <div className='flex gap-1.5 '>
                        <div className="badge badge-secondary text-[#23be0a] bg-[#23be0a0d] border-0 rounded-4xl">{book.tags[0]}</div>
                        <div className="badge badge-secondary text-[#23be0a] bg-[#23be0a0d] border-0 rounded-4xl">{book.tags[1]}</div>
                    </div>
                     
                    <h2 className="card-title playfair-heading">{book.bookName}</h2>
                    <p className='work-sans'>By: {book.author}</p>
                    {/* <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    <hr className=' mt-2 border-dashed border-[#13131326]' />
                    <div className='flex justify-between work-sans'>
                        <div>
                            <p>{book.category}</p>
                        </div>
                        <div>
                        <div className="badge">{book.rating}</div>
                        <div className="badge"><CiStar size={20} /></div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleBook;