import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'

import Item from '../Components/Item/Item'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>

      <div className="shopcategory-indexSort">
        <p>
          <span>แสดง 1-12</span> จากสินค้า 36 รายการ
        </p>
        
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      
    </div>
  )
}
 
export default ShopCategory
