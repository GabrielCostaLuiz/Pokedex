import React from "react";
import { useNavigate } from "react-router-dom";

import error404 from "../../assets/img/teamRocket.svg";
import { Container } from "./style";

export function Error404() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <figure>
          <img src={error404} alt="" />

          <figcaption>404</figcaption>
        </figure>

        <h1>
          A equipe rocket <span>ganhou desta vez.</span>
        </h1>
        <button type="button" onClick={() => navigate(-1)}>
          Retornar
        </button>
      </div>
    </Container>
  );
}
