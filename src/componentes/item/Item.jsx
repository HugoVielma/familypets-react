import React from "react";
import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({producto}) =>{
    return(
      
      <div className="col-12 col-sm-4 mt-5 mb-5 ps-5 container_card">
          <div className="card">
              <img src={producto.image} className="card-img-top"  alt="img__card"/>
              <div className="card-body">
                <h5 className="card-title">
                {producto.title}
                </h5>
                <p className="card-text-50 descripcion">{producto.descripcion}</p>
                <p className="card-text">$ <span>{producto.precio}</span></p>
                <Link to={`/producto/${producto.id}`}>
                <button className="btn btn-warning">Comprar</button>
                </Link>
                <Link to={`/producto/${producto.id}`}>
                <button className="btn btn-warning">Ver mas</button>
                </Link>
              </div>
            </div>
      </div>

      

    )
}
export default Item