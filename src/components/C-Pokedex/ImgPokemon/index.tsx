import React from "react";

interface IImgPokemon {
  src: string;
  alt?: string;
  type?: any;
}

export function ImgPokemon({ src, alt, type }: IImgPokemon) {
  return (
    <div className={`contentImg ${type}`}>
      <img src={src} alt={alt} />
    </div>
  );
}
