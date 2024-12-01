export const environment = {

  api_base:'https://api.spotify.com/v1/',
    client_id: 'a6d7b876f8b6451cbf490e0ea0b54739',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    client_secret: '1d1d07de4b4f4804a1d7b03921e54ba5',
    redirect_url: 'http://localhost:4200/',
    scopes: [
      "user-read-private",
      "app-remote-control",
      "user-read-currently-playing",
      "user-top-read",
      "user-read-email",
      "user-follow-modify",
      "user-library-modify",
      "user-follow-read",
      "playlist-modify-public",
      "playlist-modify-private",
      "user-read-playback-position",
      "user-modify-playback-state",
      "user-library-read",
      "streaming",
      "user-read-playback-state",
      "user-read-recently-played",
      "playlist-read-private",
      "playlist-read-collaborative"
    ]
};
