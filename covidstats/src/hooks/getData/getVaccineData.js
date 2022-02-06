import axios from "axios";
export default function getCovidInfo(countryVaccineStatsURL, setVaccineStats) {
  axios.get(countryVaccineStatsURL).then((response) => {
    setVaccineStats({
      people_vaccinated: response.data.All.people_vaccinated,
      people_partially_vaccinated:
        response.data.All.people_partially_vaccinated,
      updated: response.data.All.updated,
    });
  });
}
