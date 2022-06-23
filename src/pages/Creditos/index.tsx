import React from "react";

import { Header } from "../../components/Header";
import { Footer } from "../Footer";
import { Container } from "./style";

export function Creditos() {
  return (
    <Container className="creditosPage">
      <Header />
      <main className="Creditos">
        <h1>Créditos</h1>
        <ul>
          <li>
            <p>API Pokemon:</p>
            <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
              https://pokeapi.co/
            </a>
          </li>
          <li>
            <p>Layout Pokedex:</p>
            <a
              href="https://www.figma.com/file/s3gzY9S8cCCecSRFhbezTz/Pokedex-(Community)?node-id=147%3A53049"
              target="_blank"
              rel="noreferrer"
            >
              https://www.figma.com/community/file/893705420616737018
            </a>{" "}
          </li>
          <li>
            <p> Icon Types:</p>
            <a
              href="https://www.figma.com/community/file/1118161968571947193"
              target="_blank"
              rel="noreferrer"
            >
              https://www.figma.com/community/file/1118161968571947193
            </a>{" "}
          </li>
        </ul>
      </main>

      <Footer />
    </Container>
  );
}
