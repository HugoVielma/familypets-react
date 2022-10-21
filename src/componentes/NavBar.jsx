import '../App.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import logo from "../image/Editable_Family_Pets2.png"
function NavBar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid color">
        <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/especie/perro">perro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/especie/gato">gato</Link>
            </li> 
            <li className="nav-item">
             <Link className="nav-link"  to="/cart"><CartWidget /></Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>);
}
export default NavBar