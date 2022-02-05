import React, { useState, useEffect, useContext } from "react";
import getCountryList from "../../hooks/getCountryList";
import { Drawer, Typography, List, ListItem } from "@mui/material";
import useStyles from "../styles/styles";
import countryUrl from "../../hooks/countryUrl";
import { AppContext } from "../../context/AppContext.js";

export default function Menu() {
  const { setCountryStatsURL } = useContext(AppContext);
  const { setState } = useContext(AppContext);
  const [countryNames, setCountryNames] = useState([]);
  const classes = useStyles();

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
        <Typography className={classes.title} variant='h5'>
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
              setState(true);
              setCountryStatsURL(countryUrl(eachCountry));
            }}>
            {eachCountry}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
