import React from 'react'
import "./ExploreMenu.css"

import menu_item1 from "../../assets/menu_1.png"
import menu_item2 from "../../assets/menu_2.png"
import menu_item3 from "../../assets/menu_3.png"
import menu_item4 from "../../assets/menu_4.png"
import menu_item5 from "../../assets/menu_5.png"
import menu_item6 from "../../assets/menu_6.png"
import menu_item7 from "../../assets/menu_7.png"
import menu_item8 from "../../assets/menu_8.png"

const mockData = [
    {
        name: "salad",
        image: menu_item1,
    },
    {
        name: "Rolls",
        image: menu_item2,
    },
    {
        name: "Desert",
        image:menu_item3 ,
    },
    {
        name: "Sandwich",
        image: menu_item4,
    },
    {
        name: "Cake",
        image: menu_item5,
    },
    {
        name: "Pure veg",
        image: menu_item6,
    },
    {
        name: "Pasta",
        image: menu_item7,
    },
    {
        name: "Noodles",
        image: menu_item8,
    }
];
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu </h1>
      <p className='explore-menu-text'>Choose from diserve menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience. One delicious meal at a time.</p>
     <div className='explore-menu-list'>
        {mockData.map((cartData, index)=>(
        <div onClick={()=>setCategory(prev=>prev===cartData.name?"All":cartData.name)} key={index} className='explore-menu-list-item'>
        <img className={category===cartData.name?"active":""} src={cartData.image} alt="" />
        <p>{cartData.name}</p>
        </div>
        ) )} 
    </div>
    <hr/>
     </div>
    
  )
}

export default ExploreMenu
