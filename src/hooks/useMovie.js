import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { omdbApiKey } from '@/utils/constants';

export default function useMovie(imdbID, initialData) {
    const fetchMovie = async (imdbID) => {
        const response = await axios.get(
            `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${omdbApiKey}`
        );

        if (response.data.Response === 'False') {
            throw new Error(response.data.Error || 'Movie not found');
        }

        return response.data;
    };

    return useQuery({
        queryKey: ['movie', imdbID],
        queryFn: () => fetchMovie(imdbID),
        enabled: Boolean(imdbID),
        initialData,
        staleTime: 1000 * 60 * 5,
    });
}
