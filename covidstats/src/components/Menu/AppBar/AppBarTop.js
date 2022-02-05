import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, Toolbar, AppBar } from "@mui/material";
export default function AppBarTop(props) {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          sm: `calc(100% - 240px)`,
        },
        ml: {
          sm: `240px`,
        },
      }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={props.handleDrawerToggle}
          sx={{
            mr: 2,
            display: {
              sm: "none",
            },
          }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          Coronavirus
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
