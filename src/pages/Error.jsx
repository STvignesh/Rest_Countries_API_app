import { useContext, useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  const { selectedCountry } = useContext(CountryContext);
  console.log(error);

  useEffect(
    function () {
      if (!selectedCountry) navigate("/");
    },
    [selectedCountry, navigate]
  );

  if (!error) {
    return null;
  }

  return (
    <div className="error">
      <h1>Error</h1>
      <p>{error.statusText}</p>
      <p>{error.data}</p>
    </div>
  );
}

export default Error;
