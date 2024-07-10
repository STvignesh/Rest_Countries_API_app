import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CountryDetails() {
  const navigate = useNavigate();
  const { name } = useParams();
  const { selectedCountry, countriesAll, dispatch } =
    useContext(CountryContext);

  const { flags } = selectedCountry;

  let currencies;
  const languages = [];
  const borders_cca3 =
    selectedCountry.borders !== undefined
      ? selectedCountry.borders.map((border) => border)
      : [];
  const borderCountries = countriesAll.filter((country) =>
    borders_cca3.includes(country.cca3)
  );

  Object.keys(selectedCountry.languages).forEach((key) => {
    languages.push(selectedCountry.languages[key]);
  });

  Object.keys(selectedCountry.currencies).forEach((key) => {
    currencies = selectedCountry.currencies[key].name;
  });

  return (
    <div className="country-details-section">
      <button className="back-Home-button" onClick={() => navigate("/")}>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>{" "}
        Back
      </button>
      <main>
        <div className="country-details-container">
          <div className="image-container">
            <img src={flags.svg} alt={flags.alt}></img>
          </div>
          <div className="all-details">
            <h1 className="name-country">{name}</h1>
            <div className="country-data">
              <div>
                <p>
                  <span>Official Name: </span>
                  {selectedCountry.name.official}
                </p>
                <p>
                  <span>Population: </span>
                  {selectedCountry.population}
                </p>
                <p>
                  <span>Region: </span>
                  {selectedCountry.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {selectedCountry.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {selectedCountry.capital}
                </p>
              </div>
              {/*  */}
              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {selectedCountry.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {currencies}
                </p>
                <p>
                  <span>Languages:</span>
                  {languages.length > 0 && languages.join(",")}
                </p>
              </div>
            </div>
            <div className="borders">
              <span className="b-title">Border Countries: </span>

              {borderCountries.length > 0 ? (
                borderCountries.map((border, i) => (
                  <Link to={`/country/${border.name.common}`} key={i}>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "countries/details",
                          payload: border,
                        })
                      }
                      className="border-country"
                    >
                      {border.name.common}
                    </button>
                  </Link>
                ))
              ) : (
                <span className="no-border">No Border Countries</span>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CountryDetails;
