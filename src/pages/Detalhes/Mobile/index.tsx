/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import { getPokemonEspecific } from "../../../apiPokemon";
import { ImgPokemon } from "../../../components/C-Pokedex/ImgPokemon";
import { DetalhesSobre } from "../Desktop/DetalhesSobre";
import { DetalhesStats } from "../Desktop/DetalhesStats";
import { Container } from "./style";

export function DetalhesMobile() {
  const params = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    sprites: "a" as any,
    name: "a" as any,
    abilities: "a" as any,
    base_experience: "a" as any,
    height: "a" as any,
    weight: "a" as any,
    stats: "a" as any,
    types: [] as any,
    id: "a" as any,
  });
  const [page, setPage] = useState("Sobre");
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState<any>([]);
  const namePokemon = params.detalheName;

  const type = String(types[0]);

  // function trocarCor() {
  //   switch (pokemon.types[0].type.name) {
  //     case "grass":
  //       document.body.style.setProperty("--color-stats", "#77cc55");
  //       break;
  //     case "water":
  //       document.body.style.setProperty("--color-stats", "#35baff");
  //       break;
  //     case "bug":
  //       document.body.style.setProperty("--color-stats", "#aabb22");
  //       break;
  //     case "dark":
  //       document.body.style.setProperty("--color-stats", "#775544");
  //       break;
  //     case "dragon":
  //       document.body.style.setProperty("--color-stats", "#7766ee");
  //       break;
  //     case "electric":
  //       document.body.style.setProperty("--color-stats", "#ffcc33");
  //       break;
  //     case "fairy":
  //       document.body.style.setProperty("--color-stats", "#ee99ee");
  //       break;
  //     case "fighting":
  //       document.body.style.setProperty("--color-stats", "#bc6a5c");
  //       break;
  //     case "fire":
  //       document.body.style.setProperty("--color-stats", "#d93e30");
  //       break;
  //     case "flying":
  //       document.body.style.setProperty("--color-stats", "#5b73fb");
  //       break;
  //     case "ghost":
  //       document.body.style.setProperty("--color-stats", "#6666bb");
  //       break;
  //     case "ground":
  //       document.body.style.setProperty("--color-stats", "#ddbb55");
  //       break;
  //     case "ice":
  //       document.body.style.setProperty("--color-stats", "#00aaff");
  //       break;
  //     case "normal":
  //       document.body.style.setProperty("--color-stats", "#aa9");
  //       break;
  //     case "poison":
  //       document.body.style.setProperty("--color-stats", "#aa5599");
  //       break;
  //     case "psychic":
  //       document.body.style.setProperty("--color-stats", "#ff5959");
  //       break;
  //     case "rock":
  //       document.body.style.setProperty("--color-stats", "#bbaa66");
  //       break;
  //     case "steel":
  //       document.body.style.setProperty("--color-stats", "#aaaabb");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  function TypesPokemon(arrayTypes: any) {
    const typesPoke: any[] | ((prevState: never[]) => never[]) = [];
    arrayTypes.forEach((element: any) => {
      typesPoke.push(element.type.name);
    });
    setTypes(typesPoke);
  }

  // function abilityPokemon(arrayAbility: any) {
  //   const abilityPoke: any[] | ((prevState: never[]) => never[]) = [];
  //   arrayAbility.forEach((element: any) => {
  //     abilityPoke.push(element.ability.name);
  //   });
  //   setAbility(abilityPoke);
  // }

  // function bars() {
  //   const bars = document.querySelectorAll(".statsBars div");

  //   bars.forEach((element: any, index) => {
  //     element.style.width = `${pokemon.stats[index].base_stat}px`;
  //   });

  //   trocarCor();
  // }

  function getText(e: any) {
    const ul = e.parentNode.parentNode;
    const arrayButton = ul.children;
    for (let i = 0; i < arrayButton.length; i += 1) {
      arrayButton[i].children[0].style.borderBottom = "0";
    }
    e.style.borderBottom = "2px solid white";
    const textButton = e.textContent as string;
    setPage(textButton);
  }

  function returnImg() {
    console.log(pokemon);
    return (
      pokemon.sprites.other.home.front_default ||
      pokemon.sprites.other["official-artwork"].front_default ||
      pokemon.sprites.front_default ||
      pokemon.sprites.front_shiny
    );
  }

  function renderPage() {
    switch (page) {
      case "Sobre":
        return (
          <DetalhesSobre
            key={pokemon.name}
            abilities={pokemon.abilities}
            base_experience={pokemon.base_experience}
            height={pokemon.height}
            weight={pokemon.weight}
            types={types}
            colorBackground={type}
            name={pokemon.name}
            sprite={
              pokemon.sprites.other.home.front_default ||
              pokemon.sprites.other["official-artwork"].front_default ||
              pokemon.sprites.front_default ||
              pokemon.sprites.front_shiny
            }
          />
        );
      case "Stats":
        return (
          <DetalhesStats
            key={pokemon.name!}
            stats={pokemon.stats}
            colorBackground={type}
          />
        );
      default:
        break;
    }
  }

  useEffect(() => {
    getPokemonEspecific(namePokemon!).then((response) => {
      setPokemon(response);
      TypesPokemon(response.types);
      // abilityPokemon(response.abilities);
      setLoading(false);
    });
  }, []);

  return (
    <Container className={type}>
      <div className="wrapper">
        <div className="contImgPokemonMobile">
          <div className="contInfoPokemon">
            <button
              type="button"
              className="buttonBack"
              onClick={() => navigate(-1)}
            >
              <BsArrowLeft size={40} />
            </button>
            <h1>{namePokemon}</h1>
            <div>
              <p>#{pokemon.id}</p>
            </div>
          </div>
          {loading === false && (
            <ImgPokemon
              src={
                pokemon.sprites.other.home.front_default ||
                pokemon.sprites.other["official-artwork"].front_default ||
                pokemon.sprites.front_default ||
                pokemon.sprites.front_shiny
              }
              alt={pokemon.name}
              key={pokemon.name}
            />
          )}
        </div>

        <div className="contentInfoMobile">
          <div className="statsPokemonMobile">
            <nav className="navLinks">
              <ul>
                <li>
                  <button
                    type="button"
                    // className={`buttonNav textColorType ${colorBackground}`}
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
          <div className="divContent">
            <div className="divTypes">
              {types.map((type: any) => (
                <p className={type}>{type} </p>
              ))}
            </div>
            {loading === false && page && renderPage()}
          </div>
        </div>
      </div>
    </Container>
  );
}
