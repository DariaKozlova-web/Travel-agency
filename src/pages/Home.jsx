import { Link } from "react-router";
import { cities } from "../assets/cities";
import { CityCard } from "../components/CityCard";

export const Home = () => {
  const featured = cities.filter((city) =>
    ["paris", "london", "sydney"].includes(city.slug)
  );

  return (
    <>
      <div className="flex gap-0.5 my-10">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="From" />
        </label>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="To" />
        </label>
        <input type="date" className="input" />
        <input type="date" className="input" />
        <Link to={"destinations"}>
          <button className="btn">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            Serch
          </button>
        </Link>
      </div>
      <div>
        <h2 className="text-2xl text-amber-600 font-bold text-center my-10">Popular Destinations</h2>
        <div>
          <ul className="flex justify-between">
            {featured.map((c) => (
              <CityCard key={c.slug} city={c} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
