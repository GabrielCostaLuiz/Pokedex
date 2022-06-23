import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <p>
        Criado por <span>Gabriel Costa Luiz</span>{" "}
      </p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gabrielcostaluiz/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin /> Linkedin
          </a>{" "}
        </li>
        <li>|</li>
        <li>
          <a
            href="https://github.com/GabrielCostaLuiz"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> GitHub
          </a>{" "}
        </li>
      </ul>
    </Container>
  );
}
