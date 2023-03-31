import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';


const Blogs = () => {
    let markedBlog =[]
    const [time, setTime] = useState(0)
    const [bookmarked, setBookmarked] = useState([])
    const handleReadTime = (readTime) =>{
        const prevReadTime = JSON.parse(localStorage.getItem("readTime"))
        if(prevReadTime){
            const totalTime = prevReadTime + readTime
            localStorage.setItem("readTime",totalTime)
            setTime(totalTime)

        }
        else{
            localStorage.setItem("readTime",readTime)
            setTime(readTime)

        }
    }
    const handleBookmark = (marked) =>{
        const newMarked = [...bookmarked, marked]
        setBookmarked(newMarked)
    }
    
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div  className='grid grid-cols-3 gap-10'>
            <div className='col-span-2'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blog>)
                }
            </div>
            <Bookmarked bookmarked={bookmarked} time={time}></Bookmarked>
        </div>
    );
};

export default Blogs;