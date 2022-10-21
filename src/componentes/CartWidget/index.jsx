import React from "react";
import IconoCarrito from "../../image/icono-cart.png";
import useCartContext from "../../CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {totalProductos} = useCartContext();
    return (
    <>
         <Link className="nav-link" to="/cart"><p className="cantidad"><span>{totalProductos() || "" }</span></p><img src={IconoCarrito} className="carritoNavbar" alt="icono"></img></Link>
    </>
    );
}
export default CartWidget
