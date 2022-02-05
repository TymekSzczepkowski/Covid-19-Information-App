import React from "react";
import useStyles from "./styles";
import Menu from "./Menu";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu classes={classes}></Menu>
      <div className={classes.page}>{children}</div>
    </div>
  );
}
