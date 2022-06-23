import React, { useState } from "react";

import { DetalhesSobre } from "../DetalhesSobre";
import { DetalhesStats } from "../DetalhesStats";
import { Container } from "./style";

interface IProps {
  detailsOnOff: any;
  id: number;
  name: string;
  colorBackground: string;
  abilities: [];
  base_experience: number;
  height: number;
  weight: number;
  stats: [];
  types: string;
  sprite: string;
}
export function DetalhesDesktop({
  detailsOnOff,
  id,
  name,
  colorBackground,
  abilities,
  base_experience,
  height,
  weight,
  stats,
  types,
  sprite,
}: IProps) {
  const [page, setPage] = useState("Sobre");
  function rotateCard(e: HTMLElement) {
    const article = e.parentNode?.parentNode?.parentNode
      ?.parentNode as HTMLElement;
    article.classList.add("closeDetails");
    setTimeout(() => {
      detailsOnOff(false);
      article.classList.remove("closeDetails");
    }, 1300);
  }

  function getText(e: any) {
    const ul = e.parentNode.parentNode;
    const arrayButton = ul.children;
    for (let i = 0; i < arrayButton.length; i += 1) {
      arrayButton[i].children[0].classList.remove(
        "textColorType",
        `${colorBackground}`
      );
    }
    e.classList.add("textColorType", `${colorBackground}`);
    const textButton = e.textContent as string;
    setPage(textButton);
  }

  function renderPage() {
    switch (page) {
      case "Sobre":
        return (
          <DetalhesSobre
            key={name}
            abilities={abilities}
            base_experience={base_experience}
            height={height}
            weight={weight}
            types={types}
            colorBackground={colorBackground}
            name={name}
            sprite={sprite}
          />
        );
      case "Stats":
        return (
          <DetalhesStats
            key={name}
            stats={stats}
            colorBackground={colorBackground}
          />
        );
      default:
        break;
    }
  }

  return (
    <Container className={colorBackground}>
      <div>
        <header>
          <div>
            <p>#{id}</p>
            <h3>{name}</h3>
          </div>
          <div>
            <button type="button" onClick={(e: any) => rotateCard(e.target)}>
              X
            </button>
          </div>
        </header>
        <nav className="navLinks">
          <ul>
            <li>
              <button
                type="button"
                className={`buttonNav textColorType ${colorBackground}`}
                onClick={(e) => getText(e.target)}
              >
                Sobre
              </button>
            </li>
            <li>
              <button type="button" onClick={(e) => getText(e.target)}>
                Stats
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div>{page && renderPage()}</div>
    </Container>
  );
}
