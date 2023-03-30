import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark } from '@fortawesome/free-regular-svg-icons'

const Blog = (props) => {
    const { blogCoverImg, AuthorImg, authorName, blogTitle, readTime, publishDate } = props.blog
    return (
        <div>
            <img className='h-80 w-full rounded-xl' src={blogCoverImg} alt="" />
            <div className='flex'>
                <img className='w-12 rounded-full mr-5' src={AuthorImg} alt="" />
                <div>
                    <p className='font-semibold'>{authorName}</p>
                    <p>{publishDate}</p>
                </div>
            </div>
            <div>
                <p>{readTime} min read</p>
                <button className='bg-white'><FontAwesomeIcon icon={faBookmark} /></button>
            </div>
        </div>
    );
};

export default Blog;