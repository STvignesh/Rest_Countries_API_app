import { createContext, useEffect, useReducer } from "react";

const CountryContext = createContext();

const initialState = {
  countriesAll: [],
  countries: [],
  isLoading: true,
  selectedRegion: "all",
  searchCountry: "",
  selectedCountry: null,
  isDark: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "countries/fetch_complete":
      return {
        ...state,
        countriesAll: action.payload,
        countries: action.payload,
      };
    case "countries/fetch_delay":
      console.log("state", state);
      return {
        ...state,
        isLoading: action.payload,
      };
    case "countries/region":
      return { ...state, selectedRegion: action.payload };
    case "countries/search":
      // console.log(state);
      return { ...state, searchCountry: action.payload };
    case "countries/filterCountries":
      return { ...state, countries: action.payload };
    case "countries/details":
      console.log(action);
      return { ...state, selectedCountry: action.payload };
    case "countries/toggleDarkTheme":
      return { ...state, isDark: action.payload };
    default:
      return { ...state };
  }
}

export function CountryProvider({ children }) {
  const [
    {
      countries,
      countriesAll,
      searchCountry,
      selectedRegion,
      selectedCountry,
      isDark,
      isLoading,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      let FilteredCountries = countriesAll;
      // console.log(countriesAll);
      //search Country

      if (searchCountry.length > 0) {
        FilteredCountries = FilteredCountries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase())
        );
      } else FilteredCountries = countriesAll;

      // filter Country
      if (selectedRegion !== "all") {
        console.log("filter", FilteredCountries);
        FilteredCountries = FilteredCountries.filter(
          (country) => country.region === selectedRegion
        );
      }

      dispatch({
        type: "countries/filterCountries",
        payload: FilteredCountries,
      });
    },
    [countriesAll, searchCountry, selectedRegion]
  );

  const value = {
    countriesAll,
    countries,
    isLoading,
    selectedCountry,
    isDark,
    searchCountry,
    selectedRegion,
    dispatch,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
export { CountryContext };
