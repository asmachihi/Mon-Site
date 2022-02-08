import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduits from "../Produits-Card/CardProduits";
import { get_produits } from "../../Redux/Actions/produitActions";
import { Form , FormControl,Button} from "react-bootstrap";
import "./ListProduits.css";

export default function ListProduits() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_produits());
  }, []);

  const produit = useSelector((state) => state.produitReducers.produits);

  return (
    <>
      <p
        className="titre"
        data-item="Nos produits"
        style={{
          fontSize: "37px",
          fontSstyle: "oblique",
        //   marginBottom: "50px",
          marginTop: "89px",
        }}
      >
        Nos produits
      </p>{" "}
      <br />
      <Form className="recherche">
        <FormControl
          type="search"
          placeholder="Lancer votre recherche..."
          className="me-2"
          aria-label="Search"
          onChange={e=>(e.target.value)}
        />
        <Button variant="primary">Rechercher</Button>
      </Form>
      <div className="produitList">
        {
          produit.filter(product=>product.nom.toLowerCase()).map((product) => (
          <CardProduits product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
