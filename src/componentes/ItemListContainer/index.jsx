

import React from 'react';


import { useParams } from 'react-router-dom';

import ItemList from '../itemList/ItemList';
import useFirebase from '../../hooks/index';


const ItemListContainer = () => {
  const { especieid } = useParams();
  const [loading, productos , error] = useFirebase(especieid);
 return (
    //retorno las cards
    <>
    {loading ? 
      <h2>Cargando...</h2>
    :
    <ItemList products={productos}/> }
      {error && <h2>{error}</h2>} 
    </>
    
  )
};
export default ItemListContainer;