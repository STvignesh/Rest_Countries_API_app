import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../context/CountryContext";

function Filter() {
  const { selectedRegion, dispatch } = useContext(CountryContext);
  const [active, setActive] = useState(false);
  const activeValue = active ? "active" : "not-active";
  // console.log("activeValue", activeValue);
  const region =
    selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1);

  // useEffect(() => {
  //   console.log("active state has changed:", active);
  // }, [active]);

  function handleSelectRegion(e) {
    dispatch({ type: "countries/region", payload: e.target.id });
    setActive(false);
    // toggleActive();
  }

  function toggleActive() {
    setActive(!active);
  }
  // console.log("active", active);

  // console.log(typeof selectedRegion);
  return (
    <div className="filter" onClick={toggleActive}>
      <div className="filter-countries">Filter Region: {region}</div>
      <div className={`filter-countries countries ${activeValue}`}>
        <ul>
          <li id="all" onClick={(e) => handleSelectRegion(e)}>
            All
          </li>
          <li id="Africa" onClick={(e) => handleSelectRegion(e)}>
            Africa
          </li>
          <li id="Americas" onClick={(e) => handleSelectRegion(e)}>
            Americas
          </li>
          <li id="Asia" onClick={(e) => handleSelectRegion(e)}>
            Asia
          </li>
          <li id="Europe" onClick={(e) => handleSelectRegion(e)}>
            Europe
          </li>
          <li id="Oceania" onClick={(e) => handleSelectRegion(e)}>
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
