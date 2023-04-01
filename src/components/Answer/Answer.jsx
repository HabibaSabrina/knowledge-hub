import React from 'react';

const Answer = () => {
    return (
        <div className='leading-8 my-10'>
            <h2 className='text-center font-bold text-3xl mb-14'>Question & Answer</h2>
            <p className='text-xl font-semibold my-5'>1. Props vs state</p>
            <div className='grid grid-cols-2 gap-5 bg-slate-200 rounded-xl p-5'>
                <div className='bg-white p-5 rounded-xl'>
                    <p className='mb-2'>Props are use to send data from component to another component.</p>
                    <p>Props are read only means it can not be changed or modified.</p>
                </div>
                <div className='bg-white p-5 rounded-xl'>
                    <p className='mb-2'>State holds the information of components.</p>
                    <p>State must be changeable means the state value must be modified with each click.</p>
                </div>

            </div>
            <p className='text-xl font-semibold my-5'>2. How does useState work?</p>
            <div className=' bg-slate-200 rounded-xl p-5'>
                <p className='bg-white p-5 rounded-xl'>The <b>useState</b> declared as an array with two values one value is use to track the current state and other one is a function which is use to update the state. We also set an initial value in the useState later we update the value using the update function. <br></br>
                    The syntax of useState- <br></br>
                    <b>const [state, setState] = useState(0)</b>
                    <br></br>
                    Here, <b>state</b> is the current state and <b>setState</b> is the function to update the state and the <b>zero</b> in the <b>useState</b> is the initial value which can be a empty array or string as well.</p>
            </div>
            <p className='text-xl font-semibold my-5'>3. Purpose of useEffect other than fetching data.</p>
            <div className=' bg-slate-200 rounded-xl p-5'>
                <div className='bg-white p-5 rounded-xl'>
                    <p>The <b>useEffect</b> which helps to perform side effects in functional components such as the function which need to run after <b>updating the DOM</b>. It replaces some events by running a function whenever one or more variables change.</p>
                    <p><b>useEffect</b> takes two arguments- a function and an optional array. If the useEffect Hook is dependent on a variable means if the dependency variable updates, the effect will run again for that reason we don't need to reload the website.</p>
                    <p>We also can use <b>useEffect</b> as <b>timer</b> by using setTimeout() method inside the hook.</p>
                </div>
            </div>
            <p className='text-xl font-semibold my-5'>4. How Does React work?</p>
            <div className=' bg-slate-200 rounded-xl p-5'>
                <div className='bg-white p-5 rounded-xl'>
                    <p><b>React</b> maintains an internal <b>virtual DOM</b> which is a representation of actual DOM. When there is any update react compares the virtual copy of real DOM to an updated copy of Virtual DOM, compares or picks out the changes, and finally update the real DOM and this process is done by <b>Diff Algorithm</b>. React updates the minimal changes the actual DOM needed and that's how react works.</p>
                </div>
            </div>
        </div>
    );
};

export default Answer;