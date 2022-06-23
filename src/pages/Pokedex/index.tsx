import React from "react";

import { PokedexList } from "../../components/C-Pokedex/AllPokemons";
import { Header } from "../../components/Header";
import { Container } from "./style";

export function Pokedex() {
  return (
    <Container className="pokedex">
      <Header />
      <PokedexList />
    </Container>
  );
}
