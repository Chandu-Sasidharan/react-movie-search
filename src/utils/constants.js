export const traktClientId = import.meta.env.VITE_TRAKT_CLIENT_ID;
if (!traktClientId) throw new Error('Expected env var VITE_TRAKT_CLIENT_ID');

export const omdbApiKey = import.meta.env.VITE_OMDB_API_KEY;
if (!omdbApiKey) throw new Error('Expected env var VITE_OMDB_API_KEY');
