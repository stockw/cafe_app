import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'
import MenuListItem from '../menu_list_item';
import './index.css'

const MenuList = () => {
    const { activeCat, items } = useContext(AppContext);
    console.log(items);

    // let itemSubset;
    //items.forEach((item) => {
      // if cat
      // itemSubset.push()
    //})

    let itemsJSX = items.map((item) => {
        // check if this item is the same as active category
        // if yes return JSX
        // if NO, return nothing
        // if ("Drinks" === "Drinks")
        if (item.category.name === activeCat) {
            return (
                <MenuListItem itemData={item} key={item._id}/>
            )
        }
    })

  return (
    <div className='MenuList'>{itemsJSX}</div>
  )
}

export default MenuList