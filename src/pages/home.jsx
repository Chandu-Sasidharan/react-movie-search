import { useState } from 'react';
import { MovieList, SearchMovies } from '@/components';
import useMovies from '@/hooks/useMovies';

function Movies() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const { data, isLoading, error } = useMovies(searchTerm);
  
  return (
    <>
      <SearchMovies 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        movieData={data} 
      />
      <MovieList 
        movieData={data} 
        isLoading={isLoading} 
        error={error} 
      />
    </>
  )
}

export default Movies;