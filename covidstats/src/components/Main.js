import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import countryUrl from "../hooks/countryUrl";
import getCovidInfo from "../hooks/getCovidInfo";
import getUserLocation from "../hooks/getUserLocation";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HistoryIcon from "@mui/icons-material/History";
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

function Main() {
  const [search, setSearch] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryStats, setCountryStats] = useState({
    country: "",
    confirmed: "",
    deaths: "",
    updated: "",
    population: "",
  });
  let countryStatsURL = "";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (search) {
    countryStatsURL = countryUrl(capitalizeFirstLetter(search));
  } else {
    countryStatsURL = countryUrl(countryName);
  }

  useEffect(() => {
    getUserLocation(setCountryName);
  }, []);

  useEffect(() => {
    getCovidInfo(countryStatsURL, setCountryStats);
  }, [countryName, countryStatsURL]);
  return (
    <Container>
      <Header search={search} setSearch={setSearch}></Header>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant='h5' gutterBottom>
                {countryStats.country}
              </Typography>
              <Typography color='textSecondary'>
                Population: {countryStats.population.toLocaleString()}
                <br />
                Coronavirus Cases: {countryStats.confirmed.toLocaleString()}
                <br /> Deaths: {countryStats.deaths.toLocaleString()}
                <br />
                {countryStats.updated === undefined
                  ? "Last update: no information available"
                  : `Last update: ${countryStats.updated}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ mr: 1 }}
                type='submit'
                color='primary'
                variant='outlined'
                onClick={() => console.log("u clicked")}
                endIcon={<VaccinesIcon />}>
                Vaccines data
              </Button>
              <Button
                type='submit'
                color='primary'
                variant='outlined'
                onClick={() => console.log("u clicked")}
                endIcon={<HistoryIcon />}>
                Historical cases data
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
