const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const domain = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_DOMAIN : "http://localhost:3000";
const REDIRECT_URI = encodeURIComponent(`${domain}/api/spotify/callback`); // ganti sesuai domainmu
const SCOPES = encodeURIComponent("user-read-currently-playing user-read-playback-state");
const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`;

export default function SpotifyLogin() {
  return (
    <div className="p-6">   
      <a
        href={authUrl}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Login dengan Spotify
      </a>
    </div>
  );
}