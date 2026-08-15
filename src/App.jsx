import { useState } from "react";
import IOS26 from "./pages/IOS26/IOS26.jsx";
import getBackground from "./Backgrounds/backgrounds.jsx";

function App() {
  const [background, setBackground] = useState(true);
  const [backgroundName, setBackgroundName] = useState(
    localStorage.getItem("background") || "Ferrofluid",
  );

  return (
    <main className="App">
      {background ? (
        <div className="background">{getBackground(backgroundName)}</div>
      ) : (
        ""
      )}
      <IOS26
        setBackgroundName={setBackgroundName}
        background={background}
        setBackground={setBackground}
      />
      {/* <NavBar  /> */}
    </main>
  );
}

export default App;
