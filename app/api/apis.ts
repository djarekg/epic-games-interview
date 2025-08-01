/**
 * Calls the free IMDB API to fetch movies by title.
 * @param {string} title - The title of the movie to search for.
 */
export const getMoviesByTitle = async (title: string) => {
  const response = await fetch(`${import.meta.env.VITE_IMDB_API}?&q=${encodeURIComponent(title)}`);

  if (!response.ok) {
    throw new Error(`Error fetching movies: ${response.statusText}`);
  }

  return response.json();
};
