import React, { useState, useEffect, useContext } from "react";
import getCountryList from "../../hooks/getCountryList";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import useStyles from "../styles/styles";
import countryUrl from "../../hooks/countryUrl";
import { AppContext } from "../../context/AppContext.js";
export default function Menu() {
  const { setCountryStatsURL, setState, setLoading } = useContext(AppContext);
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
        <Typography color='primary' className={classes.title} variant='h4'>
          Covid-19 Live Data
        </Typography>
      </div>
      <ListSubheader component='div' id='nested-list-subheader'>
        Available countries
      </ListSubheader>
      <List className={classes.list}>
        {countryNames.map((eachCountry) => (
          <ListItem
            className={classes.listItem}
            button
            key={eachCountry}
            onClick={() => {
              setLoading(true);
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
