import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';

const Bookmarked = (props) => {
    const time = props.time
    const bookmarked = props.bookmarked
    
    return (
        <div>
            <Time time={time}></Time>
            <div className='bg-slate-200 p-5 rounded-xl my-5'>
                <p className='text-xl font-bold'>Bookmarked Blogs : {bookmarked.length}</p>
            {
                bookmarked.map((markBlog,index) => (
                    <div className='bg-white p-5 font-semibold rounded-xl my-5' key={index}>
                        <p>{index+1}. {markBlog.blogTitle}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Bookmarked;