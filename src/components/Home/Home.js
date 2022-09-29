import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

const Home = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    const handleAddToList = activity =>{
        setCart([...cart,activity]);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3 m-20'>
                <h1 className='font-bold text-accent text-2xl'><FontAwesomeIcon icon={faDumbbell} /> FITNESS-CLUB</h1>
                <p className='font-semibold text-xl my-6'>Select today’s exercise</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        activities.map(activity => <Activity activity={activity} key={activity.id} handleAddToList={handleAddToList}></Activity>)
                    }
                </div>
            </div>
            <div className='bg-white'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;