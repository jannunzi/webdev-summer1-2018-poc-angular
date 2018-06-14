export class MovieServiceClient {
  likesMovie(movie) {
    fetch('http://localhost:3000/api/likes', {
      body: JSON.stringify(movie),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
