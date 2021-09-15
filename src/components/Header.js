import React from "react";
import { authService } from "../firebase";
import { useHistory } from "react-router";

function Header({ userObj }) {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <div>
      <div onClick={onLogOutClick}>로그아웃</div>
    </div>
  );
}

export default Header;
