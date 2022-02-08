import Home_Admin from "./Home-Admin/Home_Admin";
import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./admin.css";
import Produits from "./Produits/Produits";
import ContactAdmin from "./Contact/ContactAdmin";
import Client from "./Client/Client";
import AjoutProduit from "./Produits/AjoutProduit";

function Admin() {
  return (
    <div className="Admin">
        <Router>
      <SideBar />
      <switch>
        <Route path="/Administrateur">
          <Home_Admin />
        </Route>
        <Route path="/produitsAdmin">
        <Produits/> 
        </Route>
        <Route path="/contactAdmin">
        <ContactAdmin/> 
        </Route>
        <Route path="/clientAdmin">
        <Client/> 
        </Route>
        <Route path="/AjoutProduit">
          <AjoutProduit/>
        </Route>
      </switch>
      </Router>

     
    </div>
  );
}

export default Admin;
