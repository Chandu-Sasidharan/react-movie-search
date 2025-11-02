import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { traktClientId, omdbApiKey } from '@/utils/constants';

export default function useMovies(searchTerm) {
    console.log('I am called');

    const fetchMovies = async () => {
        // If there is no searchTerm, fetch trending movies
        const traktUrl = searchTerm
            ? `https://api.trakt.tv/search/movie?query=${encodeURIComponent(
                  searchTerm
              )}`
            : 'https://api.trakt.tv/movies/trending';

        // Fetch movie data from Trakt API
        const { data } = await axios.get(traktUrl, {
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': traktClientId,
            },
        });

        // Extract IMDb IDs from the fetched data
        const movieIds = data
            .map(({ movie }) => movie.ids.imdb)
            .filter((id) => id !== null && id !== undefined);

        // Create an array of promises to fetch details from OMDB API
        const movieDetailPromises = movieIds.map((id) =>
            axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${omdbApiKey}`)
        );

        // Await all the promises
        const responses = await Promise.all(movieDetailPromises);

        // Filter out invalid responses and extract valid movie data
        const movieDetails = responses
            .filter(
                (response) =>
                    response.status === 200 &&
                    response.data &&
                    response.data.Response !== 'False'
            )
            .map((response) => response.data);

        return movieDetails;
    };

    return useQuery({
        queryKey: ['movies', searchTerm],
        queryFn: fetchMovies,
        staleTime: 10000, // Cache the data for 10 seconds
    });
}
