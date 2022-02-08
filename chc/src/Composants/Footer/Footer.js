import React from "react";
import "./Footer.css";
import {AiFillPhone} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="card bg-white mx-5">
        <div className="row mb-4">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="footer-text pull-left">
              <div className="d-flex">
                <h1
                  className="font-weight-bold mr-2 px-3"
                  style={{ color: "white", backgroundColor: "#184e8e" }}
                >
                  {" "}
                  CHC{" "}
                </h1>
               
              </div>
              <p className="card-text">
                <p>16 Rue Sidi Ahmed Jlidi</p>
                <p>Cité Ettahrir Supérieure Tunis</p>
                <p>
                  <AiFillPhone />
                  Tél: +216 55 25 19 49
                </p>
              </p>
           
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2" />
          <div className="col-md-2 col-sm-2 col-xs-2">
            <h5 className="heading">Produits</h5>
            <ul>
              <li>Catégories</li>
              <li>Tous les produits</li>
             
            </ul>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <h5 className="heading">Services</h5>
            <ul className="card-text">
              <li>Se connecter</li>
              <li>S'inscrire</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <h5 className="heading">Contact</h5>
            <ul className="card-text">
              <li>Contactez-nous</li>
              
            </ul>
          </div>
        </div>
        <div className="divider mb-4"> </div>
        <div className="row" style={{ fontSize: "10px" }}>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-left">
              <p>
                <i className="fa fa-copyright" /> 2021- Tous droits reservés
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-right mr-4 d-flex policy">
              <div>Créer par Asma CHIHI</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
