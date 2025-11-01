import { useEffect } from 'react';
import { useSearchParams, Outlet, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

function SearchMovies() {
    const [searchParams] = useSearchParams();
    const params = searchParams.get('search') || '';
    const navigate = useNavigate();

    useEffect(() => {
        if (!params) {
            navigate('/movies/trending', { replace: true });
        }
    }, [params, navigate]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const theme = useTheme();

    const onSubmit = (formValue) => {
        navigate(`/movies?search=${encodeURIComponent(formValue.searchTerm)}`);
        reset();
    };

    return (
        <>
            <Box>
                <Box
                    sx={{
                        paddingX: { xs: '10px', sm: '80px' },
                        paddingY: '20px',
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'space-between' },
                        alignItems: 'end',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    <Paper
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            padding: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                        }}
                    >
                        <InputBase
                            sx={{ marginLeft: 1, flex: 1 }}
                            placeholder="Search Movies"
                            {...register('searchTerm', { required: true })}
                        />
                        <IconButton
                            type="submit"
                            sx={{ p: '10px' }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    {/* <Typography
                        sx={{
                            fontFamily: 'monospace',
                        }}
                    >
                        {!searchTerm && `Here's what's hot right now!`}
                        {searchTerm &&
                            !!movieData.length &&
                            `TADA 🎉 : Results for '${searchTerm}'`}
                    </Typography> */}
                </Box>
                <Typography
                    sx={{
                        marginLeft: { xs: '10px', sm: '80px' },
                        paddingLeft: '5px',
                        height: '24px',
                        transform: 'translateY(-15px)',
                        color: theme.palette.error.main,
                    }}
                >
                    {errors.searchTerm?.type === 'required' &&
                        'Please provide a search term'}
                </Typography>
            </Box>

            {/* Outlet for nested routes */}
            <Outlet />
        </>
    );
}

export default SearchMovies;
