import { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Pricing', 'Blog'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  // implement auth if need be, the navbar is suitable for an app with auth
  const user = null;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* Large screen branding */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link
            to='/'
            component={RouterLink}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
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

          {/* Small screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button 
                    onClick={() => navigate(`/${page.toLowerCase()}`)}
                    sx={{ color: 'inherit' }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Small screen branding */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link
            to='/'
            component={RouterLink}
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
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

          {/* Large screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => navigate(`/${page.toLowerCase()}`)}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          {/* Welcome message on large screen */}
          <Box
            sx={{
              marginRight: '10px',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {user?.displayName && <span>Welcome, {user.displayName}</span>}
          </Box>
          
          {/* SignIn and SignUp buttons on large screen */}
          {!user && (
            <Link
              // to='/signin'
              component={RouterLink}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                marginRight: '16px',
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  sx={{ 
                    backgroundColor: 'white', 
                    color: 'primary.main', 
                    border: '1px solid white',
                    ':hover': { 
                      backgroundColor: 'primary.main', 
                      color: 'white' 
                    }
                  }}
              >
                Sign In
              </Button>
            </Link>
          )}

          {!user && (
            <Link
              // to='/signup'
              component={RouterLink}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  sx={{ 
                    backgroundColor: 'white', 
                    color: 'primary.main',
                    border: '1px solid white',
                    ':hover': { 
                        backgroundColor: 'primary.main', 
                        color: 'white',
                      }
                    }}
              >
                Sign Up
              </Button>
            </Link>
          )}

          {/* The following menu will appear on large screen if user exists */}
          {user &&         
            <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={user && user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user && (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      component={RouterLink}
                      // onClick={signOut}
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Sign Out
                    </Link>
                  </MenuItem>
                )}

                {user && (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      // to='/user-profile'
                      component={RouterLink}
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      My Profile
                    </Link>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          }

          {/* The following menu will appear on small screens */}
          <Box sx={{ flexGrow: 0,  display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src={user && user.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    component={RouterLink}
                    // onClick={signOut}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    Sign Out
                  </Link>
                </MenuItem>
              )}

              {user && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    // to='/profile'
                    component={RouterLink}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    My Profile
                  </Link>
                </MenuItem>
              )}
              {!user && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    // to='/signin'
                    component={RouterLink}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    Sign In
                  </Link>
                </MenuItem>
              )}
              {!user && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    // to='/signup'
                    component={RouterLink}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    Sign Up
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;