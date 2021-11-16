import React from "react";
import { authService } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Header({ todoDate }) {
  const onLogOutClick = () => {
    var result = window.confirm("Are you really want to Logout?");
    if (result) {
      authService.signOut();
    }
  };

  return (
    <div className="header">
      <div className="left-space" onClick={onLogOutClick}></div>
      <div className="right-space">
        <div className="click-Date">
          {JSON.stringify(todoDate.clone().add("h", 9)).slice(1, 11)}
        </div>
        <div className="logoutBtn" onClick={onLogOutClick}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
