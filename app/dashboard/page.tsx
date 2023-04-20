import Image from "next/image";

async function fetchData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/3");
  return response.json();
}

async function Dashboard() {
  const data = await fetchData();

  return (
    <div>
      <Image src={data.image} width={300} height={300} alt="Morty" />
    </div>
  );
}
export default Dashboard;
