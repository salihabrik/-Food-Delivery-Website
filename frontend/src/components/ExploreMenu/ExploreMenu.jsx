import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Discover our most popular dishes</p>
        <div className='explore-menu-list'>
            {
                menu_list.map((item, index) =>{
                    return (
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="menu" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}



export default ExploreMenu
