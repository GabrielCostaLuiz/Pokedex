import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import background from "../../assets/img/homeDesktop.svg";
import backgroundMob from "../../assets/img/homeMobile.svg";
import { Footer } from "../../pages/Footer";
import { Container } from "./style";

export function HomeMain() {
  const [isMobile, setIsMobile] = React.useState(false);

  function isMobileOrDesktop() {
    const width = window.innerWidth;
    if (width <= 768) {
      setIsMobile(!isMobile);
    }
  }

  useEffect(() => {
    isMobileOrDesktop();
  }, []);
  return (
    <Container className="homeMain">
      <div className="containerText">
        <h1>
          <span>Encontre</span> todos os seus <span>Pokémons</span> favoritos
        </h1>
        <p>
          Você pode conhecer os tipos dos Pokémons, suas desvantagens e seus
          stats.
        </p>
        <Link to="/pokedex">Mostrar todos os pokemons</Link>
      </div>

      <div className="containerImg">
        <img src={isMobile ? backgroundMob : background} alt="" />
      </div>
    </Container>
  );
}
