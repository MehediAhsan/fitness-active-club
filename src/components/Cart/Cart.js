import React, { useState } from 'react';

const Cart = ({cart}) => {
    const [restTime, setRestTime] = useState(0);
    console.log(restTime);
    let time = 0;
    for(const activity of cart){
        time = time + activity.time;
    }

    const breakTime = [10,20,30,40,50];

    return (
        <div>
            <div className='flex'>
                    <img src="" alt="" />
                    <h1 className='font-semibold text-xl'>Mehedi Ahsan</h1>
                </div>
                <div className='flex gap-2 my-3'>
                    <p>Weight</p>
                    <p>height</p>
                    <p>Age</p>
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Add A Break</h1>
                    {
                        breakTime.map(bt => <button onClick={() => setRestTime(bt)} className="bg-info text-white p-2 rounded-full mr-1">{bt}s</button>)
                    }
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Exercise Details</h1>
                    <p>Exercise time: {time} seconds</p>
                    <p>Break time: {restTime} seconds</p>
                </div>
        </div>
    );
};

export default Cart;