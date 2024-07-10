import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";

function Card({ country }) {
  const { dispatch } = useContext(CountryContext);
  const { flags, name, population, capital, region } = country;

  function handleCountryClick(country) {
    dispatch({ type: "countries/details", payload: country });
  }

  return (
    <li onClick={() => handleCountryClick(country)}>
      <Link
        to={`/country/${name.common}`}
        className=" card-list countries-link"
      >
        <img src={flags.png} alt={flags.alt} className="flag-image" />

        <div className="countries-info-container">
          <h2 className="country-name">{name.common}</h2>
          <p className="countries-info">
            <span>Population:</span>
            {population}
          </p>
          <p className="countries-info">
            <span>Region:</span>
            {region}
          </p>
          <p className="countries-info">
            <span>Capital:</span>
            {capital}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default Card;
