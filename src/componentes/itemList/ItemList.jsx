

import React from "react"
import Item from "../item/Item"



const ItemList = ({products}) =>{
    return(
        <div className="row">
        <div className="col-12 col-sm-4 text-center d-flex">
       
              {products.map(item =>{
                  return(
                      <Item producto={item} key={item.id}/>
                  )
              }) }
        </div>
      </div>
    )
}
export default ItemList