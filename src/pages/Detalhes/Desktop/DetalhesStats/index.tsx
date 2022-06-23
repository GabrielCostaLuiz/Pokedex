/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";

import { Container } from "./style";

interface IProps {
  stats: [];
  colorBackground: string;
}

export function DetalhesStats({ stats, colorBackground }: IProps) {
  const [statsPokemon, setStatsPokemon] = useState<any>(stats);

  function getStats() {
    setStatsPokemon(stats);
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <Container>
      <div className="baseStats">
        <div className="statsTitles">
          <ul>
            {statsPokemon.map((nameStat: any) => (
              <li key={nameStat.stat.name}>
                {nameStat.stat.name === "special-defense" ? (
                  <h5>spdef</h5>
                ) : nameStat.stat.name === "special-attack" ? (
                  <h5>spatk</h5>
                ) : (
                  <h5>{nameStat.stat.name}</h5>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <ul>
            {statsPokemon.map((stat: any) => (
              <li
                key={stat.base_stat}
                className={`textColorType ${colorBackground}`}
              >
                {stat.base_stat}
              </li>
            ))}
          </ul>

          <div className="statsBars">
            {statsPokemon.map((stat: any, index: number) => (
              <div className="groupStatsBars">
                <div
                  key={`${stat.stat.name}${index}bars`}
                  className={`${colorBackground} statsBar`}
                  style={{ width: `calc(${stat.base_stat}px * 2)` }}
                />
                <div className={`${colorBackground} fillBar`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
