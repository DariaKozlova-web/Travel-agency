

// export const DetailsPage =()=>{
//   const {cityName} = useParams();
//   console.log(cityName)
//   return (
//     <div>DetailsPage</div>
//   )
// }


import { useParams, Link } from "react-router";
import { cities } from "../assets/cities";

export const DetailsPage = () => {
  const { slug } = useParams();

  // Find the city that matches the slug
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
        <Link to="/destinations" className="btn btn-primary">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <Link to="/destinations" className="btn btn-outline mb-6">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">{city.name}</h1>

      <img
        src={city.image}
        alt={city.name}
        className="rounded-xl shadow-md w-full h-80 object-cover mb-8"
      />

      <p className="text-lg leading-relaxed mb-6">
        {city.description}
      </p>

      <div className="p-6 bg-base-200 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">More About {city.name}</h2>
        <p>
          {city.name} is one of the most iconic travel destinations in the world.
          Whether you're interested in culture, history, food, or unique
          experiences, this city offers something unforgettable for every visitor.
        </p>

        <p className="mt-4">
          Explore historic landmarks, enjoy delicious cuisine, and immerse
          yourself in the atmosphere that makes {city.name} a truly special place
          to visit.
        </p>
      </div>
    </div>
  );
};
