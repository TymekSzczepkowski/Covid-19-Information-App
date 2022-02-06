import axios from "axios";
export default function getCovidInfo(countryStatsURL, setCountryStats) {
  let cancel = false;
  axios.get(countryStatsURL).then((response) => {
    if (cancel) return;
    // console.log(response.data.All);
    setCountryStats({
      country: response.data.All.country,
      confirmed: response.data.All.confirmed,
      deaths: response.data.All.deaths,
      updated: response.data.All.updated,
      population: response.data.All.population,
    });
  });
  return () => (cancel = true);
}
