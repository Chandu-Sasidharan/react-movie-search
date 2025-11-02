import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import createQueryClient from '@/utils/createQueryClient';
import { Navbar } from '@/components';
import Layout from '@/pages/layout';
import Movies from '@/pages/movies';
import Movie from '@/pages/movie';
import NotFound from '@/pages/not-found';

const queryClient = createQueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/movies" replace />}
                    />
                    <Route path="/movies" element={<Layout />}>
                        <Route index element={<Movies />} />
                    </Route>
                    <Route path="/movie/:imdbID" element={<Movie />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
