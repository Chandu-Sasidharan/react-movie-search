import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import useMovie from '@/hooks/useMovie';

const supportingLink = (movie) => {
    if (movie.imdbID) {
        return `https://www.imdb.com/title/${movie.imdbID}/`;
    }
    return null;
};

const movieDetails = (movie) => {
    if (!movie) return [];
    return [
        { label: 'Genre', value: movie.Genre },
        { label: 'Director', value: movie.Director },
        { label: 'Writer', value: movie.Writer },
        { label: 'Actors', value: movie.Actors },
        { label: 'Awards', value: movie.Awards },
        { label: 'Box Office', value: movie.BoxOffice },
        { label: 'IMDb Rating', value: movie.imdbRating },
    ].filter(({ value }) => value && value !== 'N/A');
};

function Movie() {
    const navigate = useNavigate();
    const { imdbID } = useParams();
    const { state } = useLocation();

    const movieFromState = state?.movie;
    const {
        data: movie,
        isLoading,
        isError,
        error,
    } = useMovie(imdbID, movieFromState);

    const detailRows = movieDetails(movie);
    const externalLink = supportingLink(movie);

    if (isLoading && !movie) {
        return (
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (isError && !movie) {
        const message =
            error instanceof Error
                ? error.message
                : 'Unable to load movie details.';
        return (
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Alert severity="error">{message}</Alert>
            </Container>
        );
    }

    if (!movie) {
        return (
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Alert severity="info">
                    Movie details are not available. Please try another title.
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box
                        component="img"
                        src={movie.Poster !== 'N/A' ? movie.Poster : undefined}
                        alt={movie.Title}
                        sx={{
                            width: '100%',
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: 'cover',
                            display: movie.Poster === 'N/A' ? 'none' : 'block',
                        }}
                    />
                    {movie.Poster === 'N/A' && (
                        <Box
                            sx={{
                                width: '100%',
                                height: 0,
                                paddingTop: '150%',
                                borderRadius: 2,
                                bgcolor: 'grey.200',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="body1" color="text.secondary">
                                Poster not available
                            </Typography>
                        </Box>
                    )}
                </Grid>

                <Grid item xs={12} md={8}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {movie.Title}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ flexWrap: 'wrap', mb: 2 }}
                    >
                        {[movie.Year, movie.Rated, movie.Runtime]
                            .filter((chip) => chip && chip !== 'N/A')
                            .map((chip) => (
                                <Chip key={chip} label={chip} />
                            ))}
                    </Stack>
                    <Typography variant="subtitle1" gutterBottom>
                        {movie.Plot !== 'N/A'
                            ? movie.Plot
                            : 'No synopsis available.'}
                    </Typography>
                    {detailRows.length > 0 && (
                        <Box sx={{ mt: 3 }}>
                            {detailRows.map(({ label, value }) => (
                                <Box key={label} sx={{ mb: 2 }}>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary"
                                    >
                                        {label}
                                    </Typography>
                                    <Typography variant="body1">
                                        {value}
                                    </Typography>
                                    <Divider sx={{ mt: 1 }} />
                                </Box>
                            ))}
                        </Box>
                    )}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center',
                            mt: 3,
                        }}
                    >
                        <Button variant="outlined" onClick={() => navigate(-1)}>
                            Go Back
                        </Button>
                        <Button
                            component="a"
                            href={externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                        >
                            View on IMDb
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Movie;
