import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/produitActions";
import "./CardProduits.scss";
import {Button} from "react-bootstrap";


const CardProduits = ({ product }) => {
  const dispatch = useDispatch();
 
 
 
  const addToCartHandler = () =>{
   dispatch(addToCart(product._id))
  }
  return (
    <>
    
    <div>
      <figure className="image-block">
        <img src={product.image} alt="" />
        <figcaption>
          <h3>{product.nom}</h3>
          <p>{product.prix}Dt</p>
          <Button className="button" variant="primary"  onClick={addToCartHandler}>Ajouter au panier</Button>
        </figcaption>
      </figure>
    </div>
    </>
  );
};

export default CardProduits;
