import React from "react";
import { Link } from 'react-router-dom'


const Item = ({producto}) =>{
    return(
      
      <div className="col-sm mt-5 mb-5 ps-5">
          <div className="card">
              <img src={producto.imagen} className="card-img-top"  alt="img__card"/>
              <div className="card-body">
                <h5 className="card-title">
                {producto.title}
                </h5>
                <p className="card-text-50 descripcion">{producto.descripcion}</p>
                <p className="card-text">$ <span>{producto.precio}</span></p>
                <button className="btn btn-warning">Comprar</button>
                <Link to={`/producto/${producto.id}`}>
                <button className="btn btn-warning">Ver mas</button>
                </Link>
              </div>
            </div>
      </div>

    )
}
export default Item