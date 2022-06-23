import React from "react";

import { HomeMain } from "../../components/C-Home";
import { Header } from "../../components/Header";
import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <Header />
      <HomeMain />
    </Container>
  );
}
