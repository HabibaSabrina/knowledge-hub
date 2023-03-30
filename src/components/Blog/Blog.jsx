import React from 'react';

const Blog = (props) => {
    const {blogCoverImg, AuthorImg, authorName, blogTitle, readTime, publishDate} = props.blog
    return (
        <div>
            <img className='h-80 w-full rounded-xl' src={blogCoverImg} alt="" />
        </div>
    );
};

export default Blog;