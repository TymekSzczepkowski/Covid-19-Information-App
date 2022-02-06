import { makeStyles } from "@mui/styles";

const drawerWitdh = 240;
export default makeStyles(() => ({
  page: {
    // background: "#f9f9f9",
    width: "100%",
    padding: 20,
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
  title: {
    padding: 13,
  },
  list: {
    overflow: "auto",
  },
  spanTimout: {
    display: "none",
  },
  loadingBox: {
    //responsive problem
    paddingTop: "75px",
    justifyContent: "center",
  },
  searchbar: {
    marginTop: "7.5vh",
  },
  VaccineCard: {
    marginTop: "2.9vh",
  },
}));
