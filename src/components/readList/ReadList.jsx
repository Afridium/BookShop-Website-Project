import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import SingleReadList from './singleReadList';
import { getStoredBookfromWishlist } from '../../utilities/addToDBasWishlist';
const ReadList = () => {
    //Mark As Read
    const [readList, setReadList] = useState([]);
    const bookData = useLoaderData();
    useEffect(() => {
        const storedBookData = getStoredBook() || [];
        const convertedStoredBookData = storedBookData.map(book => parseInt(book));
        const existingBooks = bookData.filter((book) => convertedStoredBookData.includes(book.bookId));
        setReadList(existingBooks);
    }, [bookData])

    //WishList
    const [wishList, setWishlist] = useState([]);
    const bookData2 = useLoaderData();
    useEffect(() => {
        const storedWishlistBooks = getStoredBookfromWishlist() || [];
        console.log(storedWishlistBooks);
        const covertedWishListBookData = storedWishlistBooks.map(book => parseInt(book));
        const existingBooks = bookData2.filter(book => covertedWishListBookData.includes(book.bookId));
        setWishlist(existingBooks);
    }, [bookData2])

    //Sorting
    const [sort, setSort] = useState("");

    const handleSorting = type => {
        setSort(type);
        if(type === "Pages"){
            const setSort =  [...readList].sort((a,b) => a.totalPages - b.totalPages);
            console.log(setSort);
            setReadList(setSort);
            const setSort2 = [...wishList].sort((a,b) => a.totalPages - b.totalPages);
            setWishlist(setSort2);
        }
        if(type === "Rating"){
            const setSort =  [...readList].sort((a,b) => a.rating - b.rating);
            console.log(setSort);
            setReadList(setSort);
            const setSort2 = [...wishList].sort((a,b) => a.rating - b.rating);
            setWishlist(setSort2);
        }
      
    }
    return (
        <div className='mt-7'>
            <div className='p-12 bg-[#f3f3f3] rounded-3xl m-5'>
                <h1 className='text-center work-sans text-4xl lg:text-6xl'><span className='font-bold'>Books</span></h1>
            </div>
            <div className="dropdown flex justify-center">
                <div tabIndex={0} role="button" className="btn rounded-xl bg-[#23be0a] text-white p-3 m-1">Sort By {sort ? sort : 'None'}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSorting("Pages")}><a>Pages</a></li>
                    <li onClick={() => handleSorting("Rating")}><a>Rating</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map((book) => <SingleReadList key={book.bookId} book={book}></SingleReadList>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.map((book) => <SingleReadList key={book.bookId} book={book}></SingleReadList>)
                    }
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ReadList;