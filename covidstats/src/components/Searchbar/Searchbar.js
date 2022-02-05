import SearchIcon from "@mui/icons-material/Search";
import { Grid, TextField, InputAdornment } from "@mui/material";
import useStyles from "../styles/styles";

export default function Searchbar(props) {
  const classes = useStyles();
  return (
    <Grid conatiner className={classes.searchbar}>
      <Grid item>
        <Grid item>
          <form noValidate autoComplete='off'>
            <TextField
              sx={{
                mb: 2,
              }}
              fullWidth
              id='outlined-basic'
              label='Search country...'
              variant='outlined'
              value={props.search}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => props.setSearch(e.target.value)}></TextField>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
