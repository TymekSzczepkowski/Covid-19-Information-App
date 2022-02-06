import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext.js";
import Header from "../Searchbar/Searchbar.js";
import parseCountryUrl from "../../hooks/parseURL/parseCountryUrl";
import getCovidInfo from "../../hooks/getData/getCovidInfo";
import getUserLocation from "../../hooks/getData/getUserLocation";
import CountryCard from "../CountryCard/CountryCard";
import { Container, Grid } from "@mui/material";

function Main() {
  const { countryStatsURL, setCountryStatsURL, state, setCountry } =
    useContext(AppContext);
  const [search, setSearch] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryStats, setCountryStats] = useState({
    country: "",
    confirmed: "",
    deaths: "",
    updated: "",
    population: "",
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (search) {
    setCountryStatsURL(parseCountryUrl(capitalizeFirstLetter(search)));
  } else if (!state) {
    setCountryStatsURL(parseCountryUrl(countryName));
  }

  useEffect(() => {
    getUserLocation(setCountryName);
  }, []);

  useEffect(() => {
    getCovidInfo(countryStatsURL, setCountryStats);
  }, [countryName, countryStatsURL]);
  setCountry(countryStats.country);

  return (
    <Container>
      <Header search={search} setSearch={setSearch}></Header>
      <Grid container>
        <Grid item xs={12} md={12}>
          <CountryCard countryStats={countryStats}></CountryCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
