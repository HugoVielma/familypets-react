import { createContext, useState } from "react";
import { useContext } from "react";




const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) =>{
    const [cart,setCart] = useState([]);

    // navbar
    
    const totalProductos = () => cart.reduce((acumulador, productoAct) => acumulador + productoAct.quantity, 0)

       const addToCart = (item, quantity) => {
         let nCart;
         let producto= cart.find(producto => producto.id === item.id);
         if(producto) {
             producto.quantity += quantity;
             nCart= [...cart];
         } else {
             producto= {...item, quantity: quantity};
             nCart =[...cart,producto];
         }
         setCart(nCart)

       }
        const clearCart = ()=>{
            setCart([])
        } 

        const removeFromCart = (id) => {
          const newCart = [...cart];
          const cartFilter = newCart.filter(item =>{
              return item.id !== id;
          });
          setCart(cartFilter);
        }
        const isInCart = (id) =>{
           return cart.some(itemCart => itemCart.id === id)
        }

   return (
        <CartContext.Provider value={{ cart,  addToCart , removeFromCart, clearCart, isInCart, totalProductos }}>
         {children}
        </CartContext.Provider>
    )
   }

export default useCartContext;


