import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';

const Blogs = () => {
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
        const alreadyMarked = bookmarked.find(click => click.id === marked.id)
        if(alreadyMarked){
            toast("The blog is already bookmarked")
        }
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
        <div  className='md:grid md:grid-cols-3 md:gap-10'>
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