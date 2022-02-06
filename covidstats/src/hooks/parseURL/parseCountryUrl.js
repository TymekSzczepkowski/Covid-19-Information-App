import { parseTemplate } from "url-template";

export default function parseCountryUrl(countryName) {
  const countryStatsUrlTemplate = parseTemplate(
    "https://covid-api.mmediagroup.fr/v1/cases?country={country}"
  );
  const parseCountryUrl = countryStatsUrlTemplate.expand({
    country: countryName,
  });
  return parseCountryUrl;
}
