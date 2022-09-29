import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart}) => {
    const [restTime, setRestTime] = useState(0);
    
    let time = 0;
    for(const activity of cart){
        time = time + activity.time;
    }

    const breakTime = [10,20,30,40,50];

    const handleBreakTime = (bt) =>{
        setRestTime(bt);
        localStorage.setItem('time',bt);
    }

    useEffect(() => {
        const getTime = localStorage.getItem('time');
        if(getTime){
        setRestTime(getTime)
        }
    },[restTime])

    const handleActivityCompleted = () => {
        toast("Congratulation for completed all activity");
    }

    return (
        <div className='p-8'>
            <div className='flex flex-col text-center'>
                <h1 className='font-semibold text-xl'>Md Mehedi Ahsan</h1>
                <p className='text-gray-600'>Khulna, Bagerhat</p>
            </div>
                <div className='flex gap-2 my-6 bg-gray-100 justify-evenly px-4 py-2 rounded'>
                    <div className='flex flex-col items-center'>
                        <p><span className='text-2xl font-bold'>64</span><span className='text-gray-500'>kg</span></p>
                        <p className='text-gray-600'>Weight</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-2xl font-bold'>5.6</span>
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
                        breakTime.map(bt => <button onClick={() => handleBreakTime(bt)} className="bg-accent text-white p-2 rounded-full">{bt}s</button>)
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