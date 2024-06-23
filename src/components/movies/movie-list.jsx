import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import MovieDisplay from '@/components/movies/movie-display';

function MovieList({ movieData=[], isLoading, error }) {

  if (isLoading) {
    return (
      <Box sx={{ width: '80%', marginTop: '10px', marginX: 'auto' }}>
        <LinearProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        paddingX: { xs: '10px', sm: '80px' },
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        color: 'error.main'
      }}>
        <Typography sx={{fontSize: 'inherit'}}>
          Error 🚨: {error.message}
        </Typography>
        <Typography>
          Please try again later.
        </Typography>
      </Box>
    );
  }

  if (movieData.length === 0) {
    return (
      <Box sx={{ 
        paddingX: { xs: '10px', sm: '80px' },
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
      }}>
        <Typography sx={{fontSize: 'inherit'}}>
          OOPS 🦆 : You ran out of luck!
        </Typography>
        <Typography>
          Search for something else.  
        </Typography>
      </Box>
    )
  }

  return (
    <Grid container spacing={5} sx={{ paddingX: { xs: '10px', sm: '80px' } }}>
      { movieData.map(movie =>
        <MovieDisplay movie={movie} key={movie.imdbID} />
      )}
    </Grid>
  )
}

export default MovieList;
