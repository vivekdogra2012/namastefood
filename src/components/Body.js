import RestraurantCard from './RestraurantCard';
import Shimmer from './shimmer'
import {useState, useEffect} from 'react';

function Body() {
    const [filteredList, setfilteredList] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [searchText, setsearchtext] = useState("");
    const [originalList, setOriginalList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        fetchData();
    }, []);

    let fetchData = async () => {
        setLoading(true);
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4997983&lng=77.1923685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            // console.log('Fetched Data:', json);
            // setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setOriginalList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredList(prevRestaurants => [...prevRestaurants, ...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    let toggleList = () => {
        setToggle(!toggle); 
        const filterList = filteredList.filter((res)=>res.info.avgRating > 4.1);
        if(toggle === true) {
            console.log("triggering Filtered List!!!!");
            setfilteredList(filterList);
        }else{
            console.log("triggering original List!!!!");
            setfilteredList(originalList);
        }
    }

    const handleScroll = () => {
        console.log("handle scroll working");
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        if (!loading) {
        // fetchData();
        }
    };

  return filteredList.length === 0 ? (
  <Shimmer />
    ) : (
        <div className='body'>

            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' placeholder='Search for restraurants here !' value={searchText} onChange={(e)=>{setsearchtext(e.target.value)}}></input>
                    <button onClick={()=>{
                        console.log(searchText)
                        const filteredRestraurants = originalList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        filteredRestraurants != [] ? setfilteredList(filteredRestraurants) : console.log(filteredRestraurants);
                    }}>search</button> 
                </div>
                <button 
                className='filter-btn' 
                onClick={toggleList}>Top Rated Restraurants</button>

            </div>
            <div className='res-container'>
                {
                    filteredList.map((elem)=>(
                        <RestraurantCard data={elem} key={elem.info.id + Math.random()}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body