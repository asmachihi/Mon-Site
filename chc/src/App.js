import { Route, Switch } from "react-router";
import { useMediaQuery } from "react-responsive";
import Categories from "./Composants/Catégories/Categories";
import Contact from "./Composants/Contact/Contact";
import { Footer } from "./Composants/Footer/Footer";
import { Home } from "./Composants/Home/Home";
import Inscri from "./Composants/Inscription/Inscri.tsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./Composants/Login/Login.tsx";
import { current } from "./Redux/Actions/clientActions";
import { Partenaires } from "./Composants/Partenaires/Partenaires";
import ListProduits from "./Composants/Produits-Listes/ListProduits";
import Profil from "./Composants/Profil/Profil";
import { Services } from "./Composants/Services/Services";
import PrivateRoute from "./Route/PrivateRoute";
// import Errors from "./Composants/Errors";
import { NavBar } from "./Composants/NavBar/NavBar";
import { Panier } from "./Composants/Panier/Panier";
import Admin from "./Composants/Admin/Admin.jsx";
import Produits from "./Composants/Admin/Produits/Produits";
import ContactAdmin from "./Composants/Admin/Contact/ContactAdmin";
import Client from "./Composants/Admin/Client/Client";
import AjoutProduit from "./Composants/Admin/Produits/AjoutProduit";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current);
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/partenaires" component={Partenaires} />
        <Route path="/contact" component={Contact} />
        <Route path="/catégories" component={Categories} />
        <Route path="/seconnecter" component={Login} />
        <Route path="/inscription" component={Inscri} />
        <Route path="/footer" component={Footer} />
        <Route path="/touslesproduits" component={ListProduits} />
        <PrivateRoute path="/profil" component={Profil} />
        {/* <Route path='/*' component={Errors} /> */}
        <Route path="/panier" component={Panier} />
        <Route path="/Administrateur" component={Admin} />
        <Route path="/produitsAdmin" component={Produits} />
        <Route path="/contactAdmin" component={ContactAdmin} />
        <Route path="/clientAdmin" component={Client} />
        <Route path="/AjoutProduit" component={AjoutProduit} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
