import React from "react";
import { authService } from "../firebase";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <div className="logoutBtn" onClick={onLogOutClick}>
      <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: "5px" }} />
    </div>
  );
}

export default Header;
