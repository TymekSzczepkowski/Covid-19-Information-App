import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext.js";
import AppBarTop from "./AppBar/AppBarTop";
import getCountryList from "../../hooks/getData/getCountryList";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListSubheader,
  Divider,
} from "@mui/material";
import useStyles from "../styles/styles";
import parseCountryUrl from "../../hooks/parseURL/parseCountryUrl";

export default function Menu(props) {
  const { setCountryStatsURL, setState, setLoading } = useContext(AppContext);
  const [countryNames, setCountryNames] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    getCountryList(setCountryNames);
  }, []);

  const drawer = (
    <>
      <div>
        <Typography color='primary' className={classes.title} variant='h4'>
          Covid-19 Live Data
        </Typography>
        <Divider></Divider>
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
              setCountryStatsURL(parseCountryUrl(eachCountry));
            }}>
            {eachCountry}
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      <AppBarTop handleDrawerToggle={handleDrawerToggle}></AppBarTop>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240" },
        }}>
        {drawer}
      </Drawer>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240" },
        }}
        open
        classes={{
          paper: classes.drawerPaper,
        }}>
        {drawer}
      </Drawer>
    </>
  );
}
