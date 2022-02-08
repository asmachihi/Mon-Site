import "./Home.css";
import { Partenaires } from "../Partenaires/Partenaires";
import { CardService } from "../card-services/CardService";


export const Home = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-caption"></div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}
      {/* news */}
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb30">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* section-title */}
                <div className="section-title mb-0">
                  <p
                    className="titre"
                    data-item="Cleaning And Hygiene Compagny"
                    style={{fontSize:'37px',
                    fontSstyle: 'oblique',
                    marginBottom: '111px',
                    marginTop: -'77px'}}
                  >
                    Cleaning And Hygiene Compagny
                  </p>
                  <p>
                    Cleaning And Hygiene Compagny est une entreprise
                    distributrice de produits et matériels d’entretien pour
                    professionnels et particuliers. Que vous soyez une
                    collectivité, un syndic de propriété, une société de
                    nettoyage, un hôtelier-restaurateur ou un administrateur de
                    biens, nous prenons en charge vos demandes et vous
                    accompagnons de la sélection des produits à la livraison.
                    Nous permettons également aux particuliers d’avoir accès à
                    nos produits de qualité professionnelle, via notre boutique
                    en ligne.
                  </p>
                </div>
                {/* /.section-title */}
              </div>
            </div>
          </div>
          <div className="row">
            <CardService />
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="row">
            <Partenaires />
          </div>
        </div>
      </div>
    </div>
  );
};
