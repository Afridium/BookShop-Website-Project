import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import SingleReadList from './singleReadList';
const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const bookData = useLoaderData();
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBookData = storedBookData.map(book => parseInt(book));
        const existingBooks = bookData.filter((book) => convertedStoredBookData.includes(book.bookId));
        setReadList(existingBooks);
    }, [bookData])
    return (
        <div className='mt-7'>
            <div className='p-12 bg-[#f3f3f3] rounded-3xl m-5'>
                <h1 className='text-center work-sans text-4xl lg:text-6xl'><span className='font-bold'>Books</span></h1>
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
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ReadList;