export async function getPokemons() {
  const response =
    await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0
  `);
  const data = await response.json();
  const results = await data.results;
  return results;
}

export async function getNextPokemons(number: number) {
  const response =
    await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${number}
  `);
  const data = await response.json();
  const results = await data.results;
  return results;
}

export async function maxPokemons() {
  const response =
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0
  `);
  const data = await response.json();
  return data.results;
}

export async function getPokemon(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
}

export async function getPokemonEspecific(pokemon: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  return data;
}

export async function filterPokemon(type: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  const dataPoke = await data.pokemon;
  return dataPoke;
}

export async function getWeaknes(type: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  const dataWeaknes = await data.damage_relations.double_damage_from;
  return dataWeaknes;
}

export async function allTypes() {
  const response = await fetch(`https://pokeapi.co/api/v2/type`);
  const data = await response.json();
  const dataTypes = await data.results;
  return dataTypes;
}
