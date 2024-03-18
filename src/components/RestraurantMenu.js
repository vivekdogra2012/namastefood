import {React, useEffect, useState} from 'react';
import Shimmer from './shimmer'

const RestraurantMenu = () => {
  
    const [resInfo, setResinfo]= useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4997983&lng=77.1923685&restaurantId=11642&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        console.log(json);
    };

    if(resInfo === null){
        return <Shimmer />
    }
    
  return (
    <div className='menu'>
        <h1 className=''>Name of the Restraurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestraurantMenu