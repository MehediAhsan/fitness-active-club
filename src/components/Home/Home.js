import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

const Home = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    const handleAddToList = activity =>{
        setCart([...cart,activity]);
    }

    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-3 m-20'>
                <h1 className='font-bold text-info text-2xl'>UTRA-Active-club</h1>
                <p className='font-semibold text-xl mt-5'>Select today’s exercise</p>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {
                        activities.map(activity => <Activity activity={activity} key={activity.id} handleAddToList={handleAddToList}></Activity>)
                    }
                </div>
            </div>
            <div className='bg-white p-8'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;