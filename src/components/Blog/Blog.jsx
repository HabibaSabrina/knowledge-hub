import React from 'react';

const Blog = (props) => {
    const {blogCoverImg, AuthorImg, authorName, blogTitle, readTime, publishDate} = props.blog
    return (
        <div>
            <img src={blogCoverImg} alt="" />
            
        </div>
    );
};

export default Blog;