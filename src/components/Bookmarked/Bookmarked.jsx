import React, { useEffect, useState } from 'react';

const Bookmarked = (props) => {
    const time = props.time
    const [updateTime, setUpdateTime] = useState(time)

    useEffect(()=>{
        const timeFromLocal = localStorage.getItem("readTime")
        setUpdateTime(timeFromLocal)
    },[time])
    return (
        <div>
            <div className='text-center bg-slate-200 text-indigo-700 p-5 mt-10 rounded-xl border-2 border-indigo-700'>
                <h4 className='text-xl font-bold'>Spent time on read : {updateTime} min</h4>
            </div>
        </div>
    );
};

export default Bookmarked;