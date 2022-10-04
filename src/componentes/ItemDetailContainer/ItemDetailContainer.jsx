
import { getDoc } from "@firebase/firestore";
import React, {useState, useEffect}  from "react";
import { useParams } from "react-router";

import ItemDetail from "../ItemDetail/ItemDetail"
// import { getFirestore, doc, getDoc } from "@firebase/firestore";





// const viewProducto =(id)=>{
//     return new Promise((resolucion)=>{
//         setTimeout(() => { 
//            const productoAl = producto.find((producto)=>{
//                return parseInt(id) ===  producto.id;
//            })
//            resolucion(productoAl)
//         }, 1000);
//     });
// }

 

 const ItemDetailContainer =() =>{
 
    const [productoDetail, setProductoDetail] =  useState({});
    const {productoId} = useParams();
    console.log(productoId)

    useEffect(()=>{
        const viewProducto = async()=>{
         try {
          const docRef = doc(db, "producto", productoId);
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()){
             console.log(docSnap.data())
             setProductoDetail({id: docSnap.id,...docSnap.data()});
          }else{
              console.log("no se encuentra")
          }
           }
    }catch{console.error();}    
    }
    viewProducto(); 
 },[productoId]);
console.log(`productoDetail`,productoDetail);
return(
    <>

    <ItemDetail producto={productoDetail}/>
  
    </>
);
}

export default ItemDetailContainer

