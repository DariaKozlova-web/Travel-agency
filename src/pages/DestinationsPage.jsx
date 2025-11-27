import { cities } from "../assets/cities";
import { CityCard } from "../components/CityCard";

export const DestinationsPage = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map(city => (
        <CityCard key={city.slug} city={city} />
      ))}
    </ul>
  );
};