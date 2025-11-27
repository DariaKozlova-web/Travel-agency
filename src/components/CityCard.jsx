import { Link } from "react-router";

export const CityCard = ({ city }) => {
  return (
    <li>
      <Link to={city.slug}>
        <div className="card bg-base-100 w-96 shadow-sm">

          <figure className="aspect-[3/2] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={city.image}
              alt={city.name}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{city.name}</h2>
            <p>{city.description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};