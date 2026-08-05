import { useState } from "react";
import IOS26 from "./pages/IOS26/IOS26.jsx";
import Ferrofluid from "./Backgrounds/Ferrofluid/Ferrofluid.jsx";

function App() {
  const [background, setBackground] = useState(false);

  return (
    <main className="App">
      {background ? (
        <Ferrofluid
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
        />
      ) : (
        ""
      )}
      <IOS26 background={background} setBackground={setBackground} />
      {/* <NavBar  /> */}
    </main>
  );
}

export default App;
