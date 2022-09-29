import React from 'react';

const Activity = ({activity, handleAddToList}) => {
    const {name, image, time} = activity;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" className='w-full h-52' /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p><span className='font-semibold'>Time required:</span> {time}s</p>
            <div className="card-actions justify-end">
            <button onClick={() => handleAddToList(activity)} className="bg-info py-2 text-white my-2 w-full rounded">Add to list</button>
            </div>
        </div>
        </div>
    );
};

export default Activity;