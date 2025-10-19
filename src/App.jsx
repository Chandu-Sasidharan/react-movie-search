import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import createQueryClient from '@/utils/createQueryClient';
import { Navbar } from '@/components';
import Home from '@/pages/home';
import Movie from '@/pages/movie';

function App() {
    const queryClient = createQueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:imdbID" element={<Movie />} />
                </Routes>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
