import React, { useEffect, useState } from "react";

import { getWeaknes } from "../../../../apiPokemon";
import bug from "../../../../assets/img/icontypes/bug.svg";
import dark from "../../../../assets/img/icontypes/dark.svg";
import dragon from "../../../../assets/img/icontypes/dragon.svg";
import electric from "../../../../assets/img/icontypes/electric.svg";
import fairy from "../../../../assets/img/icontypes/fairy.svg";
import fighting from "../../../../assets/img/icontypes/fighting.svg";
import fire from "../../../../assets/img/icontypes/fire.svg";
import flying from "../../../../assets/img/icontypes/flying.svg";
import ghost from "../../../../assets/img/icontypes/ghost.svg";
import grass from "../../../../assets/img/icontypes/grass.svg";
import ground from "../../../../assets/img/icontypes/ground.svg";
import ice from "../../../../assets/img/icontypes/ice.svg";
import normal from "../../../../assets/img/icontypes/normal.svg";
import poison from "../../../../assets/img/icontypes/poison.svg";
import psychic from "../../../../assets/img/icontypes/psychic.svg";
import rock from "../../../../assets/img/icontypes/rock.svg";
import steel from "../../../../assets/img/icontypes/steel.svg";
import water from "../../../../assets/img/icontypes/water.svg";
import { ImgPokemon } from "../../../../components/C-Pokedex/ImgPokemon";
import { Container } from "./style";

interface IProps {
  abilities: [];
  base_experience: number;
  height: number;
  weight: number;
  types: any;
  colorBackground: string;
  name: string;
  sprite: string;
}

export function DetalhesSobre({
  abilities,
  base_experience,
  height,
  weight,
  types,
  colorBackground,
  name,
  sprite,
}: IProps) {
  const [abilitiesList, setAbilitiesList] = useState<string[]>([]);
  const [weaknesList, setWeaknesList] = useState<string[]>([]);
  const heightMetro = height / 10;
  const weightMetro = weight / 10;
  const firstAbility = abilitiesList[0];
  const iconsTypes: any = {
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

  function getAbilities() {
    const abilitiesArray: ((prevState: string[]) => string[]) | any[] = [];
    abilities.forEach((abilitie: any) => {
      abilitiesArray.push(abilitie.ability.name);
    });
    setAbilitiesList(abilitiesArray);
  }

  function getWeaknesType() {
    getWeaknes(types[0]).then((weaknes) => {
      const weaknesArray: ((prevState: string[]) => string[]) | any[] = [];
      weaknes.forEach((weaknes: any) => {
        weaknesArray.push(weaknes.name);
      });
      setWeaknesList(weaknesArray);
    });
  }

  useEffect(() => {
    getAbilities();
    getWeaknesType();
  }, []);
  return (
    <Container>
      <div className="contentInfo">
        <ImgPokemon src={sprite} alt={name} key={name} />
        <ul>
          <li>
            <h5>Height</h5>
            <p className={`textColorType ${colorBackground}`}>
              {heightMetro} m
            </p>
          </li>
          <li>
            <h5>Weight</h5>
            <p className={`textColorType ${colorBackground}`}>
              {weightMetro} kg
            </p>
          </li>
          <li>
            <h5>Ability</h5>
            <details>
              <summary>{firstAbility}</summary>
              <ul>
                {abilitiesList.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <h5>Exp base</h5>
            <p className={`textColorType ${colorBackground}`}>
              {base_experience} exp
            </p>
          </li>
          <li>
            <h5>Weaknes</h5>
            <div className="weaks">
              {weaknesList.map((weaknes) => (
                <img
                  src={iconsTypes[weaknes]}
                  alt={weaknes}
                  title={weaknes}
                  className={weaknes}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}
