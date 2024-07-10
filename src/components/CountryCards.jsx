import { useContext } from "react";
import Card from "./Card";
import { CountryContext } from "../context/CountryContext";

function CountryCards() {
  const { countries } = useContext(CountryContext);

  return (
    <ul className="card-container">
      {countries.length > 0 ? (
        countries.map((country) => (
          <Card country={country} key={country.cca3} />
        ))
      ) : (
        <p className="country-error">No countries Found !</p>
      )}
    </ul>
  );
}

export default CountryCards;
