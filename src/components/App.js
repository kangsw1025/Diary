import React, { useEffect, useState } from "react";
import Router from "./Router";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  return <>{init ? <Router /> : <div>Initializing...</div>}</>;
}

export default App;
