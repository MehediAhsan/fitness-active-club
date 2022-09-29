import React from 'react';

const Activity = ({activity, handleAddToList}) => {
    const {name, image, time, age} = activity;
    return (
        <div className="card card-compact max-w-xs mx-auto w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" className='w-full h-44' /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold">{name}</h2>
            <p className='font-semibold text-base'><span>For Age:</span> {age}</p>
            <p className='font-semibold text-base'><span>Time required:</span> <span className='font-bold'>{time}s</span></p>
            <div className="card-actions justify-end">
            <button onClick={() => handleAddToList(activity)} className="bg-accent py-2 text-white my-2 w-full rounded font-semibold">Add to list</button>
            </div>
        </div>
        </div>
    );
};

export default Activity;