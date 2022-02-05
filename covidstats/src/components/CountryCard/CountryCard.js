import VaccinesIcon from "@mui/icons-material/Vaccines";
import { AppContext } from "../../context/AppContext.js";
import HistoryIcon from "@mui/icons-material/History";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useStyles from "../styles/styles";

import { useContext } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
export default function CountryCard(props) {
  const classes = useStyles();

  const { loading, setLoading } = useContext(AppContext);
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
                onClick={() => console.log("u clicked")}
                endIcon={<VaccinesIcon />}>
                Vaccines data
              </Button>
              <Button
                type='submit'
                color='primary'
                variant='contained'
                onClick={() => console.log("u clicked")}
                endIcon={<HistoryIcon />}>
                Historical cases data
              </Button>
            </CardActions>
          </Card>
        </>
      )}
    </>
  );
}
