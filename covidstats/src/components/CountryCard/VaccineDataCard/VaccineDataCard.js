import VaccinesIcon from "@mui/icons-material/Vaccines";
import useStyles from "../../styles/styles";
import { AppContext } from "../../../context/AppContext.js";
import { useContext } from "react";

import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
export default function VaccineDataCard(props) {
  const { setShow } = useContext(AppContext);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.VaccineCard} elevation={2}>
        <CardContent>
          <Typography variant='h5' gutterBottom>
            Vaccine Data
          </Typography>
          <Typography color='textSecondary'>
            People vaccinated:{" "}
            {props.vaccineStats.people_vaccinated.toLocaleString()}
            <br />
            People partially vaccinated:{" "}
            {props.vaccineStats.people_partially_vaccinated.toLocaleString()}
            <br />
            {props.vaccineStats.updated === undefined
              ? "Last update: no information available"
              : `Last update: ${props.vaccineStats.updated}`}
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
            onClick={() => setShow(false)}
            endIcon={<VaccinesIcon />}>
            Hide data
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
