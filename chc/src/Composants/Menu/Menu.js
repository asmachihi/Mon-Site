import "./Menu.scss";
import { Link } from "react-router-dom";
import logo from "../assets/chc.ico";

function Menu() {
  return (
    <div>
  
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
       
        <div className="frame">
          <a href="#" className="btn">
            <i className="fas fa-phone" style={{color: '#3b5998'}} />
            55251949
          </a>
          <a href="#" className="btn">
            <i className="fas fa-at" style={{color: '#00acee'}} />
            chihi_issam@yahoo.fr
          </a>
          <a href="#" >
            
          </a>
          <a href="#" className="btn">
            <i className="fas fa-user-circle" style={{color: '#0e76a8'}} />
            Connexion
          </a>
          <a href="#" className="btn">
            <i className="fas fa-user-plus" style={{color: '#ee4056'}} />
            Inscription
          </a>
        
        </div>
     
     
      <div>
          
        <p className="titre" data-item="Cleaning And Hygiene Compagny">
      
          Cleaning And Hygiene Compagny
        </p>
        <img src={logo} style={{
                width: "9%",
                height: "112%",
                marginTop: "0",
                boxShadow: "0 0 30px #032c55",
                borderRadius: "15px",
              }} />
        <section>
          
          <nav>
            <ul className="menuItems">
              <li>
                <Link to="/">
                  {" "}
                  <a href="#" data-item="Acceuil">
                    Acceuil
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  {" "}
                  <a href="#" data-item="Services">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/touslesproduits">
                  {" "}
                  <a href="#" data-item="Produits">
                    Produits
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {" "}
                  <a href="#" data-item="Contact">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" data-item="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Menu;
