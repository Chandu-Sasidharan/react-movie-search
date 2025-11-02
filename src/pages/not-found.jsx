import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NotFound() {
    return (
        <Container maxWidth="md" sx={{ py: 12 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" component="h1">
                    404
                </Typography>
                <Typography variant="h5">
                    The page you are looking for does not exist.
                </Typography>
                <Typography color="text.secondary">
                    It might have been removed, had its name changed, or is
                    temporarily unavailable.
                </Typography>
                <Button
                    component={RouterLink}
                    to="/movies"
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Back to Movies
                </Button>
            </Box>
        </Container>
    );
}

export default NotFound;
