import React from 'react';

const Header = () => {
    return (
        <div className=' border-b-2 border-slate-200'>
            <div className='flex justify-between items-center m-5'>
                <h3 className='font-bold text-2xl'>Knowledge Cafe</h3>
                <img className='w-12' src="/public/user.png" alt="" />
            </div>
        </div>
    );
};

export default Header;