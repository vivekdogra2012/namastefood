
import Shimmer from './shimmer'
import { useParams } from 'react-router-dom';
import useRestraurantMenu from '../utils/useRestraurantMenu';

const RestraurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestraurantMenu(resId);
    // console.log(resId);
    // console.log(resInfo);

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return(
    <div className='menu'>
        <h1 className=''>{name}</h1>
        <p className=''>{cuisines.join(', ')} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {
                itemCards.map((elem) => <li key={elem.card.info.id}>{elem.card.info.name} - ₹{elem.card.info.price/100 || elem.card.info.defaultPrice/100}</li>)
            }
        </ul>
    </div>
  )
}

export default RestraurantMenu