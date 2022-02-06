import { parseTemplate } from "url-template";

export default function parseCountryUrl(countryName) {
  const countryVaccineStatsUrlTemplate = parseTemplate(
    "https://covid-api.mmediagroup.fr/v1/vaccines?country={country}"
  );
  const parseVaccineCountryUrl = countryVaccineStatsUrlTemplate.expand({
    country: countryName,
  });
  return parseVaccineCountryUrl;
}
