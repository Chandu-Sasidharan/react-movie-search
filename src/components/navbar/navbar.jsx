import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

function Navbar() {
    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Link
                        to="/movies"
                        component={RouterLink}
                        sx={{
                            mt: 0.5,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            fontSize: '24px',
                            letterSpacing: '3px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
