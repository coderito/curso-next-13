import { Characters } from "../models";

export const getCharacter = (): Promise<Characters[]> => {
    const url = "https://rickandmortyapi.com/api/character";

    return fetch(url)
        .then(res => res.json())
        .then(data => data.results);
};
