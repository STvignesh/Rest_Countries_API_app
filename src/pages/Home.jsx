import Filter from "../components/Filter";

import CountryCards from "../components/CountryCards";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import Loader from "../components/Loader";
import { CountryContext } from "../context/CountryContext";
import SearchCountry from "../components/SearchCountry";

const URL_ALL = "https://restcountries.com/v3.1/all";
function Home() {
  const loadedCountry = useLoaderData();

  const { dispatch, isLoading } = useContext(CountryContext);
  // wanted it to happen only when it mounts
  useEffect(
    function () {
      if (loadedCountry && loadedCountry.length > 0) {
        dispatch({
          type: "countries/fetch_complete",
          payload: loadedCountry,
          // isLoading: false,
        });

        setTimeout(function () {
          dispatch({
            type: "countries/fetch_delay",
            payload: false,
          });
        }, 2000);
      }
    },
    [loadedCountry, dispatch]
  );

  return (
    <div className="home-layout">
      <div className="container">
        <SearchCountry />
        <Filter />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CountryCards />
        </>
      )}
    </div>
  );
}

export async function loader() {
  try {
    const response = await fetch(URL_ALL);
    console.log(response);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Response("Failed to fetch Countries", {
      status: 400,
      statusText: err.message,
    });
  }
}

export default Home;
