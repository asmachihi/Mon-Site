import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ajout_produit } from "../../../Redux/Actions/produitActions";
import "./ajoutproduit.css";


export default function AjoutProduit() {
  const [prod, setProd] = useState({
    nom: "",
    image: "",
    prix: "",
    categorie: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (nom) => (e) => {
    const value = nom === "image" ? e.target.file[0] : e.target.value;
    setProd({ ...prod, [nom]: value });
  };

  const handleADD = async () => {
    try {
      let formData = new FormData();
      formData.append("image", prod.image);
      formData.append("image", prod.nom);
      formData.append("image", prod.prix);
      formData.append("image", prod.categorie);

      // dispatch(ajout_produit(prod, history));
      if (res.ok) {
        setProd({ nom: "", image: "", prix: "", categorie: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Produit</h1>
      <form className="addProductForm" onSubmit={handleADD}>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            name="image"
            value={prod.image}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Nom</label>
          <input
            type="text"
            placeholder="nom du produit"
            name="nom"
            value={prod.nom}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Prix</label>
          <input
            type="text"
            placeholder="prix"
            name="prix"
            value={prod.prix}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Catégories</label>
          <select
            id="active"
            name="categorie"
            value={prod.categorie}
            onChange={handleChange}
          >
            <option value="Essuyage et Jetable">Essuyage et Jetable</option>
            <option value="Protection Personel">Protection Personel</option>
            <option value="Hygiene des Sols et Vaiselles">
              Hygiene des Sols et Vaiselles
            </option>
            <option value="Hygiene Feminine">Hygiene Feminine</option>
            <option value="Hygiene des Sanitaires">
              Hygiene des Sanitaires
            </option>
            <option value="Hygiene du Linges">Hygiene du Linges</option>
            <option value="Hygiene du Bébé">Hygiene du Bébé</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleADD}>
          Ajouter
        </button>
      </form>
    </div>
  );
}
