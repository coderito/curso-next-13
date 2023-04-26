import { getCharacter } from "./services";

async function fetchCharacter() {
  return await getCharacter();
}

async function Characters() {
  const characters = await fetchCharacter();
  return (
    <div>
      <h1>Welcome Characters</h1>
      <div>{JSON.stringify(characters)}</div>
    </div>
  );
}

export default Characters;
