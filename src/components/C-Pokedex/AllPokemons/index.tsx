/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

import {
  allTypes,
  filterPokemon,
  getNextPokemons,
  getPokemon,
  getPokemonEspecific,
  getPokemons,
  maxPokemons,
} from "../../../apiPokemon";
import pikachuX from "../../../assets/img/pikachuX.svg";
import CardsPokemons from "../CardsPokemons";
import { Container } from "./style";

interface IPokemons {
  name: string;
  url: string;
  pokemon: string;
}

interface ITypes {
  name: string;
}

export function PokedexList() {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [pokemon, setPokemon] = useState<any>("");
  const [loadingPokemon, setLoadingPokemon] = useState(true);
  const [nextPokemonsPage, setNextPokemonsPage] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [allTypesList, setAllTypesList] = useState<ITypes[]>([]);
  const [filterOnOff, setFilterOnOff] = useState(false);
  const [lengthFilterPokemon, setLengthFilterPokemon] = useState(0);
  const max = Math.round(allPokemons.length / 20 + 1);
  const tags = {
    footerDiv: document.querySelector(".footerBottom .divShowHidden"),
    footerTop: document.querySelector(".footerTop"),
    inputs: document.querySelectorAll(".inputsRadio"),
    divButton: document.querySelector(".divButton"),
    details: document.querySelector("details"),
    input: document.getElementById("procurarPokemon"),
    labelsRadios: document.querySelectorAll(".labelRadio"),
    buttonEmptyFilter: document.querySelector(".emptyFilter"),
  };
  const largura = window.screen.width;

  async function getAndListPokemons() {
    getPokemons().then(async (response) => {
      setPokemons(response);
      setLoadingPokemon(true);
      setAllPokemons(await maxPokemons());
    });
    setPage(1);
    setNextPokemonsPage(0);
  }

  function getAndListTypes() {
    allTypes().then((response) => {
      setAllTypesList(response);
    });
  }

  async function listSearchPoke(pokemon: string) {
    getPokemonEspecific(pokemon).then((response) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${response.name}`;
      setPokemon(url);
      setLoadingPokemon(false);
      tags.input!.addEventListener("keyup", (e) => {
        if (e.key === "Backspace") {
          getAndListPokemons();
          setFilterOnOff(false);
        }
      });
    });
  }

  function searchPoke(e: string) {
    if (e === "") {
      return setLoadingPokemon(true);
    }
    return listSearchPoke(e.toLowerCase());
  }

  function nextPokemons() {
    let next = nextPokemonsPage + 20;
    if (next > allPokemons.length) {
      next -= 20;
    } else if (page < max) {
      setPage(page + 1);
    }
    setNextPokemonsPage(next);

    getNextPokemons(next).then((response) => {
      setPokemons(response);
    });
  }

  function previousPokemons() {
    let previous = nextPokemonsPage - 20;
    if (previous < 0) {
      previous = 0;
    } else if (page > 0) {
      setPage(page - 1);
    }
    setNextPokemonsPage(previous);
    getNextPokemons(previous).then((response) => {
      setPokemons(response);
    });
  }

  function returnStart() {
    setPage(1);
    setNextPokemonsPage(0);
    getPokemons().then((response) => {
      setPokemons(response);
    });
  }

  function trocarCorInputRadio(radioClickedColor: any) {
    tags.inputs.forEach((input: any) => {
      if (input.classList.contains(`${input.value}`)) {
        input.classList.remove(input.value);
      }
      if (input.value === radioClickedColor.value) {
        radioClickedColor.classList.add(input.value);
      }
    });
    // switch (radioClickedColor) {
    //   case "grass":
    //     document.body.style.setProperty("--color-stats", "#77cc55");
    //     break;
    //   case "water":
    //     document.body.style.setProperty("--color-stats", "#35baff");
    //     break;
    //   case "bug":
    //     document.body.style.setProperty("--color-stats", "#aabb22");
    //     break;
    //   case "dark":
    //     document.body.style.setProperty("--color-stats", "#775544");
    //     break;
    //   case "dragon":
    //     document.body.style.setProperty("--color-stats", "#7766ee");
    //     break;
    //   case "electric":
    //     document.body.style.setProperty("--color-stats", "#ffcc33");
    //     break;
    //   case "fairy":
    //     document.body.style.setProperty("--color-stats", "#ee99ee");
    //     break;
    //   case "fighting":
    //     document.body.style.setProperty("--color-stats", "#bc6a5c");
    //     break;
    //   case "fire":
    //     document.body.style.setProperty("--color-stats", "#d93e30");
    //     break;
    //   case "flying":
    //     document.body.style.setProperty("--color-stats", "#5b73fb");
    //     break;
    //   case "ghost":
    //     document.body.style.setProperty("--color-stats", "#6666bb");
    //     break;
    //   case "ground":
    //     document.body.style.setProperty("--color-stats", "#ddbb55");
    //     break;
    //   case "ice":
    //     document.body.style.setProperty("--color-stats", "#00aaff");
    //     break;
    //   case "normal":
    //     document.body.style.setProperty("--color-stats", "#aa9");
    //     break;
    //   case "poison":
    //     document.body.style.setProperty("--color-stats", "#aa5599");
    //     break;
    //   case "psychic":
    //     document.body.style.setProperty("--color-stats", "#ff5959");
    //     break;
    //   case "rock":
    //     document.body.style.setProperty("--color-stats", "#bbaa66");
    //     break;
    //   case "steel":
    //     document.body.style.setProperty("--color-stats", "#aaaabb");
    //     break;
    //   default:
    //     document.body.style.setProperty("--color-stats", "black");
    //     break;
    // }
  }

  function trocarCorLabel(spanHover: any) {
    tags.labelsRadios.forEach((label) => {
      const type = label.getAttribute("for") as string;
      if (label.classList.contains(`${type}`)) {
        label.classList.remove(type);
      }
      if (type === spanHover.htmlFor) {
        spanHover.classList.add(type);
      }
    });

    // switch (spanHover.htmlFor) {
    //   case "grass":
    //     document.body.style.setProperty("--color-stats-label", "#77cc55");
    //     break;
    //   case "water":
    //     document.body.style.setProperty("--color-stats-label", "#35baff");
    //     break;
    //   case "bug":
    //     document.body.style.setProperty("--color-stats-label", "#aabb22");
    //     break;
    //   case "dark":
    //     document.body.style.setProperty("--color-stats-label", "#775544");
    //     break;
    //   case "dragon":
    //     document.body.style.setProperty("--color-stats-label", "#7766ee");
    //     break;
    //   case "electric":
    //     document.body.style.setProperty("--color-stats-label", "#ffcc33");
    //     break;
    //   case "fairy":
    //     document.body.style.setProperty("--color-stats-label", "#ee99ee");
    //     break;
    //   case "fighting":
    //     document.body.style.setProperty("--color-stats-label", "#bc6a5c");
    //     break;
    //   case "fire":
    //     document.body.style.setProperty("--color-stats-label", "#d93e30");
    //     break;
    //   case "flying":
    //     document.body.style.setProperty("--color-stats-label", "#5b73fb");
    //     break;
    //   case "ghost":
    //     document.body.style.setProperty("--color-stats-label", "#6666bb");
    //     break;
    //   case "ground":
    //     document.body.style.setProperty("--color-stats-label", "#ddbb55");
    //     break;
    //   case "ice":
    //     document.body.style.setProperty("--color-stats-label", "#00aaff");
    //     break;
    //   case "normal":
    //     document.body.style.setProperty("--color-stats-label", "#aa9");
    //     break;
    //   case "poison":
    //     document.body.style.setProperty("--color-stats-label", "#aa5599");
    //     break;
    //   case "psychic":
    //     document.body.style.setProperty("--color-stats-label", "#ff5959");
    //     break;
    //   case "rock":
    //     document.body.style.setProperty("--color-stats-label", "#bbaa66");
    //     break;
    //   case "steel":
    //     document.body.style.setProperty("--color-stats-label", "#aaaabb");
    //     break;
    //   default:
    //     document.body.style.setProperty("--color-stats-label", "transparent");
    //     break;
    // }
  }

  function swapBackgroundColorLabel(e: any) {
    tags.labelsRadios.forEach((label) => {
      if (label.classList.contains(`clickedOn-${label.getAttribute("for")}`)) {
        label.classList.remove(`clickedOn-${label.getAttribute("for")}`);
      }
      if (label.children[0].classList.contains(`${e.target.value}`)) {
        label.classList.add(`clickedOn-${e.target.value}`);
      } else {
        label.classList.remove(`clickedOn-${e.target.value}`);
      }
    });
    // tags.labelsRadios.forEach((label: any) => {
    //   if (label.children[0] === e.target) {
    //     const color = document.body.style.getPropertyValue(
    //       "--color-stats-label"
    //     );
    //     document.body.style.setProperty("--color-stats-label-clicked", color);
    //     label.classList.add("clicked");
    //   } else {
    //     label.classList.remove("clicked");
    //   }
    // });
  }

  function filterPoke(e: any) {
    filterPokemon(e.target.value).then((response) => {
      const arrayPokes: any[] | ((prevState: IPokemons[]) => IPokemons[]) = [];
      response.forEach((pokemonResponse: IPokemons) => {
        arrayPokes.push(pokemonResponse.pokemon);
      });
      setPokemons(arrayPokes);
      tags.divButton!.classList.add("showButton");
      setLengthFilterPokemon(arrayPokes.length);
      setFilterOnOff(true);
    });
    tags.footerDiv!.classList.add("hidden");
    tags.footerTop!.classList.add("hidden");
    tags.buttonEmptyFilter!.classList.remove("hidden");

    window.scrollTo(0, 230);
    trocarCorInputRadio(e.target);
    swapBackgroundColorLabel(e);
  }

  function emptyFilter() {
    setFilterOnOff(false);
    tags.details!.toggleAttribute("open");
    tags.divButton!.classList.remove("showButton");
    tags.inputs.forEach((input: any) => {
      if (input.classList.contains(`${input.value}`)) {
        input.classList.remove(input.value);
      }
    });
    tags.footerDiv!.classList.remove("hidden");
    tags.footerTop!.classList.remove("hidden");
    tags.buttonEmptyFilter!.classList.add("hidden");

    tags.labelsRadios.forEach((label: any) => {
      if (label.classList.contains(`clickedOn-${label.getAttribute("for")}`)) {
        label.classList.remove(`clickedOn-${label.getAttribute("for")}`);
      }
    });
    getAndListPokemons().then(() => {
      window.scrollTo(0, 230);
    });
  }

  function cleanBackground(e: any) {
    if (e.classList.contains(e.htmlFor)) {
      e.classList.remove(e.htmlFor);
    }
  }

  function emptySearchPokemon() {
    const input = document.getElementById(
      "procurarPokemon"
    ) as HTMLInputElement;
    input!.value = "";
    getAndListPokemons();
  }

  useEffect(() => {
    getAndListPokemons();
    getAndListTypes();
  }, []);

  return (
    <Container>
      <h1>
        Mais de 500 <span>Pokémons</span> para você escolher o seu favorito
      </h1>
      <input
        type="text"
        placeholder="Procurar Pokemon"
        id="procurarPokemon"
        onChange={(e) => searchPoke(e.target.value)}
      />
      {loadingPokemon === true && (
        <div className="filtros">
          <details>
            <summary>Filtro: Tipagem</summary>
            <div className="divButton">
              <button type="button" onClick={emptyFilter}>
                Limpar Filtro
              </button>
              {largura > 650 ? (
                <div className="radiosButtons">
                  {allTypesList.map((type) => (
                    <label
                      className="labelRadio"
                      htmlFor={type.name}
                      key={type.name}
                      onMouseOver={(e) => trocarCorLabel(e.target)}
                      onMouseLeave={(e) => cleanBackground(e.target)}
                    >
                      <input
                        type="radio"
                        value={type.name}
                        id={type.name}
                        onClick={(e) => filterPoke(e)}
                        name="filtro"
                        className="inputsRadio"
                      />
                      {type.name}
                    </label>
                  ))}
                </div>
              ) : (
                <div className="radiosButtons expanded">
                  {allTypesList.map((type) => (
                    <label
                      className="labelRadio"
                      htmlFor={type.name}
                      key={type.name}
                      onMouseOver={(e) => trocarCorLabel(e.target)}
                      onMouseLeave={(e) => cleanBackground(e.target)}
                    >
                      <input
                        type="radio"
                        value={type.name}
                        id={type.name}
                        onClick={(e) => filterPoke(e)}
                        name="filtro"
                        className="inputsRadio"
                      />
                      {type.name}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </details>

          {filterOnOff === true && (
            <div>
              <p>
                <span>{lengthFilterPokemon}</span> Pokémons encontrados
              </p>
            </div>
          )}
          <div className="footerTop">
            <div className="divFooterTop">
              <button type="button" onClick={previousPokemons}>
                <MdDoubleArrow size={24} />
              </button>
              <p>{`${page} - ${max}`}</p>
              <button type="button" onClick={nextPokemons}>
                <MdDoubleArrow size={24} />
              </button>
            </div>
            {page > 1 && (
              <button
                className="buttonReturn"
                type="button"
                onClick={returnStart}
              >
                Return Page 1
              </button>
            )}
          </div>
        </div>
      )}

      <div className="pokemons">
        {loadingPokemon ? (
          pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <CardsPokemons key={pokemon.name} url={pokemon.url} />
            ))
          ) : (
            <div className="errorDiv">
              <img src={pikachuX} alt="Pikachu Error" />
              <p>Not Found</p>
              <h2>Não existe nenhum pokemon com este tipo no momento.</h2>
            </div>
          )
        ) : (
          <>
            <CardsPokemons key={pokemon.name} url={pokemon} />
            <button
              type="button"
              onClick={emptySearchPokemon}
              className="returnPokedex"
            >
              Return Pokédex
            </button>
          </>
        )}
      </div>

      {loadingPokemon === true && (
        <footer className="footerBottom">
          <div className="divShowHidden">
            <button type="button" onClick={previousPokemons}>
              <MdDoubleArrow size={24} />
            </button>
            <p>{`${page} - ${max}`}</p>
            <button type="button" onClick={nextPokemons}>
              <MdDoubleArrow size={24} />
            </button>
          </div>
          <button
            type="button"
            className="emptyFilter hidden"
            onClick={emptyFilter}
          >
            Limpar Filtro
          </button>
        </footer>
      )}
    </Container>
  );
}
