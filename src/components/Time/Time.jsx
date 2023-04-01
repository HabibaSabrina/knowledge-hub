import React, { useEffect, useState } from 'react';

const Time = ({time}) => {
    const [updateTime, setUpdateTime] = useState(time)

    useEffect(()=>{
        const timeFromLocal = localStorage.getItem("readTime")
        setUpdateTime(timeFromLocal)
    },[time])
    return (
        <div className='text-center bg-slate-200 text-indigo-700 p-5 mt-10 rounded-xl border-2 border-indigo-700'>
            <h4 className='text-xl font-bold'>Spent time on read : {updateTime ? updateTime : 0} min</h4>
        </div>
    );
};

export default Time;