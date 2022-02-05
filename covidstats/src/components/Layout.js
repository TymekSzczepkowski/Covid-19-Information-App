import React, { useState } from "react";
import useStyles from "./styles/styles";
import Menu from "./Menu/Menu";
import { AppContext } from "../context/AppContext";
export default function Layout({ children }) {
  const classes = useStyles();
  const [countryStatsURL, setCountryStatsURL] = useState(" ");
  const [state, setState] = useState(false);
  return (
    <div className={classes.root}>
      <AppContext.Provider
        value={{ countryStatsURL, setCountryStatsURL, state, setState }}>
        <Menu classes={classes}></Menu>
        <div className={classes.page}>{children}</div>
      </AppContext.Provider>
    </div>
  );
}
