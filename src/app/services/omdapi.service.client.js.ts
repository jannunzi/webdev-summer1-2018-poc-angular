export class OmdapiServiceClientJs {
  FIND_MOVIES_Y_KEYWORD = 'http://www.omdbapi.com/?s=KEYWORD&apikey=852159f0';
  FIND_MOVIE_DETAILS = 'http://www.omdbapi.com/?i=IMDBID&apikey=852159f0';
  findMoviesByKeyword(keyword) {
    const url = this.FIND_MOVIES_Y_KEYWORD.replace('KEYWORD', keyword);
    return fetch(url)
      .then(response => response.json());
  }

  findMovieDetails(imdbID) {
    const url = this.FIND_MOVIE_DETAILS.replace('IMDBID', imdbID);
    return fetch(url)
      .then(response => response.json());
  }
}
