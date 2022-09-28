import React from 'react';

const Cart = ({cart}) => {
    let time = 0;
    for(const activity of cart){
        time = time + activity.time;
    }
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
                <h1 className='font-semibold text-xl'>Add A Break</h1>
                <div>
                    <h1 className='font-semibold text-xl'>Exercise Details</h1>
                    <p>Exercise time: {time} seconds</p>
                </div>
        </div>
    );
};

export default Cart;