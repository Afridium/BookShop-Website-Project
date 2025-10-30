import React, { Suspense } from 'react';
import { Link } from 'react-router';
import SingleBook from './Book/SingleBook';

const Books = ({booksData}) => {
    console.log(booksData);
    return (
        <div className='mb-7'>
            <h1 className='text-center text-5xl font-bold work-sans mb-10'>Books</h1>
            <Suspense fallback={<span>Loading....</span>}>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    booksData.map(book => <SingleBook key={book.bookID} book={book}></SingleBook>)
                }
            </div>
                
            </Suspense>
        </div>
    );
};

export default Books;