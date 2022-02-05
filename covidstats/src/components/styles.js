import { makeStyles } from "@mui/styles";

const drawerWitdh = 240;
export default makeStyles(() => ({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWitdh,
  },
  drawerPaper: {
    width: drawerWitdh,
  },
  root: {
    display: "flex",
  },
  listItem: {
    fontFamily: "Roboto",
  },
  covid: {
    padding: 13,
  },
}));
