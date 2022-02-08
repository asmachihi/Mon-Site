import "./Profil.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, update_client } from "../../Redux/Actions/clientActions";
import avatar from '../assets/avatar.jpg'



function Profil() {
  const user = useSelector((state) => state.clientReducers.client);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current);
  }, []);

  const [client, setClient] = useState({
    nom: user.nom ,
    prenom: user.prenom,
    num_tel: user.num_tel,
    email: user.email,
    motdepasse: user.motdepasse,
  });

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={avatar}
              alt="img" 
            />
            <span className="font-weight-bold">{user.nom}</span>
            <span className="font-weight-bold">{user.prenom}</span>
            <span className="text-black-50">{user.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Vous pouvez modifier vos informations</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Nom</label>
                <input
                  type="text"
                  name="nom"
                  className="form-control"
                  placeholder="nom"
                  defaultValue={user.nom}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  className="form-control"
                  defaultValue={user.prenom}
                  placeholder="prénom"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Numéro de téléphone</label>
                <input
                  type="text"
                  name="num_tel"
                  className="form-control"
                  label="Numéro de téléphone"
                  placeholder="Numéro de téléphone"
                  defaultValue={user.num_tel}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-12">
                <label className="labels">E-mail</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="e-mail"
                  defaultValue={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Mot de passe</label>
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="mot de passe"
                  defaultValue={user.motdepasse}
                  onChange={handleChange}
                />
              </div>
            </div>
           
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button"
              onClick={()=>dispatch(update_client(user._id,client))}>
                Enregister 
              </button>
              <button className="btn btn-primary profile-button" type="button"
              >
                Supprimer votre compte
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          
          
        </div>
      </div>
    </div>
  );
}

export default Profil;
