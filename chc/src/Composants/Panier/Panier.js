import { useEffect, useState } from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  moins,
  plus,
  removeFromCart,
} from "../../Redux/Actions/produitActions";
import "./Panier.css";

export const Panier = () => {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.produitReducers.paniers);
  const quantite = useSelector((state) => state.produitReducers.quantite);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(panier.reduce((qty, item) => Number(item.qty) + qty, 0));
  }, [panier]);

  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  // };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {panier.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <img
                    src={prod.image}
                    alt={prod.nom}
                    fluid
                    rounded
                    className="imgPanier"
                  />
                </Col>
                <Col md={2}>
                  <span>{prod.nom}</span>
                </Col>
                <Col md={2}> {prod.prix} Dt</Col>

                <Col md={2}>
                  <Button className="btnplus" onClick={() => dispatch(plus(1))}>
                    {" "}
                    +
                  </Button>
                  <span>{quantite}</span>
                  <Button
                    className="btnmoins"
                    onClick={() => dispatch(moins())}
                  >
                    {" "}
                    -
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => dispatch(removeFromCart(prod.id))}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">
          Vous avez selectionné {panier.length} produits{" "}
        </span>
        <br />
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total d'achats: {total} Dt
        </span>
        <br />
        <Button type="button">Valider votre commande</Button>
      </div>
    </div>
  );
};
