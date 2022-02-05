import axios from "axios";

export default function getUserLocation(setCountryName) {
  axios
    .get(
      "https://api.ip2loc.com/QcG3bKZQ6xFpnB0cVkP4y3QLIj5TNlvB/detect?include=country_name"
    )
    .then((response) => {
      setCountryName(response.data.country_name);
    });
}
