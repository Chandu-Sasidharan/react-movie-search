import { useForm } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

function SearchMovies({ searchTerm, setSearchTerm, movieData=[] }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const theme = useTheme();

  const onSubmit = (formValue) => {
    setSearchTerm(formValue.movieName);
    reset();
  };

  return (
    <Box>
      <Box sx={{
        paddingX: { xs: '10px', sm: '80px' },
        paddingY: '20px',
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'end',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <Paper
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ 
            padding: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            width: 400 
          }}
        >
          <InputBase
            sx={{ marginLeft: 1, flex: 1 }}
            placeholder='Search Movies'
            {...register('movieName', { required: true })} 
          />
          <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Typography sx={{
          fontFamily: 'monospace'
        }}>
          {!searchTerm && `Here's what's hot right now!`}
          {searchTerm && !!movieData.length && `TADA 🎉 : Results for '${searchTerm}'`}
        </Typography>
      </Box>
      <Typography sx={{
        marginLeft: { xs: '10px', sm: '80px' },
        paddingLeft: '5px',
        height: '24px',
        transform: 'translateY(-15px)',
        color: theme.palette.error.main
      }}>
        {errors.movieName?.type === 'required' && 'Please provide a search term'}
      </Typography>
    </Box>
  );
}

export default SearchMovies;
