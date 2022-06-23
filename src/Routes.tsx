import React from "react";
import { Route, Routes } from "react-router-dom";

import { Error404 } from "./pages/404";
import { DetalhesMobile } from "./pages/Detalhes/Mobile";
import { Home } from "./pages/Home";
import { Pokedex } from "./pages/Pokedex";
import { Creditos } from "./pages/Creditos";

export function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/detalhes/:detalheName" element={<DetalhesMobile />} />
      <Route path="/creditos" element={<Creditos />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
