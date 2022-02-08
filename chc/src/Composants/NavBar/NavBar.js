import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import "./Menu.scss";
import { Link } from "react-router-dom";
import logo from "../assets/chc.ico";
import { logout } from "../../Redux/Actions/clientActions";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Button,
  Dropdown,
  Badge
} from "react-bootstrap";

export const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.clientReducers.isAuth);
  const panier = useSelector((state) => state.produitReducers.paniers);

  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        rel="stylesheet"
      />
      <div className="frame">
        <span className="btn">
          <i
            className="fas fa-phone"
            style={{ color: "#3b5998", fontSize: "20px" }}
          />
          55251949
      </span>
        <span className="btn">
          <i
            className="fas fa-at"
            style={{ color: "#00acee", fontSize: "20px" }}
          />
          chihi_issam@yahoo.fr
        </span>
        {isAuth ? (
          <Dropdown>
            <Dropdown.Toggle variant="Primary">
              <FaShoppingCart  fontSize="25px" />
              <Badge>{panier.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: "270px", position: "absolute" }}>
              {panier.length > 0 ? (
                <>
                  {panier.map((prod) => (
                    <span className="cartitem" key={prod._id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.nom}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.nom}</span>
                        <span>{prod.prix} Dt</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  ))}
                  <Link to="/panier">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Aller au panier
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 30 }}>Votre panier est vide!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Dropdown>
            <Dropdown.Toggle variant="Primary">
              <FaShoppingCart  fontSize="25px" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              Connexion OU Inscription
              <Button
                style={{
                  width: "93%",
                  margin: "0 10px",
                  backgroundColor: "ButtonHighlight",
                }}
              >
                <Link to="/seconnecter">Connexion</Link>
              </Button>
              <Button
                style={{
                  width: "93%",
                  margin: "0 10px",
                  backgroundColor: "ButtonHighlight",
                }}
              >
                <Link to="/inscription">Inscription</Link>
              </Button>
            </Dropdown.Menu>
          </Dropdown>
        )}

        {isAuth ? (
          <span>
            <Link id="RouterNavLink" to="/" onClick={() => dispatch(logout())}>
              <span className="btn">
                <i
                  className="fas fa-window-close"
                  style={{ color: "#0e76a8", fontSize: "20px" }}
                />
                Quitter
              </span>
            </Link>
            <Link id="RouterNavLink" to="/profil">
              <span className="btn">
                <i
                  className="far fa-id-badge"
                  style={{ color: "#ee4056", fontSize: "20px" }}
                />
                Compte
              </span>
            </Link>
          </span>
        ) : (
          <div className="nav-list">
            <span className="navbar-text">
              <Link to="/seconnecter">
                <span className="btn">
                  <i
                    className="fas fa-user-circle"
                    style={{ color: "#0e76a8", fontSize: "20px" }}
                  />
                  Connexion
                </span>
              </Link>
              <Link to="/inscription">
                <span className="btn">
                  <i
                    className="fas fa-user-plus"
                    style={{ color: "#ee4056", fontSize: "20px" }}
                  />
                  Inscription
                </span>
              </Link>
            </span>
          </div>
        )}
      </div>
      <div className="header-dark">
        <nav className="navbar">
          <ul className="menuItems">
            <li>
              <img
                src={logo}
                style={{
                  width: "220%",
                  height: "150%",
                  marginTop: "0",
                  boxShadow: "0 0 30px #032c55",
                  borderRadius: "15px",
                }}
              />
            </li>
            <li>
              <Link to="/">
                {" "}
                <a data-item="Acceuil">
                  Acceuil
                </a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                {" "}
                <a data-item="Services">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link to="/touslesproduits">
                {" "}
                <a  data-item="Produits">
                  Produits
                </a>
              </Link>
            </li>
            <li>
              <Link to="/catégories">
                {" "}
                <a  data-item="Catégories">
                  Catégories
                </a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a  data-item="Contact">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
