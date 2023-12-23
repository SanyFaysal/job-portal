import React, { useEffect, useState } from "react";

export default function useLoadCountry() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return countries.sort((a, b) =>
    a?.name?.common?.localeCompare(b?.name?.common)
  );
}
