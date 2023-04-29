import { Card } from "@/components/Card";
import { getLocation } from "./services";

async function fetchLocation() {
  return await getLocation();
}

async function Locations() {
  const locations = await fetchLocation();
  return (
      <>
        {locations.map((location) => (
          <Card key={location.id} data={location} />
        ))}
      </>
  );
}

export default Locations;