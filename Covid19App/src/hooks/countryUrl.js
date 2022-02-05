import { parseTemplate } from "url-template";

export default function countryUrl(countryName) {
  const countryStatsUrlTemplate = parseTemplate(
    "https://covid-api.mmediagroup.fr/v1/cases?country={country}"
  );
  const countryURL = countryStatsUrlTemplate.expand({
    country: countryName,
  });
  return countryURL;
}
