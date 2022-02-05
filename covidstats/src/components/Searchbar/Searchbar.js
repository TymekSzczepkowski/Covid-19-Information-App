import SearchIcon from "@mui/icons-material/Search";
import { Grid, TextField, InputAdornment } from "@mui/material";
export default function Searchbar(props) {
  return (
    <Grid conatiner>
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
