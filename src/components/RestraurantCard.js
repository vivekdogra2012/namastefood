import {CDN_URL} from '../utils/constants'

function RestraurantCard({data}) {
    // console.log(data)
   const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = data?.info
  return (

    <div className="card">
      <div className="shimmerBG media">
        <img className='res-logo' alt={name} src={CDN_URL+cloudinaryImageId} />
      </div>
      <div className="p-32">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  )
}

export default RestraurantCard