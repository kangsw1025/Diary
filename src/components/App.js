import React, { useEffect, useState } from "react";
import Router from "./Router";
import { authService } from "../firebase";
import Calendar from "./Calendar";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserobj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserobj(user);
      } else {
        setUserobj(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Router isLogin={userObj} userObj={userObj} />
      ) : (
        <div>Initializing...</div>
      )}
    </>
    //<Calendar />
  );
}

export default App;
