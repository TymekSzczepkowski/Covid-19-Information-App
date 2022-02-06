import axios from "axios";

export default function getCountryList(setCountryNames) {
  axios
    .get("https://covid-api.mmediagroup.fr/v1/cases?country")
    .then((response) => {
      setCountryNames(Object.keys(response.data));
    });
}
