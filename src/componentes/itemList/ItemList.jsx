

import React from "react"
import Item from "../item/Item"



const ItemList = ({products}) =>{
    return(
        <div className="row">
        <div className="col-12 col-lg-12 text-center container_card">
       
              {products.map(especieid =>{
                  return(
                      <Item producto={especieid} key={especieid.id}/>
                  )
              }) }
        </div>
      </div>
    )
}
export default ItemList