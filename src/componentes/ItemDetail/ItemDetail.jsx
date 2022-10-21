import React, { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import useCartContext from "../../CartContext";
import { Link } from "react-router-dom";

const ItemDetail =({producto})=>{
const [aCart, setaCart] = useState(false);

  const {addToCart} = useCartContext();
  const onAdd=(count)=>{
    setaCart(true)
    addToCart(producto, count)
    console.log("agregando al carrito", producto,count)
    
}
     
  return(
  
      <div className="container">
    <div className="row">
    <div className="col-12 col-sm-4 text-center d-flex container_card">
    <div className="card">
        <img src={producto.image} className="card-img-top"  alt="img__card"/>
        <div className="card-body">
          <h5 className="card-title">
          {producto.title}
          </h5>
          <p className="card-text-50 descripcion">{producto.descripcion}</p>
          <p className="card-text">$ <span>{producto.precio}</span></p>
          {aCart? 
           <Link to="/cart">Ver Carrito</Link>
         :
          <ItemCount onAdd={onAdd} initial={1} stock={producto.stock}/>
         }
        </div>
      </div>
    </div>
  </div>
</div>

  );

}
export default ItemDetail