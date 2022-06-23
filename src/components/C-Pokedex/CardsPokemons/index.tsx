/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { getPokemon } from "../../../apiPokemon";
import bug from "../../../assets/img/icontypes/bug.svg";
import dark from "../../../assets/img/icontypes/dark.svg";
import dragon from "../../../assets/img/icontypes/dragon.svg";
import electric from "../../../assets/img/icontypes/electric.svg";
import fairy from "../../../assets/img/icontypes/fairy.svg";
import fighting from "../../../assets/img/icontypes/fighting.svg";
import fire from "../../../assets/img/icontypes/fire.svg";
import flying from "../../../assets/img/icontypes/flying.svg";
import ghost from "../../../assets/img/icontypes/ghost.svg";
import grass from "../../../assets/img/icontypes/grass.svg";
import ground from "../../../assets/img/icontypes/ground.svg";
import ice from "../../../assets/img/icontypes/ice.svg";
import normal from "../../../assets/img/icontypes/normal.svg";
import poison from "../../../assets/img/icontypes/poison.svg";
import psychic from "../../../assets/img/icontypes/psychic.svg";
import rock from "../../../assets/img/icontypes/rock.svg";
import steel from "../../../assets/img/icontypes/steel.svg";
import water from "../../../assets/img/icontypes/water.svg";
import { DetalhesDesktop } from "../../../pages/Detalhes/Desktop/DesktopDetalhes";
import { ImgPokemon } from "../ImgPokemon";
import { Container } from "./style";

interface IPokemon {
  url: string;
}

interface IPokemon2 {
  name: string;
  url: string;
  id: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
      front_default: string;

      back_default: string;

      front_shiny: string;

      back_shiny: string;

      home: {
        front_default: string;
      };
    };
  };
}

interface IStatus {
  base_stat: string;
}

interface ITypes {
  name: string;
}

export default function CardsPokemons({ url }: IPokemon) {
  const largura = window.screen.width;
  const [pokemon, setPokemon] = useState({} as IPokemon2);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([] as IStatus[]);
  const [types, setTypes] = useState<ITypes[]>([]);
  const [details, setDetails] = useState(false);
  const iconsTypes = {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
  };

  function higherStatusAtckOrSpAtck() {
    return stats[1].base_stat > stats[3].base_stat ? (
      <>
        <p>{stats[1].base_stat}</p>
        <p>
          Physical <span>Attack</span>{" "}
        </p>
      </>
    ) : (
      <>
        <p>{stats[3].base_stat}</p>{" "}
        <p>
          Special <span>Attack</span>{" "}
        </p>
      </>
    );
  }

  function higherStatusDefenseOrSpDefense() {
    return stats[2].base_stat > stats[4].base_stat ? (
      <>
        <p>{stats[2].base_stat}</p>
        <p>
          Physical <span>Defense</span>
        </p>
      </>
    ) : (
      <>
        <p>{stats[4].base_stat}</p>{" "}
        <p>
          Special <span />
          Defense
          <span />
        </p>
      </>
    );
  }

  function TypesPokemon(arrayTypes: any) {
    const typesPoke: any[] | ((prevState: never[]) => never[]) = [];
    arrayTypes.forEach((element: any) => {
      typesPoke.push(element.type.name);
    });
    setTypes(typesPoke);
  }

  function rotateCard(e: HTMLElement) {
    const article = e.parentNode?.parentNode?.parentNode as HTMLElement;
    article.classList.add("moreDetails");
    setTimeout(() => {
      setDetails(!details);
      article.classList.remove("moreDetails");
    }, 1300);
  }

  const type = types[0];

  useEffect(() => {
    getPokemon(url).then((response) => {
      setPokemon(response);
      setStats(response.stats);
      TypesPokemon(response.types);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {details ? (
        <DetalhesDesktop
          key={pokemon.name}
          detailsOnOff={setDetails}
          name={pokemon.name}
          id={pokemon.id}
          abilities={pokemon.abilities}
          base_experience={pokemon.base_experience}
          height={pokemon.height}
          weight={pokemon.weight}
          stats={stats}
          types={types}
          colorBackground={type.toString()}
          sprite={
            pokemon.sprites.other.home.front_default ||
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default ||
            pokemon.sprites.front_shiny
          }
        />
      ) : (
        <Container>
          <div className="contentInfos">
            <p className="name">{pokemon.name}</p>
            <div className="stats">
              <div>{loading ? null : higherStatusAtckOrSpAtck()}</div>
              <div>{loading ? null : higherStatusDefenseOrSpDefense()}</div>
            </div>
            <div className="moreDetails">
              {/* {largura > 768 ? (
                <button
                  type="button"
                  className={loading ? "" : type.toString()}
                  onClick={(e: any) => rotateCard(e.target)}
                >
                  Mais Detalhes
                </button>
              ) : (
                <Link
                  to={`/detalhes/${pokemon.name}`}
                  className={loading ? "" : type.toString()}
                >
                  Mais Detalhes
                </Link>
              )} */}
              <button
                type="button"
                className={loading ? "" : type.toString()}
                onClick={(e: any) => rotateCard(e.target)}
              >
                Mais Detalhes
              </button>
            </div>
            <div className="types">
              {loading
                ? null
                : types.map((type: any) => (
                    <p key={type} className={type}>
                      <img src={iconsTypes[type]} alt={type} />
                      {type}
                    </p>
                  ))}
            </div>
          </div>

          {loading ? (
            <div className="contentImg carregando">
              <img
                src="https://c.tenor.com/CpRW4WUGa3IAAAAi/pok%C3%A9ball-pok%C3%A9mon.gif"
                alt="Pokebola"
              />
            </div>
          ) : (
            <ImgPokemon
              src={
                pokemon.sprites.other.home.front_default ||
                pokemon.sprites.other["official-artwork"].front_default ||
                pokemon.sprites.front_default ||
                pokemon.sprites.front_shiny
              }
              alt={pokemon.name}
              type={types[0]}
              key={pokemon.name}
            />
          )}
          <Outlet />
        </Container>
      )}
    </>
  );
}
