import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';

const Bookmarked = (props) => {
    const time = props.time
    const bookmarked = props.bookmarked
    console.log(bookmarked)
    return (
        <div>
            <Time time={time}></Time>
            <div className='bg-slate-200 p-5 rounded-xl'>
                <p className='text-xl font-bold'>Bookmarked Blogs : {bookmarked.length}</p>
            {
                bookmarked.map((pl,index) => (
                    <div key={index}>
                        <p>{pl.blogTitle}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Bookmarked;