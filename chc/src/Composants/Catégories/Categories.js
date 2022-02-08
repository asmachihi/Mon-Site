import React from "react";
import { Button } from "react-bootstrap";
import feminin from "../assets/nana.png";
import ej from "../assets/ej.jpg";
import protection from "../assets/bavette.jpg";
import multiusage from "../assets/sol.jpg";
import linge from "../assets/linges.jpg";
import sanitaire from "../assets/san.jpg";
import bebe from "../assets/bebe.jpg";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = ({}) => {
  return (
    <>
     <p
                    className="titre"
                    data-item="Les catégories de nos produits"
                    style={{fontSize:'37px',
                    fontSstyle: 'oblique',
                    marginBottom: '80px',
                    marginTop: '89px'}}
                  >
                   Les catégories de nos produits
                  </p>
    
      <ul className="cards"> 
     
        <li>
          <div className="card">
            <img src={ej} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title">Essuyage et Jetable</h3>
                </div>
              </div>
              <p className="card__description">
              Distributeur Essuie-mains rouleaux-autocut.
              Distributeur de papier toilette en rouleau plastique blanc.
              </p>
              <Link id="RouterNavLink" to="/essuyageetjetable">
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <img src={protection} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title">Protection Personel</h3>
                </div>
              </div>
              <p className="card__description">
               Protégez vous contre tous les virus non seulement le CORONA 
              </p>
              <Link id="RouterNavLink" to="/protectionpersonel">
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <img src={multiusage} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title">Hygiene des Sols et Vaiselles</h3>
                </div>
              </div>
              <p className="card__description">
                {" "}
                Découvrez les produits de nettoyage sols et surfaces chez CHC
              </p>
              <Link id="RouterNavLink" to="/hygienedessols">
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <img src={linge} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title">Hygiene du Linges</h3>
                </div>
              </div>
              <p className="card__description">
               Découvez les meilleurs produits pour vos linges
              </p>
              <Link id="RouterNavLink" to="/hygienedulinges">
                {" "}
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <img src={sanitaire} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title">Hygiene des Sanitaires</h3>
                </div>
              </div>
              <p className="card__description">
                Pour un confort optimal à la maison, l'hygiène des sanitaires
                est très importante..
              </p>
              <Link id="RouterNavLink" to="/hygienedessanitaires">
                {" "}
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <img src={feminin} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Hygiene Feminine</h3>
                </div>
              </div>
              <p className="card__description">
                Soins et hygiène féminine : Soins Personnels. Découvrez la
                variété de produits ainsi que les prix.
              </p>
              <Link id="RouterNavLink" to="/hygienefemenine">
                {" "}
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={bebe} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title">Hygiene du Bébé</h3>
                </div>
              </div>
              <p className="card__description">
                Nous proposons tout ce qui concerne l'hygiéne de votre bébé :Couches, lingettes, Shampoing , ....
              </p>
              <Link id="RouterNavLink" to="/hygienedubebe">
                {" "}
                <Button className="button" variant="primary">
                  Découvrir
                </Button>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Categories;
