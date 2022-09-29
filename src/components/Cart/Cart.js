import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart}) => {
    const [restTime, setRestTime] = useState(0);
    const [click, setClick] = useState(0);
    
    let time = 0;
    for(const activity of cart){
        time = time + activity.time;
    }

    const breakTime = [10,20,30,40,50];

    const handleBreakTime = (bt) =>{
        setClick(bt);
        setRestTime(bt);
        localStorage.setItem('time',bt);
    }

    useEffect(() => {
        const getTime = localStorage.getItem('time');
        if(getTime){
        setRestTime(getTime);
        setClick(parseInt(getTime));
        }
    },[restTime])

    const handleActivityCompleted = () => {
        toast("Congratulation for completed your activity.");
    }

    return (
        <div className='p-6 sticky top-0'>
            <div className='flex flex-col items-center'>
                <img src="https://avatars.githubusercontent.com/u/83613654?v=4" alt="" className='w-20 h-20 rounded-full' />
                <h1 className='font-semibold text-xl mt-2'>Md Mehedi Ahsan</h1>
                <div className='text-gray-500 flex items-center gap-1'><FontAwesomeIcon icon={faLocationDot} /><span>Bagerhat, Khulna</span></div>
            </div>
                <div className='flex gap-2 my-6 bg-gray-100 justify-evenly px-4 py-2 rounded'>
                    <div className='flex flex-col items-center'>
                        <p><span className='text-2xl font-bold'>64</span><span className='text-gray-500'>kg</span></p>
                        <p className='text-gray-600'>Weight</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p><span className='text-2xl font-bold'>5.6</span><span className='text-gray-500'>ft</span></p>
                        <p className='text-gray-600'>Height</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p><span className='text-2xl font-bold'>24</span><span className='text-gray-500'>yrs</span></p>
                        <p className='text-gray-600'>Age</p>
                    </div>
                </div>
                <div className='mb-10'>
                    <h1 className='font-semibold text-xl mb-4'>Add A Break</h1>
                    <div className='bg-gray-100 rounded px-2 py-3 flex justify-evenly gap-2'>
                    {
                        breakTime.map(bt => <button key={bt} onClick={() => handleBreakTime(bt)} className={`${bt===click? 'bg-accent text-white': 'text-black bg-white'} p-2 rounded-full font-semibold`}>{bt}s</button>)
                    }
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Exercise Details</h1>
                    <div className='bg-gray-100 p-3 flex justify-between rounded my-4'>
                        <span className='font-bold'>Exercise time</span> 
                        <span className='text-gray-500'>{time} seconds</span>
                    </div>
                    <div className='bg-gray-100 p-3 flex justify-between rounded'>
                        <span className='font-bold'>Break time</span> 
                        <span className='text-gray-500'>{restTime} seconds</span>
                    </div>
                </div>
                <div>
                    <button onClick={handleActivityCompleted} className='bg-accent py-2 text-white w-full my-10 rounded'>Activity Completed</button>
                    <ToastContainer />
                </div>
        </div>
    );
};

export default Cart;