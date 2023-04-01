import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Blog = (props) => {
    const {blogCoverImg, AuthorImg, authorName, blogTitle, readTime, publishDate, hashtags } = props.blog
    const handleReadTime= props.handleReadTime
    const handleBookmark = props.handleBookmark
    return (
        <div className='border-b-2 my-10'>
            <img className='md:h-80 h-44 w-full rounded-xl' src={blogCoverImg} alt="" />
            <div className='flex justify-between my-5'>
                <div className='flex'>
                    <img className='w-12 rounded-full mr-5' src={AuthorImg} alt="" />
                    <div>
                        <p className='font-semibold'>{authorName}</p>
                        <p className='text-slate-500'>{publishDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-slate-500'>{readTime} min read</p>
                    <button onClick={() => handleBookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
            <h3 className='text-2xl font-bold'>{blogTitle}</h3>
            <p className='mt-5 text-slate-500'>{hashtags}</p>
            <button onClick={() => handleReadTime(readTime)} className='text-indigo-700 font-semibold border-b-2 border-indigo-700 my-8'>Mark as read</button>
           
        </div>
    );
};

export default Blog;