export const getAllCountryName = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const response = await res.json();
  const countriesName = response
    .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
    .map(({ name }) => name.common);
  return countriesName;
};
