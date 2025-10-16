import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function truncate(str, wordCount) {
    if (!str) return null;
    return str.split(' ').splice(0, wordCount).join(' ');
}

const hasAllDetails = (movie) => {
    const requiredProperties = ['Title', 'Poster', 'Year', 'Director', 'Plot'];
    const httpsPattern = /^https:\/\//;

    return requiredProperties.every(
        (property) =>
            Boolean(movie[property]) &&
            (property !== 'Poster' || httpsPattern.test(movie[property]))
    );
};

const MovieDisplay = ({ movie }) => {
    const navigate = useNavigate();

    // skipping the movie which does not have all details
    if (!hasAllDetails(movie)) {
        return null;
    }

    const handleOpenMovie = () => {
        navigate(`/movie/${movie.imdbID}`, { state: { movie } });
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Card sx={{ width: 250 }}>
                    <CardActionArea onClick={handleOpenMovie}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={movie.Poster}
                            title={movie.Title}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {movie.Title}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '3px',
                                    marginBottom: '3px',
                                }}
                            >
                                <Typography>{movie.Year}</Typography>
                                <Divider
                                    sx={{ height: 16, m: 0.5 }}
                                    orientation="vertical"
                                />
                                <Typography>{movie.Director}</Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {truncate(movie.Plot, 20)}...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={handleOpenMovie}>
                            Know More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    );
};

export default MovieDisplay;
