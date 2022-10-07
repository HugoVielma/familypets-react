
import { getDoc, doc } from "@firebase/firestore";
import React, {useState, useEffect}  from "react";
import { useParams } from "react-router";
import {db} from "../firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail"

 

 const ItemDetailContainer =() =>{
 
    const [productoDetail, setProductoDetail] =  useState({});
    const {itemId} = useParams();
    console.log(itemId)

    useEffect(()=>{
        const viewProducto = async()=>{
         try {
          const docRef = doc(db, "producto", itemId);
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()){
             console.log(docSnap.data())
             setProductoDetail({id: docSnap.id,...docSnap.data()});
          }else{
              console.log("no se encuentra")
          }
           }
    catch(err)
    {
        console.error(err);
    }    
    }
    viewProducto(); 
 },[itemId]);

return(
    <>

    <ItemDetail producto={productoDetail}/>
  
    </>
);
}

export default ItemDetailContainer

