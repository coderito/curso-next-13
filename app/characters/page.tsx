import { Card } from "@/components/Card";
import { getCharacter } from "./services";

async function fetchCharacter() {
  return await getCharacter();
}

async function Characters() {
  const characters = await fetchCharacter();
  return (
      <>
        {characters.map((character) => (
          <Card key={character.id} data={character} />
        ))}
      </>
  );
}

export default Characters;
