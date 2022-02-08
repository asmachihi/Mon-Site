import "./home_Admin.css";
import ban from '../../assets/banniere.png';

function Home_Admin() {
  return (
    <div className="home">
      <span className="contenu">
        <h1>
          <i class="fas fa-user-cog">
            {" "}
            Bienvenue dans votre espace d'administrateur
          </i>
        </h1>
        <br />
        <br />
        <p>
          Vous n'avez qu'à selectionné la rubrique que vous voulez modifier
          juste à gauche <br />
          Merci de votre visite.<i class="far fa-smile"></i>
        </p>
        <img src={ban} alt="img" width='100%' height='55%'/>
      </span>
    </div>
  );
}

export default Home_Admin;
