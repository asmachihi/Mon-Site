import React from "react";
import "./CardService.css";
import promo from '../assets/promotion-cadeaux.png';
import service from '../assets/service-client.png'
import qualite from '../assets/qualite-garantie.png'
import livraison from '../assets/livraison-gratuite.png'

export const CardService = () => {
  return (
    <div>
   
    <div className="row1-container">
      <div className="box box-down cyan">
        <h2>PROMOTIONS & CADEAUX</h2>
        <p>Des promotions et des cadeaux toute l’année.</p>
        <img src={promo} style={{width:'50%',height:'50%'}} alt="" />
      </div>
      <div className="box red">
        <h2>SERVICE CLIENT</h2>
        <p>De 8h30 à 18h du Lundi au Vendredi.</p>
        <img src={service} style={{width:'50%',height:'50%'}} alt="" />
      </div>
      <div className="box box-down blue">
        <h2>QUALITÉ GARANTIE</h2>
        <p>Produits de qualité, livraison toujours dans les délais.</p>
        <img src={qualite} style={{width:'50%',height:'50%'}} alt="" />
      </div>
    </div>
    <div className="row2-container">
      <div className="box orange">
        <h2>LIVRAISON GRATUITE</h2>
        <p>A partir de 100,00 Dt d’achat.</p>
        <img src={livraison} style={{width:'50%',height:'50%'}} alt="" />
      </div>
    </div>
  </div>
  );
};
