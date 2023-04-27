import { Characters } from "@/app/characters/models";

interface Props {
  data: Characters;
}

function Card({ data }: Props) {
  return (
    <div>
      <p>Name: {data.name} </p>
      <p>Type: {data.type}</p>
      <p>Created: {data.created}</p>
    </div>
  );
}

export default Card;
