import React, { useState, useEffect } from "react";
import getCountryList from "../hooks/getCountryList";
import { Drawer, Typography, List, ListItem } from "@mui/material";
import useStyles from "./styles";
import countryUrl from "../hooks/countryUrl";

export default function Menu() {
  const [countryNames, setCountryNames] = useState([]);
  const classes = useStyles();
  let countryStatsURL = "";

  useEffect(() => {
    getCountryList(setCountryNames);
  }, []);

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div>
        <Typography className={classes.covid} variant='h5'>
          Covid-19 Live Case Data
        </Typography>
      </div>
      <List>
        {countryNames.map((eachCountry) => (
          <ListItem
            className={classes.listItem}
            button
            key={eachCountry}
            onClick={() => {
              countryStatsURL = countryUrl(eachCountry);
              console.log(countryStatsURL);
            }}>
            {eachCountry}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
