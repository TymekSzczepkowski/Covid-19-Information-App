import React, { useState } from "react";
import useStyles from "./styles/styles";
import Menu from "./Menu/Menu";
import { AppContext } from "../context/AppContext";
export default function Layout({ children }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [countryStatsURL, setCountryStatsURL] = useState(" ");
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(" ");
  return (
    <div className={classes.root}>
      <AppContext.Provider
        value={{
          countryStatsURL,
          setCountryStatsURL,
          state,
          setState,
          loading,
          setLoading,
          country,
          setCountry,
          show,
          setShow,
        }}>
        <Menu classes={classes}></Menu>
        <div className={classes.page}>{children}</div>
      </AppContext.Provider>
    </div>
  );
}
