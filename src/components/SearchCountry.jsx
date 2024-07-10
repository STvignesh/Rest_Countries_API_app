import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import { IoSearchSharp } from "react-icons/io5";
function SearchCounty() {
  const { dispatch, searchCountry } = useContext(CountryContext);

  return (
    <form>
      <div className="search-compo">
        <IoSearchSharp className="search-icon" />
        <input
          type="text"
          placeholder="search for a country..."
          value={searchCountry}
          onChange={(e) =>
            dispatch({ type: "countries/search", payload: e.target.value })
          }
          className="search-bar"
        />
      </div>
    </form>
  );
}

export default SearchCounty;
