import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import {ajout_contact} from '../../Redux/Actions/contactActions'
import "./Contact.css";

const Contact=()=> {
  const dispatch = useDispatch()
  const [contact,setContact] = useState({
    nom:"",
    email:"",
    nom_societe:"",
    num_tel:"",
    message:""
})

const handleChange=(e)=>{
  setContact({...contact,[e.target.name]:e.target.value})
}

  return (
    <div className="get-in-touch">
      <h1 className="title">CONTACTEZ-NOUS ET DÉCOUVREZ NOS PRODUITS </h1><br/>
      {/* <h2>Cleaning & Hygiene Compagny </h2>
      <h3>16 Rue Sidi Ahmed Jlidi</h3>
      <h3>Cité Ettahrir Supérieure Tunis</h3><br/><br/> */}
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            name="nom"
            id="name"
            className="input-text js-input"
            type="text"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="name">
            Nom
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
          name="email"
            id="email"
            className="input-text js-input"
            type="email"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="email">
            E-mail
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
          name="nom_societe"
            id="company"
            className="input-text js-input"
            type="text"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="company">
            Nom de la société
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
          name="num_tel"
            id="phone"
            className="input-text js-input"
            type="text"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="phone">
            Numéro de téléphone
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input
          name="message"
            id="message"
            className="input-text js-input"
            type="text"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="message">
            Messages
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="submit" defaultValue="Envoyer"
           onClick={()=>dispatch(ajout_contact(contact))} />
          <input className="submit-btn" type="reset" defaultValue="Annuler" />
        </div>
      </form>
      {/* <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map> */}
    </div>
  );
}

export default Contact

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAGAeuz6xhDQqH0Ayrcn2W_69KUwaDKCuw")
// })(Contact)