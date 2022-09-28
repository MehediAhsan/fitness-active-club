import React from 'react';

const Activity = ({activity}) => {
    const {name, image, time} = activity;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" className='w-full h-52' /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Time required: {time}s</p>
            <div className="card-actions justify-end">
            <button className="btn btn-info">Add to list</button>
            </div>
        </div>
        </div>
    );
};

export default Activity;