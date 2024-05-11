import React, { useContext } from 'react'
import "./FoodItem.css"
import Add_icon from "../../assets/add_icon_white.png"
import Remove_icon from  "../../assets/remove_icon_red.png"
import rating_starts from "../../assets/rating_starts.png"
import Add_green_icon from "../../assets/add_icon_green.png"
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price, description, image}) => {

  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food_item'>
       <div className='food_item_img_container'>
        <img className='food_item_img'src={image} alt="" />
        {!cartItem[id]
          ?<img className='add'onClick={()=>addToCart(id)} src={Add_icon} alt="" />
          :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={Remove_icon} alt="" />
            <p>{cartItem[id]}</p>
            <img onClick={()=>addToCart(id)} src={Add_green_icon} alt="" />
          </div>
        }
       </div>
       <div className='food_item_info'>
       <div className='food_item_name_rating'>
       <p>{name}</p>
       <img src={rating_starts} alt="" />
       </div>
       <p className="food-item-desc">{description}</p>
       <p className="food-item-price">${price}</p>
    </div>
    </div>
    
  )
}

export default FoodItem
