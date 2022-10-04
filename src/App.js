import React from "react";
import SobreMi from "./Components/SobreMi";
import Contacto from "./Components/Contacto";
import Tecnologias from "./Components/Tecnologias";
import Inicio from "./Components/Inicio";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <SobreMi />
      <Portfolio />
      <Tecnologias />
      <Contacto />
      <SocialLinks />
    </div>
  );
}

export default App;
