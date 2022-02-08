import "./sideBar.css";
import {
  PermIdentity,
  Storefront,
  AttachMoney,
  ChatBubbleOutline
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitle">
            <i class="fas fa-store" >Administrateur</i>
          </h1>
          <ul className="sidebarList">
            <Link to="/clientAdmin" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Clients
              </li>
            </Link>
            <Link to="/produitsAdmin" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Produits
              </li>
            </Link>
            <Link to="/produitsAdmin" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Commandes
            </li>
            </Link>
            <Link to="/contactAdmin" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages des contacts
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
