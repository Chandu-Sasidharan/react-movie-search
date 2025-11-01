import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import createQueryClient from '@/utils/createQueryClient';
import { Navbar, SearchMovies } from '@/components';
import Movies from '@/pages/movies';
import Movie from '@/pages/movie';

function App() {
    const queryClient = createQueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/movies" replace />}
                    />
                    <Route path="/movies" element={<SearchMovies />}>
                        <Route index element={<Movies />} />
                        <Route path="trending" element={<Movies />} />
                    </Route>
                    <Route path="/movie/:imdbID" element={<Movie />} />
                </Routes>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
