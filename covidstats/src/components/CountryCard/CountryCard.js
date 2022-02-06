import VaccinesIcon from "@mui/icons-material/Vaccines";
import { AppContext } from "../../context/AppContext.js";
import VaccineDataCard from "../CountryCard/VaccineDataCard/VaccineDataCard.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useStyles from "../styles/styles";
import { useContext, useState, useEffect } from "react";
import getVaccineData from "../../hooks/getData/getVaccineData";
import parseVaccineCountryUrl from "../../hooks/parseURL/parseCountryVaccineUrl";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

export default function CountryCard(props) {
  const classes = useStyles();
  const { loading, setLoading, country, show, setShow } =
    useContext(AppContext);
  const [vaccineStatsURL, setVaccineStatsURL] = useState(" ");
  const [vaccineStats, setVaccineStats] = useState({
    people_vaccinated: "",
    people_partially_vaccinated: "",
    updated: "",
  });

  useEffect(() => {
      setVaccineStatsURL(parseVaccineCountryUrl(country));
      console.log(vaccineStatsURL);
      getVaccineData(vaccineStatsURL, setVaccineStats);
      console.log(vaccineStats);
  }, [show]);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      {loading ? (
        <Box className={classes.loadingBox} sx={{ display: "flex" }}>
          <span className={classes.spanTimout}>
            {setTimeout(() => setLoading(false), 2000)}
          </span>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Card elevation={2}>
            <CardContent>
              <Typography variant='h5' gutterBottom>
                {props.countryStats.country}
              </Typography>
              <Typography color='textSecondary'>
                Population: {props.countryStats.population.toLocaleString()}
                <br />
                Coronavirus Cases:{" "}
                {props.countryStats.confirmed.toLocaleString()}
                <br /> Deaths: {props.countryStats.deaths.toLocaleString()}
                <br />
                {props.countryStats.updated === undefined
                  ? "Last update: no information available"
                  : `Last update: ${props.countryStats.updated}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  mr: 1,
                }}
                type='submit'
                color='primary'
                variant='contained'
                onClick={handleClick}
                endIcon={<VaccinesIcon />}>
                Vaccines data
              </Button>
            </CardActions>
          </Card>
          {!show ? null : (
            <VaccineDataCard vaccineStats={vaccineStats}></VaccineDataCard>
          )}
        </>
      )}
    </>
  );
}
