import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
function AppLayout() {
  const { isDark, dispatch } = useContext(CountryContext);
  // console.log(isDark);

  function handleDarkTheme() {
    dispatch({ type: "countries/toggleDarkTheme", payload: !isDark });
  }

  return (
    <div className={`layout ${isDark ? "page-dark" : ""}`}>
      <header>
        <div className={`container shadow ${isDark ? "header-dark" : ""} `}>
          <Link to="/" className="title">
            <p>Where in the World?</p>
          </Link>
          <button className="theme-btn" onClick={handleDarkTheme}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="icon" />
            {!isDark ? "Dark Mode" : "Ligth Mode"}
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
