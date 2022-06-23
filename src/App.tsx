import { BrowserRouter } from "react-router-dom";

import { RoutesPath } from "./Routes";

export function App() {
  return (
    <BrowserRouter>
      <RoutesPath />
    </BrowserRouter>
  );
}
